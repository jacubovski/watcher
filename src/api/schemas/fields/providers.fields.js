const providerFetchFields = `frn_codigo frn_razao_social frn_apelido frn_razao_social
frn_tipo_forn frn_contato frn_cont_dia_mes_aniv frn_cnpj frn_cpf frn_inscricao frn_fone
frn_tipo_inscr frn_email frn_pais frn_cod_pais frn_ref_banc_1 frn_ref_banc_2 frn_na_web
frn_crt frn_endereco(company: $company) {
  end_origem end_codigo_origem end_tipo end_endereco end_numero end_complemento
  end_bairro end_cep end_uf end_cod_municipio end_municipio}
`;
const providerParams =`$frn_razao_social: String! $frn_apelido: String! $frn_tipo_forn: String
$frn_contato: String $frn_cont_dia_mes_aniv: String $frn_cnpj: String $frn_cpf: String
$frn_inscricao: String $frn_fone: String $frn_tipo_inscr: String $frn_email: String $frn_pais: String 
$frn_cod_pais: String $frn_ref_banc_1: String $frn_ref_banc_2: String $frn_na_web: Boolean
$frn_crt: Int `;

const providerInput =`frn_razao_social: $frn_razao_social frn_apelido:$frn_apelido 
frn_tipo_forn: $frn_tipo_forn frn_contato: $frn_contato frn_cont_dia_mes_aniv: $frn_cont_dia_mes_aniv              
frn_cnpj: $frn_cnpj frn_cpf: $frn_cpf frn_inscricao: $frn_inscricao frn_fone: $frn_fone          
frn_tipo_inscr: $frn_tipo_inscr frn_email: $frn_email frn_pais: $frn_pais frn_cod_pais: $frn_cod_pais 
frn_ref_banc_1: $frn_ref_banc_1 frn_ref_banc_2: $frn_ref_banc_2 frn_na_web: $frn_na_web
frn_crt: $frn_crt `;

module.exports = {
  providerFetchFields,
  providerParams,
  providerInput,
}