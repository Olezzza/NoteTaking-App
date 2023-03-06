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

        ipcMain.on('get-json', (event) => {
            const data = fs.readFileSync('listOfStorage.json');
            console.log(data);
            const jsonData = JSON.parse(data);
            console.log(jsonData);
            console.log(jsonData[0].name);
            return jsonData;
            
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
