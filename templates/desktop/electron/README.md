# Mikeno Electron App

Desktop application built with Electron and TypeScript, wrapping the Next.js web frontend.

## Quick Start

```bash
# Install dependencies
npm install

# Development mode (watch TypeScript)
npm run dev

# In another terminal, run the app
npm start
```

## Development

### Watch Mode

```bash
npm run dev          # Watch all (main, preload, renderer)
npm run dev:main     # Watch main process only
npm run dev:preload  # Watch preload only
npm run dev:renderer # Watch renderer only
```

### Run Application

```bash
npm start            # Run with current NODE_ENV
npm run start:dev    # Force development mode
npm run start:prod   # Force production mode
```

## Building

### Compile TypeScript

```bash
npm run build        # Build all
npm run compile      # Alias for build
```

### Package with electron-builder

```bash
# Build for current platform
npm run package

# Build for specific platforms
npm run package:mac     # macOS (DMG, ZIP)
npm run package:win     # Windows (NSIS, ZIP)
npm run package:linux   # Linux (AppImage, DEB, RPM)
npm run package:all     # All platforms

# Aliases
npm run dist            # Same as package
npm run dist:mac        # Same as package:mac
npm run dist:win        # Same as package:win
npm run dist:linux      # Same as package:linux
```

Output will be in `release/` directory.

## Architecture

```
electron/
├── main/                # Main process (window management, native APIs)
│   └── index.ts        # Entry point, auto-updater, IPC handlers
├── preload/            # Preload scripts (secure IPC bridge)
│   └── index.ts        # Expose safe APIs to renderer
├── renderer/           # Renderer process (additional UI logic)
│   └── index.ts        # Renderer-side code
├── resources/          # Build resources (icons, entitlements)
│   ├── icon.icns       # macOS icon (add your own)
│   ├── icon.ico        # Windows icon (add your own)
│   ├── icons/          # Linux icons (add your own)
│   └── entitlements.mac.plist
├── dist/               # Compiled JavaScript (gitignored)
├── release/            # Built packages (gitignored)
└── package.json        # electron-builder configuration
```

## Features

- ✅ TypeScript with strict mode
- ✅ Separate tsconfig for each process
- ✅ electron-builder configuration
- ✅ Auto-updater integration (electron-updater)
- ✅ Context isolation and sandboxing
- ✅ Secure IPC communication
- ✅ Application menu
- ✅ Development/production modes
- ✅ Multi-platform builds (macOS, Windows, Linux)
- ✅ Code signing ready
- ✅ DMG, NSIS, AppImage installers

## Configuration

### electron-builder

Configuration is in `package.json` under the `build` section.

Alternatively, you can use `electron-builder.yml` (see included file).

Key configurations:
- **appId**: `com.mikeno.app`
- **productName**: `Mikeno`
- **Targets**: DMG/ZIP (Mac), NSIS/ZIP (Win), AppImage/DEB/RPM (Linux)
- **Icons**: Place in `resources/` (see ICONS_README.md)

### Environment Variables

- `NODE_ENV=development` - Development mode (loads localhost:3000)
- `NODE_ENV=production` - Production mode (loads built Next.js)

## Icons

You need to provide your own icons:

- **macOS**: `resources/icon.icns` (1024x1024)
- **Windows**: `resources/icon.ico` (256x256)
- **Linux**: `resources/icons/*.png` (multiple sizes)

See `resources/ICONS_README.md` for detailed instructions on creating icons.

## Code Signing

### macOS

```bash
export CSC_LINK=/path/to/certificate.p12
export CSC_KEY_PASSWORD=your_password
npm run package:mac
```

### Windows

```bash
export CSC_LINK=/path/to/certificate.pfx
export CSC_KEY_PASSWORD=your_password
npm run package:win
```

## Auto-Updates

The app includes electron-updater for automatic updates.

Configure the `publish` section in `package.json` with your:
- GitHub repository
- Or S3 bucket
- Or custom update server

Updates are checked on app startup in production mode.

## Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Watch TypeScript compilation |
| `npm run build` | Compile TypeScript |
| `npm start` | Run Electron app |
| `npm run package` | Build for current platform |
| `npm run package:mac` | Build for macOS |
| `npm run package:win` | Build for Windows |
| `npm run package:linux` | Build for Linux |
| `npm run package:all` | Build for all platforms |
| `npm run clean` | Remove dist and release folders |
| `npm run rebuild` | Clean and reinstall dependencies |

## Frontend Integration

The Electron app loads the Next.js frontend:

- **Development**: Loads `http://localhost:3000` (start with `make dev` in web/)
- **Production**: Loads built Next.js from `../web/frontend/out/`

Make sure the web frontend is running (development) or built (production).

## Troubleshooting

### App won't start
- Check that TypeScript is compiled: `npm run build`
- Verify main entry point: `dist/main/index.js`
- Check console errors: `npm start` and look at terminal output

### Build fails
- Update dependencies: `npm update`
- Clear cache: `npm run clean && npm install`
- Check electron-builder logs in terminal

### Icons not showing
- Verify icon files exist in `resources/`
- Check file names match package.json
- Rebuild: `npm run package`

## Documentation

- [BUILD_GUIDE.md](./BUILD_GUIDE.md) - Complete build documentation
- [resources/ICONS_README.md](./resources/ICONS_README.md) - Icon creation guide
- [electron-builder docs](https://www.electron.build/)
- [Electron docs](https://www.electronjs.org/docs)

## License

MIT

