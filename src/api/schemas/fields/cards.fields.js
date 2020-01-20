const cardsFetchFields = `crt_contador
crt_cartao(company: $company){fpg_codigo} crt_data_vencimento crt_data_pagamento crt_mcr_auto
crt_mcr_seq crt_numero_cartao crt_caixa(company: $company){func_codigo} crt_valor_bruto
crt_percentual_desconto crt_valor_desconto crt_situacao crt_vendedor(company: $company){vnd_codigo}
crt_banco_receb crt_total_parcelas crt_parcela crt_serial crt_autorizacao crt_cliente(company: $company){cli_codigo}`;

const cardsParams =`$crt_cartao: Int $crt_data_vencimento: String $crt_data_pagamento: String
$crt_mcr_auto: Int $crt_mcr_seq: Int $crt_numero_cartao: String $crt_caixa: Int $crt_valor_bruto: Float
$crt_percentual_desconto: Float $crt_valor_desconto: Float $crt_situacao: Int $crt_vendedor: Int
$crt_banco_receb: Int $crt_total_parcelas: Int $crt_parcela: Int $crt_serial: Int $crt_autorizacao: String
$crt_cliente: Int`;

const cardsInput =`crt_cartao: $crt_cartao crt_data_vencimento: $crt_data_vencimento
crt_data_pagamento: $crt_data_pagamento crt_mcr_auto: $crt_mcr_auto crt_mcr_seq: $crt_mcr_seq
crt_numero_cartao: $crt_numero_cartao crt_caixa: $crt_caixa crt_valor_bruto: $crt_valor_bruto
crt_percentual_desconto: $crt_percentual_desconto crt_valor_desconto: $crt_valor_desconto
crt_situacao: $crt_situacao crt_vendedor: $crt_vendedor crt_banco_receb: $crt_banco_receb
crt_total_parcelas: $crt_total_parcelas crt_parcela: $crt_parcela crt_serial: $crt_serial
crt_autorizacao: $crt_autorizacao crt_cliente: $crt_cliente`;

module.exports = {
  cardsFetchFields,
  cardsParams,
  cardsInput,
}