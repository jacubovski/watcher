const { cardsFetchFields, cardsInput, cardsParams } = require('./fields/cards.fields');
const { billsToPayFetchFields, billsToPayInput, billsToPayParams } = require('./fields/billsToPay.fields');
const { billsToReceiveFetchFields, billsToReceiveInput, billsToReceiveParams } = require('./fields/billsToReceive.fields');

const fildsPaymentTerm = `
  ppg_codigo ppg_descricao ppg_mostrar          
  ppg_prazo_nfe ppg_grupo_limite ppg_boleto_carteira 
  plots { ppp_parcela ppp_dias ppp_receb_dia ppp_ppg_codigo}
`;

const fieldsBank = `
  bco_codigo bco_codigo_banco bco_codigo_agencia bco_conta bco_nome_banco
  bco_nome_agencia bco_nosso_numero bco_contato bco_numero_remessa bco_numero_convenio
  bco_numero_contrato bco_telefones bco_dv_banco bco_dv_conta bco_dv_agencia
  bco_observacoes bco_modalidade bco_cnab bco_carteira bco_aceite bco_titular
  bco_prefixo bco_codigo_cedente  bco_endereco(company: $company) {
    end_origem end_codigo_origem end_tipo end_endereco
    end_numero end_complemento end_bairro end_cep
    end_uf end_cod_municipio end_municipio
  }
`;
const fieldsPlot = `ppp_parcela ppp_dias ppp_receb_dia ppp_ppg_codigo`;

const paymentFormFields =`fpg_codigo fpg_descricao fpg_grupo_limite fpg_arq_destino
fpg_desc_cartao fpg_cod_fpg_acbr fpg_cnpj_adm fpg_bandeira`;

