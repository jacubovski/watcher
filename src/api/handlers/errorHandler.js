const Notifier = require('../../configs/notifierOS');

function handlerObjectError(payload) {
  if(payload.hasOwnProperty('isBulk')) {
    console.log(payload)
  }
  let msg= '***** Error => ';
  Object.keys(payload).forEach(key => {
    if(key === 'message' && key !== 'locations') {
      msg += `${payload[key]} `;
    }
    if(key === 'path' && key !== 'locations') {
      msg += `Em: ${payload[key]} *****\r\n `;
    }
  })  
  console.log('\x1b[41m',msg)
  const notify = new Notifier('Erro no MacWatcher', msg);
  // notify.sendNotification();
}
module.exports = {
  handler(payload) {
    if (Array.isArray(payload)) {
      payload.forEach(err => {
        if (err instanceof Object) {
          handlerObjectError(err);
        }
      })
    } 
    if (payload instanceof Object){
      const{ data } = payload.response;
      if(data.hasOwnProperty('errors')) {
        Object.keys(data.errors).forEach(err => {
          handlerObjectError(data.errors[err])
        })
      }
    }
  }
}