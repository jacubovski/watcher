module.exports = {
  handler(payload) {
    const { data, errors } = payload;
    let info;
    Object.values(data).forEach(val => {
      info = val ? data : errors;
    })
    Object.keys(info).forEach(k => {
      if(info[k] instanceof Object) {
        let msg= '***** Error => ';
        Object.keys(info[k]).forEach(kk => {
          if(kk === 'message' && kk !== 'locations') {
            msg += `${info[k][kk]} `;
          }
          if(kk === 'path' && kk !== 'locations') {
            msg += `Em: ${info[k][kk]} *****\r\n `;
          }
        })  
        console.log('\x1b[41m',msg)
      }
      if(Array.isArray(info[k])) {
        info[k].forEach(d => {
          Object.keys(d).forEach(dd => {
            if(typeof d[dd] === 'string') {
              const msg = d[dd];  
              if(msg.match('Variable')) {
                console.log(msg.length)
                const [msg1, msg2] = msg.split(';');
                console.log('\x1b[41m',`${msg1}, ${msg2}`)
              }
            }
          })
        })
      }
    })
  }
}