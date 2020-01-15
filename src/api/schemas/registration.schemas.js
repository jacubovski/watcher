const { customerFetchFields, customerInput, customerParams } = require('./fields/customers.fields');
const { addressFetchFields, addressInput, addressParams } = require('./fields/address.fields');

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
  }
}