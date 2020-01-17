const salesmanFetchFields = `vnd_codigo vnd_nome vnd_tipo_calculo vnd_situacao vnd_cota
vnd_comissao_sem_cota vnd_comissao_com_cota vnd_telefone vnd_contato vnd_email
vnd_endereco(company: $company) {
  end_origem end_codigo_origem end_tipo end_endereco end_numero end_complemento
  end_bairro end_cep end_uf end_cod_municipio end_municipio}
`;
const salesmanParams =`  $vnd_nome: String! $vnd_tipo_calculo: Int $vnd_situacao: Boolean        
$vnd_cota: Float $vnd_comissao_sem_cota: Float $vnd_comissao_com_cota: Float        
$vnd_telefone: String $vnd_contato: String $vnd_email: String `;

const salesmanInput =`vnd_nome: $vnd_nome vnd_tipo_calculo: $vnd_tipo_calculo vnd_situacao: $vnd_situacao
vnd_cota: $vnd_cota vnd_comissao_sem_cota: $vnd_comissao_sem_cota vnd_comissao_com_cota: $vnd_comissao_com_cota
vnd_telefone: $vnd_telefone vnd_contato: $vnd_contato vnd_email: $vnd_email`;

module.exports = {
  salesmanFetchFields,
  salesmanParams,
  salesmanInput,
}