#!/bin/bash

# Build script for Mikeno backend using PyInstaller

echo "=== Building Mikeno Backend with PyInstaller ==="

# Ensure we're in the backend directory
cd "$(dirname "$0")"

# Clean previous builds
echo "Cleaning previous builds..."
rm -rf dist build *.spec~

# Run PyInstaller
echo "Running PyInstaller..."
pyinstaller mikeno.spec

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✓ Build successful!"
    echo "Executable location: ./dist/mikeno-backend"
    
    # Make the executable... executable (if on Unix-like system)
    if [ -f "./dist/mikeno-backend" ]; then
        chmod +x ./dist/mikeno-backend
        echo "✓ Made executable"
    fi
else
    echo "✗ Build failed!"
    exit 1
fi

echo "=== Build Complete ==="

