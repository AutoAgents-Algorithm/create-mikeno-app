<div align="center">

<img src="https://img.shields.io/badge/-Mikeno%20Web-000000?style=for-the-badge&labelColor=faf9f6&color=faf9f6&logoColor=000000" alt="Mikeno Web" width="320"/>

<h4>Modern Web Application Template</h4>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" />
  <img alt="License MIT" src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" />
</picture>

</div>

A modern web application template with Next.js frontend and FastAPI backend, ready for production deployment.

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Development](#development)
- [Building](#building)
- [Deployment](#deployment)
- [License](#license)

## Tech Stack

**Frontend**
- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS
- Shadcn/ui components

**Backend**
- FastAPI
- Python 3.8+
- Uvicorn ASGI server

**DevOps**
- Docker & Docker Compose
- Hot reload for development

## Quick Start

**Prerequisites**
- Node.js 18+
- Python 3.8+
- Docker (optional)

**Get Started**
```bash
# 1. Install dependencies
make setup

# 2. Start development servers
make dev
```

This starts:
- Frontend: http://localhost:3000
- Backend: http://localhost:8000

## Development

**Available Commands**
```bash
make setup          # Install all dependencies
make dev            # Start development servers
make frontend       # Start frontend only
make backend        # Start backend only
make build          # Build for production
make clean          # Clean build artifacts
```

**Project Structure**
```
web/
├── frontend/       # Next.js application
│   ├── app/       # App router pages
│   └── components/ # React components
├── backend/        # FastAPI application
│   ├── api/       # API routes
│   └── services/  # Business logic
└── docker/         # Docker configuration
```

## Building

**Build Frontend**
```bash
cd web/frontend
npm run build
npm start
```

**Build Backend Executable**
```bash
cd web/backend
./build.sh          # macOS/Linux
build.bat           # Windows
```

## Deployment

**Docker Deployment**
```bash
# Build and start
make docker-build
make docker-up

# Stop
make docker-down
```

**Manual Deployment**
```bash
# Build frontend
cd web/frontend && npm run build

# Run frontend
npm start

# Run backend
cd web/backend
uvicorn api.main:app --host 0.0.0.0 --port 8000
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
