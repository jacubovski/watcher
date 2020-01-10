const fs = require('fs');
const path = require('path');

const folderSendApi = path.resolve(__dirname, '..', 'files', 'api', 'send');
const folderReceivedApi = path.resolve(__dirname, '..', 'files', 'api', `received`);
const folderSendEcommerce = path.resolve(__dirname,  '..', 'files', 'ecommerce', `send`);
const folderReceivedEcommerce = path.resolve(__dirname,  '..', 'files', 'ecommerce', `received`);

function folderStructure() {
  try {
    if (!fs.existsSync(folderSendApi)) {
      fs.mkdirSync(folderSendApi);
    }
    if (!fs.existsSync(folderReceivedApi)) {
      fs.mkdirSync(folderReceivedApi);
    }
    if (!fs.existsSync(folderSendEcommerce)) {
      fs.mkdirSync(folderSendEcommerce);
    }
    if (!fs.existsSync(folderReceivedEcommerce)) {
      fs.mkdirSync(folderReceivedEcommerce);
    }
  } catch (err) {
      throw new Error(err);
  }
}

module.exports = {
  folderStructure,
}