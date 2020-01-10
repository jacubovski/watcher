module.exports = {
  create2Fields(data) {
    let txt = ``;
    if (Array.isArray(data)) {
      txt += `{\r\n`;
      data.forEach((d, i) => {
        Object.keys(d).forEach(k => {
          txt += `${k}:${d[k]}\r\n`;
        })
        txt += '\r\n'
      })
      txt += `}\r\n`;
      return txt;
    }
    if(typeof data === "boolean"){
      txt += data;
      return txt;
    }
    Object.keys(data).forEach(k => {
      txt += `${k}:${data[k]}\r\n`;
    });
    return txt;
  }
}