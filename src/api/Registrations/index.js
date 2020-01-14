
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
        default:
          break;
      }
    } catch (error) {
      throw new Error(error.message)      
    }
  },
}