const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function BankActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'financial';
  this.owner = 'Bank';
  this.fileName = fileName

  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allBanks':
          return await allBanks(this.variables);
        case 'fetchBank':
          return await bank(this.variables);
        case 'createBank': 
          return await createBank(this.variables);
        case 'updateBank':
          return await updateBank(this.variables);
        case 'deleteBank':
          return await deleteBank(this.variables);  
        case 'bulkBankCreate':
          return await bulkCreateBank(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const bankSchema = Schema.get(this.owner, this.target, this.action);

  async function allBanks(variables) {
    try {
      const query = bankSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { banks } = response.data.data;
      const configToWrite = {
        module: 'financial',
        action: 'bank',
        method: 'allBanks',
        values: banks,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function bank(variables) {
    try {
      const query = bankSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bank } = response.data.data;
      const { bco_codigo } = bank;
      const configToWrite = {
        method: 'bank',
        action: 'bank',
        module: 'financial',
        values: bank,
        code: bco_codigo,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function createBank(variables) {
    try {
      const query = bankSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createBank } = response.data.data;
      const configToWrite = {
        method: 'createBank',
        action: 'bank',
        module: 'financial',
        values: createBank,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function bulkCreateBank(variables) {
    try {
      const query = bankSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkBankCreate } = response.data.data;
      const configToWrite = {
        method: 'bulkBankCreate',
        action: 'bank',
        module: 'financial',
        values: bulkBankCreate,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function updateBank(variables) {
    try {
      const query = bankSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateBank } = response.data.data;
      const configToWrite = {
        method: 'updateBank',
        action: 'bank',
        module: 'financial',
        values: updateBank,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function deleteBank(variables) {
    try {
      const query = bankSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteBank } = response.data.data;
      const configToWrite = {
        method: 'deleteBank',
        action: 'bank',
        module: 'financial',
        values: deleteBank,
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

module.exports = BankActions;