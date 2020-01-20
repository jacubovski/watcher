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
  }
}