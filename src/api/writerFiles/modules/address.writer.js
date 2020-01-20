module.exports = {
  createTXT(addr) {
    if(!addr) return [];
    let txt = '';
    txt += 'endereco{\r\n';
    addr.forEach((end, i) => {
      txt += ` end_origem:${end.end_origem}\r\n`;
      txt += ` end_codigo_origem:${end.end_codigo_origem}\r\n`;
      txt += ` end_tipo:${end.end_tipo}\r\n`;
      txt += ` end_endereco:${end.end_endereco}\r\n`;
      txt += ` end_numero:${end.end_numero}\r\n`;
      txt += ` end_complemento:${end.end_complemento}\r\n`;
      txt += ` end_bairro:${end.end_bairro}\r\n`;
      txt += ` end_cep:${end.end_cep}\r\n`;
      txt += ` end_uf:${end.end_uf}\r\n`;
      txt += ` end_cod_municipio:${end.end_cod_municipio}\r\n`;
      txt += ` end_municipio:${end.end_municipio}\r\n`;
      txt += `${addr.length === 1 ? '' : '\r\n'}`;
    })
    txt += `}\r\n`;
    return txt;
  }
}