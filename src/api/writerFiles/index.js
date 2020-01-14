const fs = require('fs');
const path = require('path')
const MakeTextFile = require('./makeTextFile');

const receivedFolder = path.resolve(__dirname, '..', '..', 'files', 'api','received');

module.exports = {
  async handler(payload){
    const { action, values, code } = payload;
    const data = await MakeTextFile.create(values, action);
    const nameFile = `${receivedFolder}/${action}${code? '-'+code:''}.txt`;
    console.log(`${action} success!`)
    fs.writeFile(nameFile, data, (err) => {
      if (err) console.log(err)
    });
  },
}