function returnSchema(args) {
  const [ owner, module, target ] = args;
  switch (module) {
    case 'table':
      const tableSchma = require('./tables.schemas');
      return tableSchma[owner]
    default:
      break;
  }
}


module.exports = {
  get(...args) {
    return returnSchema(args);
    
  }
}