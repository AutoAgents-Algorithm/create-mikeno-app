@echo off
REM Build script for Mikeno backend using PyInstaller (Windows)

echo === Building Mikeno Backend with PyInstaller ===

REM Ensure we're in the backend directory
cd /d "%~dp0"

REM Clean previous builds
echo Cleaning previous builds...
if exist dist rmdir /s /q dist
if exist build rmdir /s /q build

REM Run PyInstaller
echo Running PyInstaller...
pyinstaller mikeno.spec

REM Check if build was successful
if %ERRORLEVEL% EQU 0 (
    echo Build successful!
    echo Executable location: .\dist\mikeno-backend.exe
) else (
    echo Build failed!
    exit /b 1
)

echo === Build Complete ===

