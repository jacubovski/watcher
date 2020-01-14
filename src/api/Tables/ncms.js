const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function NcmActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'table';
  this.owner = 'Ncm';
  this.fileName = fileName

  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allNcms':
          return await allNcms(this.variables);
        case 'fetchNcm':
          return await ncm(this.variables);
        case 'createNcm': 
          return await createNcms(this.variables);
        case 'updateNcm':
          return await updateNcms(this.variables);
        case 'deleteNcm':
          return await deleteNcms(this.variables);  
        case 'bulkNcmCreate':
          return await bulkCreateNcms(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const ncmSchema = Schema.get(this.owner, this.target, this.action);

  async function allNcms(variables) {
    try {
      const query = ncmSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { ncms } = response.data.data;
      const configToWrite = {
        
        action: 'allNcms',
        values: ncms,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function ncm(variables) {
    try {
      const query = ncmSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { ncm } = response.data.data;
      const { ncm_codigo } = ncm;
      const configToWrite = {
        
        action: 'ncm',
        values: ncm,
        code: ncm_codigo,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function createNcms(variables) {
    try {
      const query = ncmSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createNcm } = response.data.data;
      const configToWrite = {
        
        action: 'createNcm',
        values: createNcm,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function bulkCreateNcms(variables) {
    try {
      const query = ncmSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkNcmCreate } = response.data.data;
      const configToWrite = {
        
        action: 'bulkNcmCreate',
        values: bulkNcmCreate,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function updateNcms(variables) {
    try {
      const query = ncmSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateNcm } = response.data.data;
      const configToWrite = {
        
        action: 'updateNcm',
        values: updateNcm,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function deleteNcms(variables) {
    try {
      const query = ncmSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteNcm } = response.data.data;
      const configToWrite = {
        
        action: 'deleteNcm',
        values: deleteNcm,
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

module.exports = NcmActions;