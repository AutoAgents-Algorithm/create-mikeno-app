# Donatello Root Makefile
# Convenience commands for the entire project

.PHONY: help install dev electron docker-build docker-up clean

# Default target shows available commands
help:
	@echo "Donatello Project - Available Commands:"
	@echo ""
	@echo "Setup & Installation:"
	@echo "  make install           - Install all dependencies (web + electron)"
	@echo "  make setup             - Run interactive setup wizard"
	@echo ""
	@echo "Development:"
	@echo "  make dev               - Start web development servers (frontend + backend)"
	@echo "  make electron          - Build & start Electron app (run 'make dev' first)"
	@echo "  make electron-dev      - Watch Electron TypeScript compilation"
	@echo ""
	@echo "Building:"
	@echo "  make build-backend     - Build backend with PyInstaller"
	@echo "  make build-electron    - Package Electron app for current platform"
	@echo "  make build-electron-all - Package Electron app for all platforms"
	@echo "  make build-all         - Build everything (backend + electron)"
	@echo ""
	@echo "Docker:"
	@echo "  make docker-build      - Build Docker images"
	@echo "  make docker-up         - Start with Docker Compose"
	@echo "  make docker-down       - Stop Docker services"
	@echo ""
	@echo "Utilities:"
	@echo "  make clean             - Clean build artifacts"
	@echo "  make clean-all         - Deep clean (including node_modules, venv)"

# Setup
setup:
	@echo "🔧 Running setup wizard..."
	cd web && ./setup.sh

# Install all dependencies
install:
	@echo "📦 Installing all dependencies..."
	@echo "📦 Installing web dependencies..."
	cd web && $(MAKE) install
	@echo "📦 Installing Electron dependencies..."
	cd electron && npm install
	@echo "✅ All dependencies installed!"

# Development
dev:
	@echo "🚀 Starting web development servers..."
	@echo "Run 'make electron' in another terminal to launch Electron app"
	cd web && $(MAKE) dev

electron:
	@echo "🖥️  Starting Electron app..."
	@echo "Note: Make sure web dev servers are running first (cd web && make dev)"
	@echo ""
	cd electron && npm run build && npm start

electron-dev:
	@echo "🖥️  Starting Electron in watch mode..."
	@echo "In another terminal, run: cd electron && npm start"
	cd electron && npm run dev

# Building
build-backend:
	@echo "🔨 Building backend with PyInstaller..."
	cd web && $(MAKE) build-backend

build-electron:
	@echo "🔨 Building and packaging Electron app..."
	cd electron && npm run package

build-electron-all:
	@echo "🔨 Building Electron app for all platforms..."
	cd electron && npm run package:all

build-all: build-backend build-electron
	@echo "✅ All builds complete!"

# Docker
docker-build:
	@echo "🐳 Building Docker images..."
	docker-compose -f docker/docker-compose.yml build

docker-up:
	@echo "🐳 Starting Docker services..."
	docker-compose -f docker/docker-compose.yml up

docker-down:
	@echo "🛑 Stopping Docker services..."
	docker-compose -f docker/docker-compose.yml down

# Cleaning
clean:
	@echo "🧹 Cleaning build artifacts..."
	cd web/backend && rm -rf dist build __pycache__ *.pyc
	cd web/frontend && rm -rf .next out
	cd electron && rm -rf dist
	@echo "✅ Clean complete!"

clean-all: clean
	@echo "🧹 Deep cleaning..."
	cd web/frontend && rm -rf node_modules
	cd electron && rm -rf node_modules
	cd web/backend && rm -rf venv __pycache__
	@echo "✅ Deep clean complete!"

