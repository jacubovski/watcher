const Schemas = require('../api/schemas');

module.exports = {
  tables(owner, target, action){
    const allSchema = Schemas.get(owner, target, action);
    const schema = Object.keys(allSchema).filter(k => k === action);
    return allSchema[schema];
  },
}