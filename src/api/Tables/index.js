
module.exports = {
  async whatTarget(...args) {
    try {
      const [target, action, variables, fileName] = args;
      switch (target) {
        case 'brand':
          const Brand = require('./brands');
          const brand = new Brand(action, variables, fileName);
          const resBrand = await brand.selectAndExecuteAction();
          return resBrand;
        case 'cfop':
          const Cfop = require('./cfops');
          const cfop = new Cfop(action, variables, fileName);
          const resCfop = await cfop.selectAndExecuteAction();
          return resCfop;
        case 'costCenter':
          const CostCenter = require('./costCenters');
          const costCenter = new CostCenter(action, variables, fileName);
          const resCostCenter = await costCenter.selectAndExecuteAction();
          return resCostCenter;
          
        case 'customerType':
          const customerType = require('./customerTypes');
          const customerTP = new customerType(action, variables, fileName);
          const resTPC = await customerTP.selectAndExecuteAction();
          return resTPC;
        case 'historic':
          const Historic = require('./historics');
          const historic = new Historic(action, variables, fileName);
          const resHistoric = await historic.selectAndExecuteAction();
          return resHistoric;
        case 'line':
          const Line = require('./lines');
          const line = new Line(action, variables, fileName);
          const resLine = await line.selectAndExecuteAction();
          return resLine;
        case 'ncm':
          const Ncm = require('./ncms');
          const ncm = new Ncm(action, variables, fileName);
          const resNcm = await ncm.selectAndExecuteAction();
          return resNcm;
        case 'subType':
          const SubType = require('./subTypes');
          const subType = new SubType(action, variables, fileName);
          const resSubType = await subType.selectAndExecuteAction();
          return resSubType;
        case 'type':
          const Type = require('./types');
          const type = new Type(action, variables, fileName);
          const resType = await type.selectAndExecuteAction();
          return resType;
        case 'typePrice':
          const TypePrice = require('./typePrices');
          const typePrice = new TypePrice(action, variables, fileName);
          const resTypePrice = await typePrice.selectAndExecuteAction();
          return resTypePrice;
        case 'unitMeas':
          const UnitMeas = require('./unitMeas');
          const unitMeas = new UnitMeas(action, variables, fileName);
          const resUnitMeas = await unitMeas.selectAndExecuteAction();
          return resUnitMeas; 
        case 'zone':
            const Zone = require('./zone');
            const zone = new Zone(action, variables, fileName);
            const resZone = await zone.selectAndExecuteAction();
            return resZone;  
        default:
          break;
      }
    } catch (error) {
      throw new Error(error.message)      
    }
  },
}