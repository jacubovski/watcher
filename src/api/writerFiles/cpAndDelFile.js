const path = require('path');
const fs = require('fs');

module.exports = {
  handler(fileName){
    try {
      this.copy(fileName);
      this.delete(fileName);
    } catch (error) {
      console.log(error)
      throw new Error(error.message)
    }
  },
  copy(fileName) {
    const ext = path.extname(fileName);
    const name = path.basename(fileName, ext);
    const fileNewName = `${name}-${Date.now()}${ext}`;
    const copyFile =  path.resolve(__dirname, '..', '..', 'files', 'api', 'send', fileName);
    const pasteFile =  path.resolve(__dirname, '..', '..', 'files', 'api', 'sended', fileNewName);
    fs.copyFile(copyFile, pasteFile, (err) => {
      if (err) throw new Error(err)
    });
  },
  delete(fileName) {
    const copyFile =  path.resolve(__dirname, '..', '..', 'files', 'api', 'send', fileName);
    fs.unlink(copyFile, (err) => {
      if (err) throw new Error(err)
    })
  }
}