# Mikeno Backend

FastAPI backend for Mikeno application.

## Development

1. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run development server:
```bash
python -m api.main
# Or
uvicorn api.main:app --reload --host 0.0.0.0 --port 8000
```

## Building with PyInstaller

To build a standalone executable:

### On macOS/Linux:
```bash
./build.sh
```

### On Windows:
```bash
build.bat
```

The executable will be created in `./dist/mikeno-backend` (or `.exe` on Windows).

## Directory Structure

```
backend/
├── api/            # FastAPI application
│   ├── __init__.py
│   └── main.py     # Main application entry point
├── services/       # Business logic and services
│   ├── __init__.py
│   └── agent.py    # AI Agent service
├── dist/           # PyInstaller build output
├── requirements.txt
├── mikeno.spec  # PyInstaller specification
├── build.sh        # Build script (Unix)
└── build.bat       # Build script (Windows)
```

## Running the Executable

After building:
```bash
./dist/mikeno-backend
```

The server will start on `http://0.0.0.0:8000`
