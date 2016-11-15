const electron = require('electron'); //electron-prebuilt
const url = require('url')
const path = require('path')
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;
app.on('ready', function(){
   mainWindow = new BrowserWindow({
       height: 400,
       width: 400
   });
   
mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'home.html'),
    protocol: 'file:',
    slashes: true
  }));
mainWindow.on('closed', function(){
    console.log('closed');
    mainWindow = null;
})

});
