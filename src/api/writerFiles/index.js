const fs = require('fs');
const path = require('path')
const makeNewNameForFile = require('../../utils/makeNewNameForFile');
const MakeTextFile = require('./makeTextFile');

const receivedFolder = path.resolve(__dirname, '..', '..', 'files', 'api','received');

module.exports = {
  handler(payload){
    const { totalFields, action, values, code } = payload;
    switch (totalFields) {
      case 2:
        this.twoFieldsWriterArr(action, values, code)
        console.log(`${action} success!`)
        break;
      default:
        break;
    }
  },
  twoFieldsWriterArr(action, values, code) {
    const data = MakeTextFile.create2Fields(values)
    const nameFile = `${receivedFolder}/${action}${code? '-'+code:''}.txt`;
    fs.writeFile(nameFile, data, (err) => {
      if (err) console.log(err)
    });
  }
}