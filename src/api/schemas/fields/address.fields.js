const addressFetchFields = `end_origem end_codigo_origem end_tipo end_endereco
end_numero end_complemento end_bairro end_cep end_uf end_cod_municipio end_municipio`
;
const addressParams =`$end_origem: String! $end_codigo_origem: Int!
$end_tipo: String! $end_endereco: String! $end_numero: Int $end_complemento: String
$end_bairro: String! $end_cep: Int! $end_uf: String! $end_cod_municipio: Int!
$end_municipio: String! $company: Int!`;

const addressInput =`end_origem: $end_origem end_codigo_origem: $end_codigo_origem
end_tipo: $end_tipo end_endereco: $end_endereco end_numero: $end_numero
end_complemento: $end_complemento end_bairro: $end_bairro end_cep: $end_cep
end_uf: $end_uf end_cod_municipio: $end_cod_municipio end_municipio: $end_municipio
empresa:$company`;

module.exports = {
  addressFetchFields,
  addressParams,
  addressInput,
}