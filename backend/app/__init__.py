from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask("her's")
    
    # Configure CORS
    # Note: Update origin if necessary for production
    CORS(app, origins=["http://localhost:3000"]) 
    
    from .routes import main_bp
    app.register_blueprint(main_bp)
    
    return app
