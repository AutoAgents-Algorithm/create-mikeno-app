.PHONY: help install dev build clean frontend backend docker-build docker-up docker-down setup

help:
	@echo "Donatello Web Application - Available commands:"
	@echo ""
	@echo "  make setup          - Initial setup (install all dependencies)"
	@echo "  make install        - Install all dependencies"
	@echo "  make dev            - Start development servers"
	@echo "  make build          - Build all components"
	@echo "  make clean          - Clean build artifacts"
	@echo ""
	@echo "Frontend commands:"
	@echo "  make frontend       - Start frontend dev server"
	@echo "  make build-frontend - Build frontend for production"
	@echo ""
	@echo "Backend commands:"
	@echo "  make backend        - Start backend dev server"
	@echo ""
	@echo "Docker commands:"
	@echo "  make docker-build   - Build Docker images"
	@echo "  make docker-up      - Start Docker containers"
	@echo "  make docker-down    - Stop Docker containers"

# Setup
setup: install
	@echo "✅ Setup complete!"
	@echo ""
	@echo "Quick start:"
	@echo "  make dev          - Start development servers"
	@echo ""

# Install all dependencies
install:
	@echo "📦 Installing dependencies..."
	@echo ""
	@echo "Installing frontend dependencies..."
	cd web/frontend && npm install
	@echo ""
	@echo "Installing backend dependencies..."
	cd web/backend && pip install -r requirements.txt
	@echo ""
	@echo "✅ All dependencies installed!"

# Development
dev:
	@echo "🚀 Starting development servers..."
	@echo ""
	@echo "Frontend: http://localhost:3000"
	@echo "Backend:  http://localhost:8000"
	@echo ""
	@$(MAKE) -j2 frontend backend

frontend:
	cd web/frontend && npm run dev

backend:
	cd web/backend && uvicorn api.main:app --reload --host 0.0.0.0 --port 8000

# Build
build: build-frontend
	@echo "✅ Build complete!"

build-frontend:
	@echo "📦 Building frontend..."
	cd web/frontend && npm run build

# Clean
clean:
	@echo "🧹 Cleaning build artifacts..."
	rm -rf web/frontend/.next
	rm -rf web/frontend/out
	rm -rf web/backend/**/__pycache__
	rm -rf web/backend/**/*.pyc
	@echo "✅ Clean complete!"

# Docker
docker-build:
	@echo "🐳 Building Docker images..."
	cd docker && docker-compose build

docker-up:
	@echo "🐳 Starting Docker containers..."
	cd docker && docker-compose up -d
	@echo ""
	@echo "Services running:"
	@echo "  Frontend: http://localhost:3000"
	@echo "  Backend:  http://localhost:8000"

docker-down:
	@echo "🐳 Stopping Docker containers..."
	cd docker && docker-compose down
