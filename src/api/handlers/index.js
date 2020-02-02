const fs = require('fs');
const apiActionHandlers = require('./apiActionsHandlers');
const MacError = require('../handlers/errorHandler');
module.exports = {
  readFiles(pth) {
    fs.readFile(pth,'utf-8', async (err, data) => {
      if (err) throw new Error(err)
      try {
        const fileName = pth.split('/').reverse()[0]
        const dataJSON = JSON.parse(data)
        const response = await apiActionHandlers.actions(dataJSON,fileName);
        const { code, status: err } = response;
        if (code === 500) throw err;
        return response;
      } catch (error) {      
        MacError.handler(error);
      }
    })    
  }
}



