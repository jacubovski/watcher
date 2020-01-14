const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function UnitMeasActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'table';
  this.owner = 'UnitMeas';
  this.fileName = fileName

  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allUnitMeass':
          return await allUnitMeass(this.variables);
        case 'fetchUnitMeas':
          return await unitMeas(this.variables);
        case 'createUnitMeas': 
          return await createUnitMeass(this.variables);
        case 'updateUnitMeas':
          return await updateUnitMeass(this.variables);
        case 'deleteUnitMeas':
          return await deleteUnitMeass(this.variables);  
        case 'bulkUnitMeasCreate':
          return await bulkCreateUnitMeass(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const unitMeasSchema = Schema.get(this.owner, this.target, this.action);

  async function allUnitMeass(variables) {
    try {
      const query = unitMeasSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { unitmeass } = response.data.data;
      const configToWrite = {
        
        action: 'unitmeass',
        values: unitmeass,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function unitMeas(variables) {
    try {
      const query = unitMeasSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { unitmeas } = response.data.data;
      const { med_codigo } = unitmeas;
      const configToWrite = {
        
        action: 'unitmeas',
        values: unitmeas,
        code: med_codigo,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function createUnitMeass(variables) {
    try {
      const query = unitMeasSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createUnitMeas } = response.data.data;
      const configToWrite = {
        
        action: 'createUnitMeas',
        values: createUnitMeas,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function bulkCreateUnitMeass(variables) {
    try {
      const query = unitMeasSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkUnitMeasCreate } = response.data.data;
      const configToWrite = {
        
        action: 'bulkUnitMeasCreate',
        values: bulkUnitMeasCreate,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function updateUnitMeass(variables) {
    try {
      const query = unitMeasSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateUnitMeas } = response.data.data;
      const configToWrite = {
        
        action: 'updateUnitMeas',
        values: updateUnitMeas,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function deleteUnitMeass(variables) {
    try {
      const query = unitMeasSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteUnitMeas } = response.data.data;
      const configToWrite = {
        
        action: 'deleteUnitMeas',
        values: deleteUnitMeas,
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

module.exports = UnitMeasActions;