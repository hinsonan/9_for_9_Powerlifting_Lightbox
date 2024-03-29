const { app, BrowserWindow } = require('electron');
const WebSocket = require("ws");
var ipcMain = require('electron').ipcMain;

const judge_ws = new WebSocket.Server({port:1080});

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    icon: './images/9_For_9_Logo.png'
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
  
  judge_ws.on('connection', function (w) {  
    w.on( 'message' , function (incoming_data)  {
      // check if the message is suppose to go to the web app client to disable or enable the judge btns
      if(incoming_data === "disable_btns" || incoming_data === 'enable_btns'){
        judge_ws.clients.forEach(function each(client) {
          if (client !== w && client.readyState === WebSocket.OPEN) {
            client.send(incoming_data);
          }
        });
      }
      // listen for messages going to the lightbox
      else{
        if ("timer" in JSON.parse(incoming_data)){
          win.webContents.send('timer' , incoming_data);
        }
        else{
          win.webContents.send('incoming_data' , incoming_data);
        }
      }
    })  
    w.on('close', function() { 
      console.log("Closed") 
    }) 
    w.send("Hello from port 1080")
  })

  // Open the DevTools.
  // win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