module.exports = {
  Bank: {
    createBank: `mutation CreateBank(
      $bco_codigo: Int $bco_codigo_banco: Int $bco_codigo_agencia: Int
      $bco_conta: Int $bco_nome_banco: String $bco_nome_agencia: String
      $bco_nosso_numero: Int $bco_contato: String $bco_numero_remessa: Int
      $bco_numero_convenio: Int $bco_numero_contrato: String $bco_telefones: String
      $bco_dv_banco: Int $bco_dv_conta: Int $bco_dv_agencia: Int $bco_observacoes: String
      $bco_modalidade: Int $bco_cnab: Int $bco_carteira: String $bco_aceite: Boolean
      $bco_titular: String $bco_prefixo: String $bco_codigo_cedente: String $company: Int!
    ) {
      createBank(input:{
        bco_codigo: $bco_codigo bco_codigo_banco: $bco_codigo_banco bco_codigo_agencia: $bco_codigo_agencia
        bco_conta: $bco_conta bco_nome_banco: $bco_nome_banco bco_nome_agencia: $bco_nome_agencia
        bco_nosso_numero: $bco_nosso_numero bco_contato: $bco_contato bco_numero_remessa: $bco_numero_remessa
        bco_numero_convenio: $bco_numero_convenio bco_numero_contrato: $bco_numero_contrato
        bco_telefones: $bco_telefones bco_dv_banco: $bco_dv_banco bco_dv_conta: $bco_dv_conta
        bco_dv_agencia: $bco_dv_agencia bco_observacoes: $bco_observacoes
        bco_modalidade: $bco_modalidade bco_cnab: $bco_cnab bco_carteira: $bco_carteira
        bco_aceite: $bco_aceite bco_titular: $bco_titular bco_prefixo: $bco_prefixo
        bco_codigo_cedente: $bco_codigo_cedente empresa:$company
      }){ ${fieldsBank} }
    }`,
    bulkBankCreate: `mutation bulkBankCreate(
      $input: [BankCreateInput!]!
    ){
      bulkBankCreate(input:$input)
    }`,
    updateBank: `mutation UpdateBank(
      $from: String $code: Int $bco_codigo_banco: Int $bco_codigo_agencia: Int
      $bco_conta: Int $bco_nome_banco: String $bco_nome_agencia: String
      $bco_nosso_numero: Int $bco_contato: String $bco_numero_remessa: Int
      $bco_numero_convenio: Int $bco_numero_contrato: String $bco_telefones: String
      $bco_dv_banco: Int $bco_dv_conta: Int $bco_dv_agencia: Int $bco_observacoes: String
      $bco_modalidade: Int $bco_cnab: Int $bco_carteira: String $bco_aceite: Boolean
      $bco_titular: String $bco_prefixo: String $bco_codigo_cedente: String $company: Int!
      ) {
      updateBank(from: $from, code: $code, company: $company, input:{
        bco_codigo_banco: $bco_codigo_banco bco_codigo_agencia: $bco_codigo_agencia
        bco_conta: $bco_conta bco_nome_banco: $bco_nome_banco bco_nome_agencia: $bco_nome_agencia
        bco_nosso_numero: $bco_nosso_numero bco_contato: $bco_contato bco_numero_remessa: $bco_numero_remessa
        bco_numero_convenio: $bco_numero_convenio bco_numero_contrato: $bco_numero_contrato
        bco_telefones: $bco_telefones bco_dv_banco: $bco_dv_banco bco_dv_conta: $bco_dv_conta
        bco_dv_agencia: $bco_dv_agencia bco_observacoes: $bco_observacoes
        bco_modalidade: $bco_modalidade bco_cnab: $bco_cnab bco_carteira: $bco_carteira
        bco_aceite: $bco_aceite bco_titular: $bco_titular bco_prefixo: $bco_prefixo
        bco_codigo_cedente: $bco_codigo_cedente
      }){ ${fieldsBank} }
    }`,
    deleteBank:`mutation DeleteBank($code: Int, $from: String, $company:Int!){
      deleteBank( code: $code, from: $from, company:$company)
    }`,
    fetchBank: `query bank($code: Int!, $company: Int!) {
      bank(code: $code, company: $company) { ${fieldsBank} }
    }`,
    allBanks: `query Banks($company: Int!){
      banks(company: $company) { ${fieldsBank} }
    }`,
  },
  PaymentTerm: {
    createPaymentTerm: `mutation CreatePaymentTerm(
      $ppg_codigo: Int $ppg_descricao: String $ppg_mostrar:Int
      $ppg_prazo_nfe:Int $ppg_grupo_limite:Int $ppg_boleto_carteira:String
      $company:Int
    ) { createPaymentTerm(input:{
      ppg_codigo: $ppg_codigo ppg_descricao: $ppg_descricao ppg_mostrar:$ppg_mostrar
      ppg_prazo_nfe:$ppg_prazo_nfe ppg_grupo_limite:$ppg_grupo_limite
      ppg_boleto_carteira:$ppg_boleto_carteira  empresa:$company
      }){
        ${fildsPaymentTerm}
      }
    }`,
    updatePaymentTerm: `mutation UpdatePaymentTerm(
      $from: String, $code: Int, $ppg_descricao: String,
      $ppg_mostrar: Int, $ppg_grupo_limite: Int, $ppg_prazo_nfe: Int,
      $ppg_boleto_carteira: String, $company: Int
      ) { updatePaymentTerm(from: $from, code: $code, company: $company,
        input:{
          ppg_descricao: $ppg_descricao ppg_mostrar:  $ppg_mostrar         
          ppg_grupo_limite:  $ppg_grupo_limite ppg_prazo_nfe:$ppg_prazo_nfe
          ppg_boleto_carteira: $ppg_boleto_carteira
      }){ ${fildsPaymentTerm} }
    }`,
    deletePaymentTerm: `mutation DeletePaymentTerm($code: Int, $from: String, $company:Int!){
      deletePaymentTerm(code: $code from: $from company:$company)
    }`,
    bulkPaymentTermCreate: `mutation BulkPaymentTermCreate($input: [PaymentTermCreateInput!] !) {
      bulkPaymentTermCreate(input: $input)
    }`,
    fetchPaymentTerm:`query PaymentTerm($code: Int!, $company: Int!) {
      paymentTerm(code: $code, company: $company) {
        ${fildsPaymentTerm}
      }
    }`,
    allPaymentTerms: `query PaymentTerms($company: Int!) {
      paymentTerms(company: $company) {
        ${fildsPaymentTerm}
      }
    }`
  },
  PlotPaymentTerm: {
    createPlotsPaymentTerm:`
      mutation CreatePlotsPaymentTerm($input:[createPlotsPaymentTermInput!]!) {
      createPlotsPaymentTerm(input:$input){ ${fieldsPlot} }
    }`,
    bulkPlotsPaymentTermCreate:`mutation BulkPlotsPaymentTermCreate(
      $input: [createPlotsPaymentTermInput!] !){
        bulkPlotsPaymentTermCreate(input: $input)
    }`,
    updatePlotsPaymentTerm:`mutation UpdatePlotsPaymentTerm(
      $from: String $code: Int $plot: Int $ppp_parcela: Int $ppp_dias: Int  $ppp_receb_dia: Boolean $company: Int
      ) {
      updatePlotsPaymentTerm(from: $from, code: $code, plot: $plot, company: $company, input:{
        ppp_parcela: $ppp_parcela ppp_dias:  $ppp_dias ppp_receb_dia: $ppp_receb_dia}){ ${fieldsPlot} }
    }`,
    deletePlotsPaymentTerm:`mutation DeletePlotsPaymentTerm($code: Int, $from: String, $plot: Int, $company:Int!){
      deletePlotsPaymentTerm(code: $code from: $from plot: $plot company:$company)
    }`,
  },
  PostdatedCheck: {
    createPostdatedCheck:`mutation CreatePostdatedCheck(
      $chq_contador: Int $chq_data_vencimento: String $chq_tipo: Int $chq_data_recebimento: String
      $chq_cli_forn: Int $chq_mcr_mcp_auto: Int $chq_mcr_mcp_seq: Int $chq_origem_destino: Int
      $chq_banco: String $chq_agencia: String $chq_numero_cheque: String $chq_correntista: String
      $chq_caixa: Int $chq_loja: Int $chq_valor: Float $chq_situacao: Int $chq_vendedor: Int
      $chq_observacoes: String $chq_data_pgto_comissao: String $chq_data_deposito: String
      $chq_banco_deposito: Int $company: Int!
      ) { createPostdatedCheck(input:{
        chq_contador: $chq_contador chq_data_vencimento: $chq_data_vencimento chq_tipo: $chq_tipo
        chq_data_recebimento: $chq_data_recebimento chq_cli_forn: $chq_cli_forn chq_mcr_mcp_auto: $chq_mcr_mcp_auto
        chq_mcr_mcp_seq: $chq_mcr_mcp_seq chq_origem_destino: $chq_origem_destino chq_banco: $chq_banco
        chq_agencia: $chq_agencia chq_numero_cheque: $chq_numero_cheque chq_correntista: $chq_correntista
        chq_caixa: $chq_caixa chq_loja: $chq_loja chq_valor: $chq_valor chq_situacao: $chq_situacao
        chq_vendedor: $chq_vendedor chq_observacoes: $chq_observacoes chq_data_pgto_comissao: $chq_data_pgto_comissao
        chq_data_deposito: $chq_data_deposito chq_banco_deposito: $chq_banco_deposito empresa: $company
      }){ id }
    }`,
    updatePostdatedCheck:`mutation UpdatePostdatedCheck(
      $from: String $code: Int $chq_data_vencimento: String $chq_tipo: Int $chq_data_recebimento: String
      $chq_cli_forn: Int $chq_mcr_mcp_auto: Int $chq_mcr_mcp_seq: Int $chq_origem_destino: Int $chq_banco: String
      $chq_agencia: String $chq_numero_cheque: String $chq_correntista: String $chq_caixa: Int $chq_loja: Int
      $chq_valor: Float $chq_situacao: Int $chq_vendedor: Int $chq_observacoes: String $chq_data_pgto_comissao: String
      $chq_data_deposito: String $chq_banco_deposito: Int $company: Int!
      ) { 
      updatePostdatedCheck(from: $from, code: $code,company: $company,input:{
        chq_data_vencimento: $chq_data_vencimento chq_tipo: $chq_tipo chq_data_recebimento: $chq_data_recebimento
        chq_cli_forn: $chq_cli_forn chq_mcr_mcp_auto: $chq_mcr_mcp_auto chq_mcr_mcp_seq: $chq_mcr_mcp_seq
        chq_origem_destino: $chq_origem_destino chq_banco: $chq_banco chq_agencia: $chq_agencia
        chq_numero_cheque: $chq_numero_cheque chq_correntista: $chq_correntista chq_caixa: $chq_caixa
        chq_loja: $chq_loja chq_valor: $chq_valor chq_situacao: $chq_situacao chq_vendedor: $chq_vendedor
        chq_observacoes: $chq_observacoes chq_data_pgto_comissao: $chq_data_pgto_comissao
        chq_data_deposito: $chq_data_deposito chq_banco_deposito: $chq_banco_deposito
      }){ id }
    }`,
    deletePostdatedCheck:`mutation DeltePostdatedCheck($code: Int,$from: String,$company:Int!){
      deletePostdatedCheck(code: $code from: $from company:$company )
    }`,
    bulkPostdatedCheckCreate: `mutation BulkPostdatedCheckCreate($input: [PostdatedCheckCreateInput!] !) {
      bulkPostdatedCheckCreate(input: $input)
    }`,
  },
  BillsToPay: {
    createBillsToPay:`mutation CreateBillsToPay($cpg_contador:Int ${billsToPayParams} $company:Int){
      createBillsToPay(input:{cpg_contador: $cpg_contador ${billsToPayInput} empresa:$company}){
        ${billsToPayFetchFields}
      }
    }`,
    bulkBillsToPayCreate:`mutation BulkBillsToPayCreate($input:[BillsToPayCreateInput!]!){
      bulkBillsToPayCreate(input:$input)
    }`,
    updateBillsToPay:`mutation UpdateBillsToPay($from: String $code: Int ${billsToPayParams} $company: Int!){
      updateBillsToPay(from: $from, code: $code, company: $company, input:{${billsToPayInput}}){
        ${billsToPayFetchFields}
      }
    }`,
    deleteBillsToPay:`mutation DelteBillsToPay($code: Int!, $company: Int!, $from: String) { 
      deleteBillsToPay(from:$from, code: $code, company: $company)
    }`,
    fetchBillsToPay: `query FetchBillsToPay($company: Int! $code: Int, $from: String!){
      billsToPay(code:$code company: $company from: $from) {${billsToPayFetchFields}}
    }`
  },
  BillsToReceive: {
    createBillsToReceive:`mutation CreateBillsToReceive($crc_contador: Int ${billsToReceiveParams} $company: Int!) {
      createBillsToReceive(input:{crc_contador: $crc_contador ${billsToReceiveInput} empresa: $company}){
        ${billsToReceiveFetchFields}
      }
    }`,
    bulkBillsToReceiveCreate:` mutation BulkBillsToReceiveCreate($input: [BillsToReceiveCreateInput!]!){
      bulkBillsToReceiveCreate(input:$input)
    }`,
    updateBillsToReceive:`mutation UpdateBillsToReceive($from: String $code: Int ${billsToReceiveParams} $company: Int!){
      updateBillsToReceive(from: $from, code: $code, company: $company, input:{
        ${billsToReceiveInput}
      }){ ${billsToReceiveFetchFields} }
    }`,
    deleteBillsToReceive:`mutation DelteBillsToReceive($code: Int, $from: String, $company:Int!){
      deleteBillsToReceive(code: $code, from: $from, company:$company)
    }`,
    fetchBillsToReceive: `query FetchBillsToReceive($company: Int! $code: Int $from:String){
      billsToReceive(code:$code company:$company from:$from){
        ${billsToReceiveFetchFields}
      }
    }`    
  },
  PaymentForm: {
    createPaymentForm:`mutation CreatePaymentForm(
      $fpg_codigo: Int! $fpg_descricao: String! $fpg_grupo_limite:Int $fpg_arq_destino:Int
      $fpg_desc_cartao: Float $fpg_cod_fpg_acbr: Int $fpg_cnpj_adm:String $fpg_bandeira:Int
      $company: Int!){createPaymentForm(input:{
        fpg_codigo: $fpg_codigo fpg_descricao: $fpg_descricao fpg_grupo_limite:$fpg_grupo_limite
        fpg_arq_destino:$fpg_arq_destino fpg_desc_cartao: $fpg_desc_cartao fpg_cod_fpg_acbr: $fpg_cod_fpg_acbr
        fpg_cnpj_adm:$fpg_cnpj_adm fpg_bandeira:$fpg_bandeira empresa:$company
      }){${paymentFormFields}}
    }`,
    bulkPaymentFormCreate:`mutation BulkPaymentFormCreate($input:[PaymentFormCreateInput!]!){
      bulkPaymentFormCreate(input: $input)
    }`,
    updatePaymentForm :`mutation UpdatePaymentForm(
      $from: String $code: Int $fpg_descricao: String! $fpg_grupo_limite: Int
      $fpg_arq_destino: Int $fpg_desc_cartao: Float $fpg_cod_fpg_acbr: Int
      $fpg_cnpj_adm: String $fpg_bandeira: Int $company: Int! ) {
      updatePaymentForm(from: $from,code: $code,company: $company,input:{
        fpg_descricao: $fpg_descricao fpg_grupo_limite: $fpg_grupo_limite
        fpg_arq_destino: $fpg_arq_destino fpg_desc_cartao: $fpg_desc_cartao          
        fpg_cod_fpg_acbr: $fpg_cod_fpg_acbr fpg_cnpj_adm: $fpg_cnpj_adm
        fpg_bandeira: $fpg_bandeira  
      }){${paymentFormFields}}
    }`,
    deletePaymentForm:`mutation DeletePaymentForm($code: Int,$from: String,$company:Int!){
      deletePaymentForm(code: $code,from: $from,company:$company)
    }`,
    fetchPaymentForm:`query FetchPaymentForm($code: Int!, $company: Int!) {
      paymentForm(code: $code, company: $company) {${paymentFormFields}}
    }`,
    allPaymentForms:`query FetchPaymentForms($company: Int!) {
      paymentForms(company: $company) {${paymentFormFields}}
    }`,
  },
  Card: {
    createCard:`mutation CreateCard($crt_contador: Int,${cardsParams}, $company: Int!){
      createCard(input:{crt_contador: $crt_contador,${cardsInput},empresa: $company}){
        ${cardsFetchFields}
      }
    }`,
    bulkCardsCreate:`mutation BulkCardCreate($input: [CardCreateInput!]!){
      bulkCardCreate(input:$input)
    }`,
    updateCard:`mutation UpdateCard($from: String,$code: Int,${cardsParams},$company: Int!){
      updateCard(from: $from,code: $code,company: $company,input:{${cardsInput}}){
        ${cardsFetchFields}
      }
    }`,
    deleteCard:`mutation DeleteCard($code: Int,$from: String,$company:Int!){
      deleteCard(code: $code,from: $from,company:$company)
    }`,
    fetchCard:`query FetchCard($company: Int!, $code: Int, $from: String){
      card(code:$code company: $company from: $from) { 
        ${cardsFetchFields}
      }
    }`
  }
}