const { cardsFetchFields, cardsInput, cardsParams } = require('./fields/cards.fields');

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

const fieldsBillsToPay =`cpg_contador cpg_data_vencimento cpg_data_pgto
cpg_mov_tipo cpg_mov_codigo cpg_serie_nf
cpg_numero_nf cpg_origem_credor cpg_valor_doc cpg_parcela cpg_tot_parc
cpg_valor_pago cpg_observacoes cpg_usuario cpg_ano_compet cpg_mes_compet
cpg_saldo cpg_duplicata cpg_dup_seq
cpg_forma_pgto(company: $company){fpg_codigo fpg_descricao}
cpg_centro_custo(company: $company){cc_codigo cc_descricao}
cpg_historico(company: $company){hst_codigo hst_descricao}
cpg_loja(company: $company) {lj_codigo lj_descricao}
cpg_credor cpg_nome_credor`;

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
    createBillsToPay:`mutation CreateBillsToPay(
      $cpg_contador: Int $cpg_data_vencimento: String $cpg_data_pgto: String $cpg_mov_tipo: Int
      $cpg_mov_codigo: Int $cpg_serie_nf: String $cpg_numero_nf: Int $cpg_origem_credor: Int
      $cpg_valor_doc: Float $cpg_parcela: Int $cpg_tot_parc: Int $cpg_valor_pago: Float
      $cpg_observacoes: String $cpg_usuario: String $cpg_ano_compet: Int
      $cpg_mes_compet: Int $cpg_saldo: String $cpg_duplicata: String $cpg_dup_seq: Int
      $cpg_forma_pgto: Int $cpg_centro_custo: Int $cpg_historico: Int $cpg_loja: Int
      $cpg_credor: Int $cpg_nome_credor: String $company: Int
      ) {
      createBillsToPay(input:{
        cpg_contador: $cpg_contador cpg_data_vencimento: $cpg_data_vencimento
        cpg_data_pgto: $cpg_data_pgto cpg_mov_tipo: $cpg_mov_tipo cpg_mov_codigo: $cpg_mov_codigo
        cpg_serie_nf: $cpg_serie_nf cpg_numero_nf: $cpg_numero_nf cpg_origem_credor: $cpg_origem_credor
        cpg_valor_doc: $cpg_valor_doc cpg_parcela: $cpg_parcela cpg_tot_parc: $cpg_tot_parc
        cpg_valor_pago: $cpg_valor_pago cpg_observacoes: $cpg_observacoes cpg_usuario: $cpg_usuario
        cpg_ano_compet: $cpg_ano_compet cpg_mes_compet: $cpg_mes_compet cpg_saldo: $cpg_saldo
        cpg_duplicata: $cpg_duplicata cpg_dup_seq: $cpg_dup_seq cpg_forma_pgto: $cpg_forma_pgto
        cpg_centro_custo: $cpg_centro_custo cpg_historico: $cpg_historico cpg_loja: $cpg_loja
        cpg_credor: $cpg_credor cpg_nome_credor: $cpg_nome_credor empresa:$company
      }){id}
    }`,
    bulkBillsToPayCreate:`mutation BulkBillsToPayCreate(
      $input: [BillsToPayCreateInput!]!
    ){
      bulkBillsToPayCreate(input:$input)
    }`,
    updateBillsToPay:`mutation UpdateBillsToPay(
        $from: String $code: Int $cpg_data_vencimento: String $cpg_data_pgto: String
        $cpg_mov_tipo: Int $cpg_mov_codigo: Int $cpg_serie_nf: String $cpg_numero_nf: Int
        $cpg_origem_credor: Int $cpg_valor_doc: Float $cpg_parcela: Int $cpg_tot_parc: Int
        $cpg_valor_pago: Float $cpg_observacoes: String $cpg_usuario: String
        $cpg_ano_compet: Int $cpg_mes_compet: Int $cpg_saldo: String $cpg_duplicata: String
        $cpg_dup_seq: Int $cpg_forma_pgto: Int $cpg_centro_custo: Int $cpg_historico: Int
        $cpg_loja: Int $cpg_credor: Int $cpg_nome_credor: String! $company: Int!
      ) { updateBillsToPay(from: $from, code: $code, company: $company, input:{
        cpg_data_vencimento: $cpg_data_vencimento cpg_data_pgto: $cpg_data_pgto
        cpg_mov_tipo: $cpg_mov_tipo cpg_mov_codigo: $cpg_mov_codigo
        cpg_serie_nf: $cpg_serie_nf cpg_numero_nf: $cpg_numero_nf
        cpg_origem_credor: $cpg_origem_credor cpg_valor_doc: $cpg_valor_doc
        cpg_parcela: $cpg_parcela cpg_tot_parc: $cpg_tot_parc cpg_valor_pago: $cpg_valor_pago
        cpg_observacoes: $cpg_observacoes cpg_usuario: $cpg_usuario
        cpg_ano_compet: $cpg_ano_compet cpg_mes_compet: $cpg_mes_compet
        cpg_saldo: $cpg_saldo cpg_duplicata: $cpg_duplicata cpg_dup_seq: $cpg_dup_seq
        cpg_forma_pgto: $cpg_forma_pgto cpg_centro_custo: $cpg_centro_custo
        cpg_historico: $cpg_historico cpg_loja: $cpg_loja cpg_credor: $cpg_credor
        cpg_nome_credor: $cpg_nome_credor
      }){id}
    }`,
    deleteBillsToPay:`mutation DelteBillsToPay($code: Int!, $company: Int!, $from: String) { 
      deleteBillsToPay(from:$from, code: $code, company: $company)
    }`,
    allBillsToPays:`query FetchBillsToPays($company: Int!, $credor: Int!){
      billsToPays( company: $company, credor: $credor) {
        cpg_contador
        cpg_data_vencimento
        cpg_data_pgto
        cpg_valor_doc
        cpg_parcela
        cpg_tot_parc
        cpg_valor_pago
        cpg_credor cpg_nome_credor
      },
    }`,
    fetchBillsToPay: `query FetchBillsToPay($company: Int! $code: Int, $from: String!){
      billsToPay(code:$code company: $company from: $from) {${fieldsBillsToPay}}
    }`
  },
  BillsToReceive: {
    createBillsToReceive:`mutation CreateBillsToReceive(
      $crc_contador: Int $crc_data_venc: String $crc_data_pgto: String
      $crc_mov_tipo: Int $crc_mov_loja: Int $crc_mov_cod: Int
      $crc_parcela: Int $crc_dup_numero: Int $crc_dup_ano: Int
      $crc_dup_seq: Int $crc_serie: String $crc_numero: Int
      $crc_loja: Int $crc_cliente: Int $crc_prazo_pgto: Int
      $crc_valor_doc: Float $crc_vendedor: Int $crc_historico: Int
      $crc_total_parcela: Int $crc_importado: Boolean $crc_valor_pago: Float
      $crc_centro_custo: Int $crc_forma_pgto: Int $crc_observacoes: String
      $crc_bco_boleto: Int $crc_saldo: Boolean $crc_perc_multa: Float
      $crc_vlr_multa: Float $crc_juros_dia: Float $crc_cartao_pago: Boolean
      $crc_valor_juros: Float $crc_boleta: Int $crc_caixa: Int
      $crc_status_parcela: String $company: Int!
      ) {
      createBillsToReceive(input:{
        crc_contador: $crc_contador crc_data_venc: $crc_data_venc crc_data_pgto: $crc_data_pgto
        crc_mov_tipo: $crc_mov_tipo crc_mov_loja: $crc_mov_loja crc_mov_cod: $crc_mov_cod
        crc_mov_seq: $crc_parcela crc_dup_numero: $crc_dup_numero crc_dup_ano: $crc_dup_ano
        crc_dup_seq: $crc_dup_seq crc_serie: $crc_serie crc_numero: $crc_numero
        crc_loja: $crc_loja crc_cliente: $crc_cliente crc_prazo_pgto: $crc_prazo_pgto
        crc_valor_doc: $crc_valor_doc crc_vendedor: $crc_vendedor crc_historico: $crc_historico
        crc_total_parcela: $crc_total_parcela crc_importado: $crc_importado
        crc_valor_pago: $crc_valor_pago crc_centro_custo: $crc_centro_custo
        crc_forma_pgto: $crc_forma_pgto crc_observacoes: $crc_observacoes
        crc_bco_boleto: $crc_bco_boleto crc_saldo: $crc_saldo crc_perc_multa: $crc_perc_multa
        crc_vlr_multa: $crc_vlr_multa crc_juros_dia: $crc_juros_dia crc_cartao_pago: $crc_cartao_pago
        crc_valor_juros: $crc_valor_juros crc_boleta: $crc_boleta crc_caixa: $crc_caixa
        crc_status_parcela: $crc_status_parcela empresa: $company
      }){id}
    }`,
    bulkBillsToReceiveCreate:` mutation BulkBillsToReceiveCreate(
        $input: [BillsToReceiveCreateInput!]!
      ){bulkBillsToReceiveCreate(input:$input)
    }`,
    updateBillsToReceive:`mutation UpdateBillsToReceive(
      $from: String $code: Int $crc_data_venc: String $crc_data_pgto: String
      $crc_mov_tipo: Int $crc_mov_loja: Int $crc_mov_cod: Int $crc_parcela: Int
      $crc_dup_numero: Int $crc_dup_ano: Int $crc_dup_seq: Int $crc_serie: String
      $crc_numero: Int $crc_loja: Int $crc_cliente: Int $crc_prazo_pgto: Int
      $crc_valor_doc: Float $crc_vendedor: Int $crc_historico: Int
      $crc_total_parcela: Int $crc_importado: Boolean $crc_valor_pago: Float
      $crc_centro_custo: Int $crc_forma_pgto: Int $crc_observacoes: String
      $crc_bco_boleto: Int $crc_saldo: Boolean $crc_perc_multa: Float
      $crc_vlr_multa: Float $crc_juros_dia: Float $crc_cartao_pago: Boolean
      $crc_valor_juros: Float $crc_boleta: Int $crc_caixa: Int $crc_status_parcela: String
      $company: Int!
      ) {
      updateBillsToReceive(from: $from, code: $code, company: $company, input:{
        crc_data_venc: $crc_data_venc crc_data_pgto: $crc_data_pgto
        crc_mov_tipo: $crc_mov_tipo crc_mov_loja: $crc_mov_loja crc_mov_cod: $crc_mov_cod
        crc_parcela: $crc_parcela crc_dup_numero: $crc_dup_numero crc_dup_ano: $crc_dup_ano
        crc_dup_seq: $crc_dup_seq crc_serie: $crc_serie crc_numero: $crc_numero
        crc_loja: $crc_loja crc_cliente: $crc_cliente crc_prazo_pgto: $crc_prazo_pgto
        crc_valor_doc: $crc_valor_doc crc_vendedor: $crc_vendedor crc_historico: $crc_historico
        crc_total_parcela: $crc_total_parcela crc_importado: $crc_importado 
        crc_valor_pago: $crc_valor_pago crc_centro_custo: $crc_centro_custo
        crc_forma_pgto: $crc_forma_pgto crc_observacoes: $crc_observacoes
        crc_bco_boleto: $crc_bco_boleto crc_saldo: $crc_saldo crc_perc_multa: $crc_perc_multa
        crc_vlr_multa: $crc_vlr_multa crc_juros_dia: $crc_juros_dia crc_cartao_pago: $crc_cartao_pago
        crc_valor_juros: $crc_valor_juros crc_boleta: $crc_boleta crc_caixa: $crc_caixa
        crc_status_parcela: $crc_status_parcela
      }){ id }
    }`,
    deleteBillsToReceive:`mutation DelteBillsToReceive($code: Int, $from: String, $company:Int!){
      deleteBillsToReceive(code: $code, from: $from, company:$company)
    }`,
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