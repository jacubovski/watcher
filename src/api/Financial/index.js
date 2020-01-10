
module.exports = {
  async whatTarget(...args) {
    try {
      const [target, action, variables, fileName] = args;
      switch (target) {
        case 'bank':
          const Bank = require('./bank');
          const bank = new Bank(action, variables, fileName);
          const resBank = await bank.selectAndExecuteAction();
          return resBank;
        default:
          break;
      }
    } catch (error) {
      throw new Error(error.message)      
    }
  },
}