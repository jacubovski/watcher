const fs = require('fs');
const path = require('path')
const MakeTextFile = require('./makeTextFile');

const receivedFolder = path.resolve(__dirname, '..', '..', 'files', 'api','received');

async function handlerModuleToWrite(values, action, module) {
  switch (module) {
    case 'financial':
      const financialWriter = require('./modules/financial.writer');
      return await financialWriter[action](values);
    case 'table':
      const tableWriter = require('./modules/table.writer');
      return await tableWriter[action](values);
    default:
      break;
  }
}
module.exports = {
  async handler(payload){
    const { action, values, code, module, method } = payload;
    const resWrite = await handlerModuleToWrite(values, action, module);
    const nameFile = `${receivedFolder}/${method}${code? '-'+code:''}.txt`;
    fs.writeFile(nameFile, resWrite, (err) => {
      if (err) console.log('\x1b[41m',err)
      console.log("\x1b[32m",`${method} success!`)
    });
  },
}