
function makeAddress(data){
  if(!data) return [];
  let txt = '';
  txt += 'endereco{\r\n';
  data.forEach((end, i) => {
    txt += `${i + 1}:{\r\n`;
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
    txt += `}\r\n`;
  })
  txt += '}\r\n';
  return txt;
}

function makePlots(data){
  if(!data) return [];
  let txt = '';
  txt += 'parcelas{\r\n';
  data.forEach((par, i) => {
    txt += `${i + 1}:{\r\n`;
    txt += ` ppp_parcela:${par.ppp_parcela}\r\n`;
    txt += ` ppp_dias:${par.ppp_dias}\r\n`;
    txt += ` ppp_receb_dia:${par.ppp_receb_dia}\r\n`;
    txt += ` ppp_ppg_codigo:${par.ppp_ppg_codigo}\r\n`;
    txt += `}\r\n`;
  })
  txt += '}\r\n';
  return txt;
}

module.exports = {
  create(data) {
    let txt = ``;
    if (Array.isArray(data)) {
      txt += `{\r\n`;
      data.forEach((d, i) => {
        Object.keys(d).forEach(k => {
          if (k.match('_endereco')) {
            txt += makeAddress(d[k]);
          }
          if (k.match('plots')) {
            txt += makePlots(d[k])
          }
        
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
      if(!k.match('_endereco')) {
        txt += `${k}:${data[k]}\r\n`;
      }
      if (k.match('_endereco')) {
        txt += makeAddress(data[k]);
      }
      if (k.match('plots')) {
        txt += makePlots(data[k])
      }
      if (k.match('_centro_custo')) {
        console.log(data[k])
        txt += data[k].cc_codigo || ''
      }
      if (k.match('_historico')) {
        txt += data[k].his_codigo || ''
      }
      if (k.match('_loja')) {
        console.log(data[k])
        txt += data[k].lj_codigo || ''
      }
    });
    return txt;
  }
}