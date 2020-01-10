const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function HistoricActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'table';
  this.owner = 'Historic';
  this.fileName = fileName

  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allHistorics':
          return await allHistorics(this.variables);
        case 'fetchHistoric':
          return await historic(this.variables);
        case 'createHistoric': 
          return await createHistorics(this.variables);
        case 'updateHistoric':
          return await updateHistorics(this.variables);
        case 'deleteHistoric':
          return await deleteHistorics(this.variables);  
        case 'bulkHistoricCreate':
          return await bulkCreateHistorics(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const historicSchema = Schema.tables(this.owner, this.target, this.action);

  async function allHistorics(variables) {
    try {
      const query = historicSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { historics } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'allHistorics',
        values: historics,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function historic(variables) {
    try {
      const query = historicSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { historic } = response.data.data;
      const { hst_codigo } = historic;
      const configToWrite = {
        totalFields: 2,
        action: 'historic',
        values: historic,
        code: hst_codigo,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function createHistorics(variables) {
    try {
      const query = historicSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createHistoric } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'createHistoric',
        values: createHistoric,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function bulkCreateHistorics(variables) {
    try {
      const query = historicSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkHistoricCreate } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'bulkHistoricCreate',
        values: bulkHistoricCreate,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function updateHistorics(variables) {
    try {
      const query = historicSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateHistoric } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'updateHistoric',
        values: updateHistoric,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function deleteHistorics(variables) {
    try {
      const query = historicSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteHistoric } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'deleteHistoric',
        values: deleteHistoric,
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

module.exports = HistoricActions;