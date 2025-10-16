<div align="center">

<img src="https://img.shields.io/badge/-Mikeno-000000?style=for-the-badge&labelColor=faf9f6&color=faf9f6&logoColor=000000" alt="Mikeno" width="280"/>

<h4>全栈应用脚手架工具</h4>

[English](README.md) | 简体中文

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" />
  <img alt="License MIT" src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" />
</picture>

</div>

以维龙加山脉中的火山之一——米凯诺山（Mount Mikeno）命名，这个脚手架工具帮助你构建具有坚实基础的现代应用程序。

## 目录
- [目录](#目录)
- [为什么选择 Mikeno？](#为什么选择-mikeno)
- [快速开始](#快速开始)
- [模板](#模板)
- [命令行选项](#命令行选项)
- [贡献](#贡献)
- [许可证](#许可证)

## 为什么选择 Mikeno？

Mikeno 是一个强大的脚手架工具，帮助你快速创建内置最佳实践的现代全栈应用。选择桌面端（Electron）或 Web 端模板，两者都配备 Next.js 前端和 FastAPI 后端。

- **现代化技术栈**：最新的 Electron、Next.js 15 和 FastAPI
- **零配置**：预配置的开发环境
- **两种模板**：桌面应用或 Web 应用
- **专业 UI**：Shadcn/ui 组件和 Tailwind CSS
- **类型安全**：开箱即用的 TypeScript 支持

## 快速开始

**环境要求**
- Node.js 18+ 和 npm
- Python 3.8+

**开始使用**
```bash
# 使用 npx（推荐）
npx create-mikeno-app my-app

# 使用 npm
npm create mikeno-app my-app

# 使用 pnpm
pnpm create mikeno-app my-app

# 使用 yarn
yarn create mikeno-app my-app
```

## 模板

### 🖥️ 桌面端模板

完整的桌面应用解决方案：
- **Electron**：跨平台桌面框架
- **Next.js**：现代 React 前端
- **FastAPI**：高性能 Python 后端
- **electron-builder**：专业打包工具

**适用于：**
- 桌面应用程序
- 离线优先应用
- 系统集成工具

### 🌐 Web 端模板

现代 Web 应用：
- **Next.js**：支持 SSR/SSG 的 React 框架
- **FastAPI**：Python 后端 API
- **Docker**：容器化部署
- **Tailwind CSS**：实用优先的 CSS

**适用于：**
- Web 应用程序
- SaaS 平台
- API 服务

## 命令行选项

```bash
# 使用特定模板创建
npx create-mikeno-app my-app --template desktop
npx create-mikeno-app my-app --template web

# 跳过依赖安装
npx create-mikeno-app my-app --skip-install

# 显示帮助
npx create-mikeno-app --help

# 显示版本
npx create-mikeno-app --version
```

## 贡献

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

