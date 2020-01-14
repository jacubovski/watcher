const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function TypePriceActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'table';
  this.owner = 'TypePrice';
  this.fileName = fileName

  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allTypePrices':
          return await allTypePrices(this.variables);
        case 'fetchTypePrice':
          return await typePrice(this.variables);
        case 'createTypePrice': 
          return await createTypePrices(this.variables);
        case 'updateTypePrice':
          return await updateTypePrices(this.variables);
        case 'deleteTypePrice':
          return await deleteTypePrices(this.variables);  
        case 'bulkTypePriceCreate':
          return await bulkCreateTypePrices(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const typePriceSchema = Schema.get(this.owner, this.target, this.action);

  async function allTypePrices(variables) {
    try {
      const query = typePriceSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { typeprices } = response.data.data;
      const configToWrite = {
        
        action: 'typeprices',
        values: typeprices,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function typePrice(variables) {
    try {
      const query = typePriceSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { typeprice } = response.data.data;
      const { prc_codigo } = typeprice;
      const configToWrite = {
        
        action: 'typePrice',
        values: typeprice,
        code: prc_codigo,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function createTypePrices(variables) {
    try {
      const query = typePriceSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createTypePrice } = response.data.data;
      const configToWrite = {
        
        action: 'createTypePrice',
        values: createTypePrice,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function bulkCreateTypePrices(variables) {
    try {
      const query = typePriceSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkTypePriceCreate } = response.data.data;
      const configToWrite = {
        
        action: 'bulkTypePriceCreate',
        values: bulkTypePriceCreate,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function updateTypePrices(variables) {
    try {
      const query = typePriceSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateTypePrice } = response.data.data;
      const configToWrite = {
        
        action: 'updateTypePrice',
        values: updateTypePrice,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function deleteTypePrices(variables) {
    try {
      const query = typePriceSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteTypePrice } = response.data.data;
      const configToWrite = {
        
        action: 'deleteTypePrice',
        values: deleteTypePrice,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
}

module.exports = TypePriceActions;