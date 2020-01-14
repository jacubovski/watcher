const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function CfopActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'table';
  this.owner = 'Cfop';
  this.fileName = fileName

  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allCfops':
          return await allCfops(this.variables);
        case 'fetchCfop':
          return await cfop(this.variables);
        case 'createCfop': 
          return await createCfops(this.variables);
        case 'updateCfop':
          return await updateCfops(this.variables);
        case 'deleteCfop':
          return await deleteCfops(this.variables);  
        case 'bulkCfopCreate':
          return await bulkCreateCfops(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const cfopSchema = Schema.get(this.owner, this.target, this.action);

  async function allCfops(variables) {
    try {
      const query = cfopSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { cfops } = response.data.data;
      const configToWrite = {
        
        action: 'allCfops',
        values: cfops,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function cfop(variables) {
    try {
      const query = cfopSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { cfop } = response.data.data;
      const { cfop_codigo } = cfop;
      const configToWrite = {
        
        action: 'cfop',
        values: cfop,
        code: cfop_codigo,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function createCfops(variables) {
    try {
      const query = cfopSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createCfop } = response.data.data;
      const configToWrite = {
        
        action: 'createCfop',
        values: createCfop,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function bulkCreateCfops(variables) {
    try {
      const query = cfopSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkCfopCreate } = response.data.data;
      const configToWrite = {
        
        action: 'bulkCfopCreate',
        values: bulkCfopCreate,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function updateCfops(variables) {
    try {
      const query = cfopSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateCfop } = response.data.data;
      const configToWrite = {
        
        action: 'updateCfop',
        values: updateCfop,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function deleteCfops(variables) {
    try {
      const query = cfopSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteCfop } = response.data.data;
      const configToWrite = {
        
        action: 'deleteCfop',
        values: deleteCfop,
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

module.exports = CfopActions;