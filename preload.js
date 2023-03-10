const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    setMinimize: () => ipcRenderer.send('set-minimize'),
    setClose: () => ipcRenderer.send('set-close'),
    showMainWindow: () => ipcRenderer.send('show-window'),
})
