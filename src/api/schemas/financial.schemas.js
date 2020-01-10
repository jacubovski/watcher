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
      }){
        bco_codigo bco_codigo_banco bco_codigo_agencia bco_conta bco_nome_banco
        bco_nome_agencia bco_nosso_numero bco_contato bco_numero_remessa bco_numero_convenio
        bco_numero_contrato bco_telefones bco_dv_banco bco_dv_conta bco_dv_agencia
        bco_observacoes bco_modalidade bco_cnab bco_carteira bco_aceite bco_titular
        bco_prefixo bco_codigo_cedente
      }
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
      }){ 
        bco_codigo bco_codigo_banco bco_codigo_agencia bco_conta bco_nome_banco
        bco_nome_agencia bco_nosso_numero bco_contato bco_numero_remessa bco_numero_convenio
        bco_numero_contrato bco_telefones bco_dv_banco bco_dv_conta bco_dv_agencia
        bco_observacoes bco_modalidade bco_cnab bco_carteira bco_aceite bco_titular
        bco_prefixo bco_codigo_cedente
      }
    }`,
    deleteBank:`mutation DeleteBank($code: Int, $from: String, $company:Int!){
      deleteBank( code: $code, from: $from, company:$company)
    }`,
    fetchBank: `query bank($code: Int!, $company: Int!) {
      bank(code: $code, company: $company) {
        bco_codigo bco_codigo_banco bco_codigo_agencia bco_conta bco_nome_banco
        bco_nome_agencia bco_nosso_numero bco_contato bco_numero_remessa bco_numero_convenio
        bco_numero_contrato bco_telefones bco_dv_banco bco_dv_conta bco_dv_agencia
        bco_observacoes bco_modalidade bco_cnab bco_carteira bco_aceite bco_titular
        bco_prefixo bco_codigo_cedente bco_endereco(company: $company) {
          end_origem end_codigo_origem end_tipo end_endereco
          end_numero end_complemento end_bairro end_cep
          end_uf end_cod_municipio end_municipio
        }
      }
    }`,
    allBanks: `query Banks($company: Int!){
      banks(company: $company) {
        bco_codigo bco_codigo_banco bco_codigo_agencia bco_conta bco_nome_banco
        bco_nome_agencia bco_nosso_numero bco_contato bco_numero_remessa bco_numero_convenio
        bco_numero_contrato bco_telefones bco_dv_banco bco_dv_conta bco_dv_agencia
        bco_observacoes bco_modalidade bco_cnab bco_carteira bco_aceite bco_titular
        bco_prefixo bco_codigo_cedente bco_endereco(company: $company) {
          end_origem end_codigo_origem end_tipo end_endereco
          end_numero end_complemento end_bairro end_cep
          end_uf end_cod_municipio end_municipio
        }
      }
    }`,
  },
}