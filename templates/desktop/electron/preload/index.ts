import { contextBridge, ipcRenderer } from 'electron';

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  getAppPath: () => ipcRenderer.invoke('get-app-path'),
  getAppInfo: () => ipcRenderer.invoke('get-app-info'),
  // Add more API methods as needed
});

// Type definitions for TypeScript
export interface ElectronAPI {
  getAppVersion: () => Promise<string>;
  getAppPath: () => Promise<string>;
  getAppInfo: () => Promise<{
    name: string;
    version: string;
    electron: string;
    chrome: string;
    node: string;
    platform: string;
    arch: string;
  }>;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

