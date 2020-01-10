const path = require('path');
const { login } = require('../configs/axios');
const apiActions = require('./handlers');

module.exports = {
    async handlerMethodsAPI(pth) {
      try {
        login().then(async (token) => {
          const p = path.normalize(pth);
            const response = await apiActions.readFiles(p);
            return response;
        }).catch(error => {throw new Error(error.message)});
    } catch (error) {
     throw new Error(error.message) 
    }
  }
}