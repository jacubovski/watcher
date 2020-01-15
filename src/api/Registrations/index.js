
module.exports = {
  async whatTarget(...args) {
    try {
      const [target, action, variables, fileName] = args;
      switch (target) {
        case 'address':
          const Address = require('./address');
          const address = new Address(action, variables, fileName);
          const resAddress = await address.selectAndExecuteAction();
          return resAddress;
        case 'customer':
          const Customer = require('./customers');
          const customers = new Customer(action, variables, fileName);
          const resCustomer = await customers.selectAndExecuteAction();
          return resCustomer;
        case 'provider':
          const Provider = require('./providers');
          const providers = new Provider(action, variables, fileName);
          const resProvider = await providers.selectAndExecuteAction();
          return resProvider;
        case 'employee':
          const Employees = require('./employee');
          const employees = new Employees(action, variables, fileName);
          const resEmployees = await employees.selectAndExecuteAction();
          return resEmployees;  
        default:
          break;
      }
    } catch (error) {
      throw new Error(error.message)      
    }
  },
}