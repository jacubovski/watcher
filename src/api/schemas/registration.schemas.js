const { customerFetchFields, customerInput, customerParams } = require('./fields/customers.fields');
const { addressFetchFields, addressInput, addressParams } = require('./fields/address.fields');
const { providerFetchFields, providerInput, providerParams } = require('./fields/providers.fields');

module.exports = {
  Address: {
    createAddress:`mutation CreateAddress(${addressParams}){
      createAddress(input:{${addressInput}}){
        ${addressFetchFields}
      }
    }`,
    bulkAddressCreate:`mutation bulkAddressCreate($input:[AddressCreateInput!]!){
      bulkAddressCreate(input: $input)
    }`,
  },
  Customer: {
    createCustomer:`mutation CreateCustomer(
      $cli_codigo:Int!,
      $company: Int!,
      ${customerParams}){
      createCustomer(input:{ cli_codigo: $cli_codigo empresa: $company ${customerInput} }){ 
        ${customerFetchFields}
       }
    }`,
    bulkCustomerCreate:`mutation bulkCustomerCreate($input: [CustomerCreateInput!]!) {
      bulkCustomerCreate(input: $input)
    }`,
    updateCustomer:`mutation UpdateCustomer(
      $from:String,
      $code:Int,
      $company: Int!,
      ${customerParams}){
      updateCustomer(
        from:$from,
        code:$code,
        company:$company,
        input:{${customerInput}
      }){${customerFetchFields}}
    }`,
    deleteCustomer:`mutation DelteCustomer($codeOrigin: Int,$from: String,$company:Int!){
      deleteCustomer(codeOrigin: $codeOrigin,from: $from,company:$company)
    }`,
    fetchCustomer:`query FetchCustomer($company: Int!, $code: Int!) {
      customer(company: $company, code: $code) { ${customerFetchFields}}
    }`,
  },
  Provider: {
    createProvider:`mutation CreateProvider($frn_codigo: Int!,$company: Int!, ${providerParams}){
      createProvider( input: {frn_codigo: $frn_codigo empresa: $company ${providerInput}}){ 
        ${providerFetchFields}
      }
    }`,
    bulkProviderCreate:`mutation bulkProviderCreate($input:[ProviderCreateInput!]!) {
      bulkProviderCreate(input: $input)
    }`,
    updateProvider:`mutation UpdateProvider($from: String,$code: Int,$company: Int!,${providerParams}){
      updateProvider(from: $from,code: $code,company: $company,input:{${providerInput}}){
        ${providerFetchFields}
      }
    }`,
    deleteProvider:`mutation DelteProvider($code: Int,$from: String,$company:Int!){
      deleteProvider(code: $code from: $from company:$company)
    }`,
    fetchProvider:`query Provider($code: Int!, $company: Int!) {
      provider(code: $code, company: $company) {
        ${providerFetchFields}
      }
    }`,
  }
}