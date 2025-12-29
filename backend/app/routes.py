from flask import Blueprint, request, jsonify
import sys
import os
import sqlite3

# Ensure valid imports for services
# Assuming running from backend/ directory, so backend/ is in sys.path
# We might need to adjust imports if structure is complex, but 'app.services' should work if 'app' is package

# Import services
# We try-except import to match original robustness, or we can just import assuming dependencies exist.
# The original code had robustness for missing modules. I will preserve it but adapt for new structure.

# Main Blueprint
main_bp = Blueprint('main', __name__)

# --- Service Imports & Logic wrappers ---

# 1. ML Service
class MLStub:
    @staticmethod
    def init_db():
        print("Warning: Using stub ML module - database initialization skipped")
        return True
    
    @staticmethod
    def process_scan(img, usr):
        raise importError("ML module not properly initialized")

ml_logic = None

try:
    from .services.ml_service import init_db, process_scan
    
    class MLLogic:
        @staticmethod
        def init_db():
            return init_db()
        @staticmethod
        def process_scan(img, usr):
            return process_scan(img, usr)
    
    ml_logic = MLLogic()
    print("ML module imported successfully")
except ImportError as e:
    print(f"Error importing ML module: {e}")
    print("Using stub ML module. Scan processing will not work.")
    ml_logic = MLStub()


# 2. Risk Assessment Service
try:
    from .services.risk_service import run_quiz_from_conversation
except ImportError:
    print("Warning: risk_assessment module not found. /api/risk-assessment endpoint will fail.")
    def run_quiz_from_conversation(conv): return {"error": "Module not found"}


# 3. Chatbot Service
try:
    from .services.chat_service import get_chat_response
except ImportError:
    print("Warning: chatbot module not found. /api/chat endpoint will fail.")
    def get_chat_response(msg): return "Chatbot module not found"


# --- Initialization on Blueprint registration (or just global) ---
# For database init, it's better to do it when the app starts. 
# But here we are at module level. 
if ml_logic:
    if not ml_logic.init_db():
        print("FATAL ERROR: Database initialization failed. Application might not function correctly.")


# --- Routes ---

@main_bp.route('/api/check_scan', methods=['POST'])
def check_scan_route():
    """Endpoint to receive scan image and user info, process via ML module, and return results."""
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 415

    data = request.get_json()
    img_b64 = data.get("image")
    user_info = {
        "fullName": data.get("fullName"),
        "age": data.get("age"),
        "gender": data.get("gender"),
        "contact": data.get("contact"),
    }

    # Basic Validation
    if not img_b64:
        return jsonify({"error": "Missing 'image' data (base64 encoded)."}), 400
    if not user_info["fullName"] or not user_info["age"] or not user_info["gender"]:
        return jsonify({"error": "Missing required fields: 'fullName', 'age', 'gender'."}), 400

    try:
        # Call the processing function from the ML module
        results = ml_logic.process_scan(img_b64, user_info)
        return jsonify(results), 200

    except ConnectionError as e:
        print(f"Connection/Processing Error in check_scan_route: {e}")
        return jsonify({"error": f"Processing failed: {e}"}), 500
    except ValueError as e:
        print(f"Value Error in check_scan_route: {e}")
        return jsonify({"error": f"Invalid input data: {e}"}), 400
    except sqlite3.Error as e:
        print(f"Database Error in check_scan_route: {e}")
        return jsonify({"error": "A database error occurred."}), 500
    except Exception as e:
        print(f"Unexpected Error in /api/check_scan route: {e.__class__.__name__}: {e}")
        return jsonify({"error": "An unexpected server error occurred."}), 500


@main_bp.route('/api/risk-assessment', methods=['POST'])
def risk_assessment():
    """Endpoint for risk assessment based on conversation."""
    if not request.is_json: return jsonify({"error": "Request must be JSON"}), 415
    try:
        data = request.get_json(); conversation = data.get("conversation", [])
        if not conversation or not isinstance(conversation, list): return jsonify({"error": "Conversation must be a non-empty list."}), 400
        result = run_quiz_from_conversation(conversation)
        if isinstance(result, dict) and "interpretation" in result:
            risk_assessment_result = result.get("interpretation")
            return jsonify({"risk_assessment_result": risk_assessment_result or "No interpretation available."}), 200
        elif isinstance(result, dict) and "error" in result: return jsonify({"error": result["error"]}), 400
        else: return jsonify({"error": "Failed to process risk assessment."}), 500
    except Exception as e: print(f"Error in /api/risk-assessment: {e}"); return jsonify({"error": "Internal server error."}), 500


@main_bp.route('/api/chat', methods=['POST'])
def chat():
    """Endpoint for the chatbot."""
    if not request.is_json: return jsonify({"error": "Request must be JSON"}), 415
    try:
        user_message = request.get_json().get('message', '')
        if not user_message: return jsonify({"error": "Empty message received."}), 400
        response_message = get_chat_response(user_message)
        return jsonify({'response': response_message}), 200
    except Exception as e: print(f"Error in /api/chat: {e}"); return jsonify({"error": "Internal server error."}), 500
