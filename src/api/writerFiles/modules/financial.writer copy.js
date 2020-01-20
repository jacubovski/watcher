const AddressWriter = require('./address.writer');

module.exports = {
  card(card) {
    let txt = ``;
    if(card === true) {
      txt += card;
    } else {
      Object.keys(card).forEach(c => {
        if(card[c] instanceof Object) {
          if(c.match('crt_cartao')) {
            txt += `${c}:${card[c].fpg_codigo || ''}\r\n` 
          } else if (c.match('crt_caixa')) {
            txt += `${c}:${card[c].func_codigo || ''}\r\n` 
          } else if (c.match('crt_vendedor')) {
            txt += `${c}:${card[c].vnd_codigo || ''}\r\n` 
          } else if (c.match('crt_cliente')) {
            txt += `${c}:${card[c].cli_codigo || ''}\r\n` 
          }
        }else {
          txt += `${c}:${card[c]}\r\n`     
        }
      });
    }
    return txt;
  },
  bank(bank) {
    let txt = ``;
    if(bank === true) {
      txt += bank;
    } else if (Array.isArray(bank)) {
      txt += `{\r\n`;
      data.forEach((d, i) => {
        Object.keys(d).forEach(k => {
          if (k.match('bco_endereco')) {
            txt += AddressWriter.createTXT(bank[b]);
          }
          txt += `${k}:${d[k]}\r\n`;
        })
        txt += '\r\n'
      })
      txt += `}\r\n`;
      return txt;
    }else {
      Object.keys(bank).forEach(b => {
        if (b.match("bco_endereco")) {
          txt += AddressWriter.createTXT(bank[b]);
        } else {
          txt += `${b}:${bank[b]}\r\n`;
        }
      });
    }
    return txt;
  }
}