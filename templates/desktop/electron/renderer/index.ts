// Renderer process code
// This can be used for additional renderer-side logic if needed
// Most of the UI will be handled by Next.js frontend

console.log('Mikeno Electron Renderer Process Started');

// Example: Display app version in console
// The electronAPI is available in the Next.js frontend through the preload script
const win = window as any;
if (win.electronAPI) {
  win.electronAPI.getAppVersion().then((version: string) => {
    console.log(`App Version: ${version}`);
  });
}

