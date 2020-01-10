function returnSchema(args) {
  const [ owner, module ] = args;
  switch (module) {
    case 'table':
      const tableSchma = require('./tables.schemas');
      return tableSchma[owner]
    case 'financial':
      const financialSchma = require('./financial.schemas');
      return financialSchma[owner]
    default:
      break;
  }
}


module.exports = {
  get(...args) {
    return returnSchema(args);
  }
}