const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: () => ipcRenderer.send('set-title'),
    setClose: () => ipcRenderer.send('set-close')
})
