# Icon Resources

This directory contains icons for the Electron application.

## Required Icons

### macOS
- **icon.icns** - macOS icon file (1024x1024 px recommended)
  - Use `iconutil` or online tools to create from PNG
  - Required sizes: 16x16, 32x32, 128x128, 256x256, 512x512, 1024x1024

### Windows
- **icon.ico** - Windows icon file
  - Required sizes: 16x16, 32x32, 48x48, 64x64, 128x128, 256x256

### Linux
Create a directory `icons/` with the following PNG files:
- **16x16.png**
- **32x32.png**
- **48x48.png**
- **64x64.png**
- **128x128.png**
- **256x256.png**
- **512x512.png**

## Creating Icons

### From a single PNG (1024x1024)

#### macOS (.icns)
```bash
# Create iconset directory
mkdir icon.iconset

# Generate different sizes
sips -z 16 16     icon_1024.png --out icon.iconset/icon_16x16.png
sips -z 32 32     icon_1024.png --out icon.iconset/icon_16x16@2x.png
sips -z 32 32     icon_1024.png --out icon.iconset/icon_32x32.png
sips -z 64 64     icon_1024.png --out icon.iconset/icon_32x32@2x.png
sips -z 128 128   icon_1024.png --out icon.iconset/icon_128x128.png
sips -z 256 256   icon_1024.png --out icon.iconset/icon_128x128@2x.png
sips -z 256 256   icon_1024.png --out icon.iconset/icon_256x256.png
sips -z 512 512   icon_1024.png --out icon.iconset/icon_256x256@2x.png
sips -z 512 512   icon_1024.png --out icon.iconset/icon_512x512.png
sips -z 1024 1024 icon_1024.png --out icon.iconset/icon_512x512@2x.png

# Create .icns file
iconutil -c icns icon.iconset -o icon.icns
```

#### Windows (.ico)
Use online tools like:
- https://icoconvert.com/
- https://convertio.co/png-ico/
- Or use ImageMagick: `convert icon.png -define icon:auto-resize=256,128,64,48,32,16 icon.ico`

#### Linux (PNG)
```bash
mkdir icons
for size in 16 32 48 64 128 256 512; do
  sips -z $size $size icon_1024.png --out icons/${size}x${size}.png
done
```

## Quick Setup with Placeholder

If you don't have icons yet, electron-builder will use default Electron icons during development.

For production, you should create proper icons.

## Tools

- **iconutil** (macOS built-in)
- **ImageMagick** - Cross-platform image manipulation
- **electron-icon-builder** - NPM package for icon generation
  ```bash
  npm install -g electron-icon-builder
  electron-icon-builder --input=./icon.png --output=./
  ```

## Notes

- Icons should have transparent backgrounds for best results
- Use PNG format for source images (1024x1024 or higher)
- Test icons on all target platforms
- electron-builder will automatically find and use icons if named correctly

