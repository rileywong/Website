
const {app,BrowserWindow} = require('electron')

app.on('ready', function() {
	var mainWindow = new BrowserWindow({
		width : 800,
		height: 600,
		'node-integration': false
	})
	mainWindow.loadURL('file://' + __dirname + '/index.html')
});

app.on('window-all',() =>{
	if (process.platform !== 'darwin'){
		app.quit();
	}
});
