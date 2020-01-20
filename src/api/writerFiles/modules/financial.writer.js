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
      bank.forEach((b, i) => {
        Object.keys(b).forEach(k => {
          if (k.match('bco_endereco')) {
            txt += AddressWriter.createTXT(b[k]);
          } else if (!k.match('bco_endereco')){
            txt += `${k}:${b[k]}\r\n`;
          }
        })
      })
      txt += `}\r\n`;
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
  },
  billsToPay(btps) {
    let txt = ``;
    if(btps === true) {
      txt += btps;
    } else {
      Object.keys(btps).forEach(btp => {
        if(btps[btp] instanceof Object) {
          if(btp.match('cpg_forma_pgto')) {
            txt += `${btp}:${btps[btp].fpg_codigo || ''}\r\n` 
          } else if (btp.match('cpg_centro_custo')) {
            txt += `${btp}:${btps[btp].cc_codigo || ''}\r\n` 
          } else if (btp.match('cpg_historico')) {
            txt += `${btp}:${btps[btp].his_codigo || ''}\r\n` 
          } else if (btp.match('cpg_loja')) {
            txt += `${btp}:${btps[btp].lj_codigo || ''}\r\n` 
          }
        }else {
          txt += `${btp}:${btps[btp]}\r\n`     
        }
      });
    }
    return txt;
  }
}