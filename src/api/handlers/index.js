const fs = require('fs');
const apiActionHandlers = require('./apiActionsHandlers');

module.exports = {
  readFiles(pth) {
    fs.readFile(pth,'utf-8', async (err, data) => {
      if (err) throw new Error(err)
      try {
        const fileName = pth.split('/').reverse()[0]
        const dataJSON = JSON.parse(data)
        const response = await apiActionHandlers.actions(dataJSON,fileName);
        return response;
      } catch (error) {
        console.log(error.message);          
      }
    })    
  }
}
// const addFiles = (token, pth) => {
//   fs.readFile(pth, 'utf-8', async (err, data) => {
//     if (err) appendLogs(error);
//     const response = await actionHandler(data);
//     const splitPaht = pth.split('/');
//     const nameFile = splitPaht[splitPaht.length - 1];
//     const { code } = response;
//     if (code === 200){
//       try {
//         const ext = path.extname(nameFile);
//         const name = path.basename(nameFile, ext);
//         const fileNewName = `${name}-${Date.now()}${ext}`;
//         const copyFile =  path.resolve(__dirname, '..', 'enviar', 'api', nameFile);
//         const pasteFile =  path.resolve(__dirname, '..','enviados', fileNewName);
//         fs.copyFile(copyFile, pasteFile, (err) => {
//           if (err) appendLogs(err);
//           fs.unlinkSync(copyFile);
//         });
//       } catch (error) {
//         console.log('change action', error);
//         appendLogs(error);
//       }
//     } else if (code === 500) {
//       const copyFile =  path.resolve(__dirname, '..','enviar', 'api', nameFile);
//       fs.unlinkSync(copyFile);
//     }
//   });
// };
