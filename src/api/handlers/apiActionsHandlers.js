
async function selectModule(...args) {
  const [module, target, action, variables, fileName] = args
  if (!module) throw new Error('Module not informated');
  try {
    switch (module) {
      case 'table':
        const handlerTables = require('../Tables');
        return await handlerTables.whatTarget(target, action, variables,fileName);
      case 'financial':
        const handlerFinancial = require('../Financial');
        return await handlerFinancial.whatTarget(target, action, variables,fileName);
      case 'registration':
        const handlerRegistration = require('../Registrations');
        return await handlerRegistration.whatTarget(target, action, variables,fileName);
      default:
        break;
    }
  } catch (error) {
    throw new Error(error)    
  }
};

module.exports = {
  async actions(payload, fileName) {
    const { module, target, action, variables } = payload;
    try {
      const response = await selectModule(module, target, action, variables,fileName);
      return response;
    } catch (error) {
      throw new Error(error)    
    }
  }
}