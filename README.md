# Her's - Breast Cancer Early Detection and Awareness

<div align="center">
  <img src="https://img.shields.io/badge/Status-Active-success" alt="Project Status">
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="License">
  <img src="https://img.shields.io/badge/Python-3.8+-blue" alt="Python">
  <img src="https://img.shields.io/badge/Next.js-13+-black" alt="Next.js">
</div>

A comprehensive full-stack application designed to promote breast cancer awareness, early detection, and personalized risk assessment. The platform leverages advanced machine learning models, AI-powered chatbots, and interactive quizzes to provide users with valuable health insights and support.

---

## Features

### AI-Powered Health Assistant
- **Engine**: Groq (Llama 3.1)
- Natural language processing for health-related queries
- Provides reliable, evidence-based medical information
- 24/7 availability for health concerns and guidance

### Comprehensive Risk Assessment
- **Engine**: Groq (Llama 3.1)
- Personalized breast cancer risk evaluation
- Considers genetic, lifestyle, and medical history factors
- Provides actionable insights and recommendations with structured analysis

### Advanced Scan Analysis
- **Engine**: Roboflow Computer Vision
- AI-assisted analysis of medical images (mammograms/ultrasound)
- Quick and accurate preliminary assessments
- Secure storage of scan results with privacy controls

### Educational Blog Section
- Informative articles about breast health and cancer awareness
- Latest research and medical advancements
- Personal stories and community experiences
- Tips for self-examination and early detection

### User-Friendly Dashboard
- Intuitive interface for easy navigation
- Secure user authentication and data management
- Personalized health insights and history

---

## Project Structure

The codebase is organized into a modular frontend-backend architecture:

```
/
├── frontend/             # Next.js Application
│   ├── app/              # App Router pages and layouts
│   ├── components/       # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and helpers
│   ├── styles/           # Global and component styles
│   └── public/           # Static assets
│
├── backend/              # Python Flask API
│   ├── app/              # Application package
│   │   ├── services/     # Business logic (ML, Chat, Risk)
│   │   ├── routes.py     # API endpoints
│   │   └── __init__.py   # App factory
│   ├── data/             # Data storage
│   │   ├── scans.db      # SQLite database
│   │   └── ...           # Quiz JSON and sample data
│   ├── app.py            # Entry point
│   ├── config.py         # Application configuration
│   └── requirements.txt  # Python dependencies
│
└── routes/               # Shared route definitions
```

---

## Tech Stack

### Backend
- **Runtime**: Python 3.8+
- **Framework**: Flask with modular Blueprint architecture
- **Database**: SQLite
- **AI / ML**:
  - Roboflow API for medical image analysis
  - Groq API (Llama 3.1) for natural language processing and risk assessment
- **API Style**: RESTful

### Frontend
- **Framework**: Next.js 13+ with React 18+
- **Styling**: Tailwind CSS with custom theming
- **Icons**: Lucide React
- **State Management**: React Context API
- **Form Handling**: React Hook Form with Yup validation

---

## Getting Started

### Prerequisites
- Python 3.8 or higher
- Node.js 16+ and npm 8+
- API keys for Roboflow and Groq

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/breast-care.git
cd breast-care
```

**2. Backend Setup**
```bash
# Navigate to the backend directory
cd backend

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate       # Linux / macOS
.\venv\Scripts\activate        # Windows

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
# Create a .env file or update backend/config.py with the following keys:
# ROBOFLOW_API_KEY=<your_key>
# GROQ_API_KEY=<your_key>

# Start the backend server (SQLite database initializes automatically)
python app.py
```

**3. Frontend Setup**
```bash
# Open a new terminal and navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

**4. Access the Application**
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

---

## API Documentation

### Chat

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/chat` | Interact with the AI health assistant |

Request body:
```json
{
  "message": "What are the early signs of breast cancer?"
}
```

### Scan Analysis

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/check_scan` | Submit a medical scan for AI analysis |

Request body:
```json
{
  "image": "base64_encoded_image",
  "fullName": "Jane Doe",
  "age": 45,
  "gender": "Female",
  "contact": "1234567890"
}
```

### Risk Assessment

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/risk-assessment` | Process a risk assessment based on quiz conversation history |

Request body:
```json
{
  "conversation": [
    { "role": "assistant", "content": "Question 1..." },
    { "role": "user",      "content": "Answer 1..."   }
  ]
}
```

---

## Testing

### Backend
```bash
cd backend
pytest
```

### Frontend
```bash
cd frontend
npm test
```

---

## Contact

For questions or support, reach out at [anvragsingh@gmail.com](mailto:anvragsingh@gmail.com).

---

<div align="center">
  Made to support breast cancer awareness and early detection through innovative technology.
</div>
