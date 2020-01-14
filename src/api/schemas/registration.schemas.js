module.exports = {
  Address: {
    bulkAddressCreate:`
      mutation bulkAddressCreate(
        $input: [AddressCreateInput!] !
      ) {
        bulkAddressCreate(input: $input)
    }`,
  }
}