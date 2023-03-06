const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let win;

function createWindow () {
      const mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        frame: false,
        resizable: false,
        webPreferences: {
          nodeIntegration: true,
          preload: path.join(__dirname, 'preload.js')
        }
      })
        
        mainWindow.webContents.openDevTools();  

        ipcMain.on('set-minimize', (event) => {
            const webContents = event.sender
            const win = BrowserWindow.fromWebContents(webContents)
            win.minimize();
          })

        ipcMain.on('set-close', (event) => {
            const webContents = event.sender
            const win = BrowserWindow.fromWebContents(webContents)
            win.close();
        })



        mainWindow.loadFile('index.html');
    }

    
    app.whenReady().then(() => {
      createWindow()
      app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
    })
    
    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })
