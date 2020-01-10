const { WatcherAPI } = require('./configs/chokidar.config');
const { folderStructure } = require('./configs/checkFolders');
const { handlerMethodsAPI }  = require('./api/')

folderStructure();

WatcherAPI.on('add', async function(path) {
  handlerMethodsAPI(path);
})