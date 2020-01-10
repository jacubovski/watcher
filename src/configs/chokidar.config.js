const chokidar = require('chokidar');
const path = require('path');

const folderSendApi = path.resolve(__dirname, '..', 'files', 'api', 'send');
const folderSendEcom = path.resolve(__dirname, '..', 'files', 'ecommerce', 'send');
const WatcherAPI = chokidar.watch(folderSendApi, { ignored: /^\./, persistent: true });
const WatcherECOM = chokidar.watch(folderSendEcom, { ignored: /^\./, persistent: true });

module.exports = {
    WatcherAPI,
    WatcherECOM,
};
