<div align="center">

<img src="https://img.shields.io/badge/-Mikeno-000000?style=for-the-badge&labelColor=faf9f6&color=faf9f6&logoColor=000000" alt="Mikeno" width="280"/>

<h4>Full-Stack Application Scaffolding Tool</h4>

English | [简体中文](README-CN.md)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" />
  <img alt="License MIT" src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" />
</picture>

</div>

Named after Mount Mikeno, one of the volcanic mountains in the Virunga Mountains, this scaffolding tool helps you build modern applications with solid foundations.

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Why Mikeno?](#why-mikeno)
- [Quick Start](#quick-start)
- [Templates](#templates)
- [Command Line Options](#command-line-options)
- [Contributing](#contributing)
- [License](#license)

## Why Mikeno?

Mikeno is a powerful scaffolding tool that helps you quickly create modern full-stack applications with best practices built-in. Choose between desktop (Electron) or web templates, both featuring Next.js frontend and FastAPI backend.

- **Modern Stack**: Latest Electron, Next.js 15, and FastAPI
- **Zero Configuration**: Pre-configured development environment
- **Two Templates**: Desktop app or web application
- **Professional UI**: Shadcn/ui components with Tailwind CSS
- **Type-Safe**: TypeScript support out of the box

## Quick Start

**Prerequisites**
- Node.js 18+ and npm
- Python 3.8+

**Get Started**
```bash
# Using npx (recommended)
npx create-mikeno-app my-app

# Using npm
npm create mikeno-app my-app

# Using pnpm
pnpm create mikeno-app my-app

# Using yarn
yarn create mikeno-app my-app
```

## Templates

### 🖥️ Desktop Template

Full-featured desktop application with:
- **Electron**: Cross-platform desktop framework
- **Next.js**: Modern React frontend
- **FastAPI**: High-performance Python backend
- **electron-builder**: Professional packaging

**Perfect for:**
- Desktop applications
- Offline-first apps
- System integration tools

### 🌐 Web Template

Modern web application with:
- **Next.js**: React framework with SSR/SSG
- **FastAPI**: Python backend API
- **Docker**: Containerized deployment
- **Tailwind CSS**: Utility-first CSS

**Perfect for:**
- Web applications
- SaaS platforms
- API services

## Command Line Options

```bash
# Create with specific template
npx create-mikeno-app my-app --template desktop
npx create-mikeno-app my-app --template web

# Skip dependency installation
npx create-mikeno-app my-app --skip-install

# Show help
npx create-mikeno-app --help

# Show version
npx create-mikeno-app --version
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
