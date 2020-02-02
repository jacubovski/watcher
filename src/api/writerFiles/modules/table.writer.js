module.exports = {
  twoFields(data) {
    let txt = ``;
    if(data === true) {
      txt += data;
    }else if (Array.isArray(data)) {
      txt += `{\r\n`;
      data.forEach((dts) => {
        Object.keys(dts).forEach(dt => {
          txt += `${dt}:${dts[dt]}\r\n`;
        })
      })
      txt += `}\r\n`;
    } else {
      Object.keys(data).forEach(d => {
        txt += `${d}:${data[d]}\r\n`;   
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
}