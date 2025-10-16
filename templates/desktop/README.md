<div align="center">

<img src="https://img.shields.io/badge/-Mikeno%20Desktop-000000?style=for-the-badge&labelColor=faf9f6&color=faf9f6&logoColor=000000" alt="Mikeno Desktop" width="360"/>

<h4>Cross-Platform Desktop Application Template</h4>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" />
  <img alt="License MIT" src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" />
</picture>

</div>

A modern desktop application template with Electron, Next.js frontend, and FastAPI backend, ready for cross-platform distribution.

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Development](#development)
- [Building](#building)
- [Distribution](#distribution)
- [License](#license)

## Tech Stack

**Desktop**
- Electron 28+
- TypeScript
- electron-builder for packaging

**Frontend**
- Next.js 15 with App Router
- React 19
- Tailwind CSS
- Shadcn/ui components

**Backend**
- FastAPI
- Python 3.8+

## Quick Start

**Prerequisites**
- Node.js 18+
- Python 3.8+

**Get Started**
```bash
# 1. Install dependencies
make install

# 2. Start web services (Terminal 1)
make dev

# 3. Start Electron app (Terminal 2)
make electron
```

## Development

**Available Commands**
```bash
make install        # Install all dependencies
make dev            # Start web dev servers
make electron       # Start Electron app
make build-electron # Build app for current platform
make package        # Package without installer
make dist           # Build and create installer
```

**Project Structure**
```
desktop/
├── electron/       # Electron application
│   ├── main/      # Main process
│   ├── preload/   # Preload scripts
│   └── resources/ # App icons
├── web/
│   ├── frontend/  # Next.js application
│   └── backend/   # FastAPI application
└── docker/         # Docker configuration
```

## Building

**Build Electron App**
```bash
# Build for current platform
make build-electron

# Build for specific platforms
cd electron
npm run package:mac     # macOS
npm run package:win     # Windows
npm run package:linux   # Linux
```

## Distribution

**Package Formats**

- **macOS**: DMG, ZIP (Intel & Apple Silicon)
- **Windows**: NSIS installer, ZIP (x64, x86)
- **Linux**: AppImage, DEB, RPM (x64, ARM64)

**Build All Platforms**
```bash
cd electron
npm run package:all
```

**Output Location**
```
electron/release/
├── Mikeno-1.0.0-mac-x64.dmg
├── Mikeno-1.0.0-mac-arm64.dmg
├── Mikeno-Setup-1.0.0.exe
├── Mikeno-1.0.0.AppImage
└── ...
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
