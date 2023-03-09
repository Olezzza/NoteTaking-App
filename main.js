const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;
let window;

function createMainWindow() {
    window = new BrowserWindow({
        width: 1000,
        height: 800,
        frame: false,
        resizable: false,
        webPreferences: {
          nodeIntegration: true,
          sandBox: false,
          preload: [path.join(__dirname, 'preload.js'), path.join(__dirname, 'changeNameDir.js')]
        }
    })

    window.webContents.openDevTools();  

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

    window.loadFile('mainWin.html');

}

function createWindow () {
      mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        frame: false,
        resizable: false,
        webPreferences: {
          nodeIntegration: true,
          sandBox: false,
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

        ipcMain.on('show-window', () => {
            
            mainWindow.close();
            createMainWindow();
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
