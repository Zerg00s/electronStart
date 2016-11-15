const electron = require('electron'); //electron-prebuilt
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
app.on('ready', function(){
   new BrowserWindow({
       height: 400,
       width: 400
   });
});
