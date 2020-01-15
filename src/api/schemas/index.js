
module.exports = {
  get(...args) {
    const [ owner, module ] = args;
    switch (module) {
      case 'table':
        const tableSchma = require('./tables.schemas');
        return tableSchma[owner];
      case 'financial':
        const financialSchma = require('./financial.schemas');
        return financialSchma[owner];
      case 'registration':
        const registrationSchma = require('./registration.schemas');
        return registrationSchma[owner];
      default:
        break;
    }
  }
}