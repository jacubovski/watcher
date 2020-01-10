const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function SubTypeActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'table';
  this.owner = 'SubType';
  this.fileName = fileName

  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allSubTypes':
          return await allSubTypes(this.variables);
        case 'fetchSubType':
          return await subType(this.variables);
        case 'createSubType': 
          return await createSubTypes(this.variables);
        case 'updateSubType':
          return await updateSubTypes(this.variables);
        case 'deleteSubType':
          return await deleteSubTypes(this.variables);  
        case 'bulkSubTypeCreate':
          return await bulkCreateSubTypes(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const subTypeSchema = Schema.tables(this.owner, this.target, this.action);

  async function allSubTypes(variables) {
    try {
      const query = subTypeSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { subtypes } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'allSubTypes',
        values: subtypes,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function subType(variables) {
    try {
      const query = subTypeSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { subtype } = response.data.data;
      const { stp_codigo } = subtype;
      const configToWrite = {
        totalFields: 2,
        action: 'subType',
        values: subtype,
        code: stp_codigo,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function createSubTypes(variables) {
    try {
      const query = subTypeSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createSubType } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'createSubType',
        values: createSubType,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function bulkCreateSubTypes(variables) {
    try {
      const query = subTypeSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkSubTypeCreate } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'bulkSubTypeCreate',
        values: bulkSubTypeCreate,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function updateSubTypes(variables) {
    try {
      const query = subTypeSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateSubType } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'updateSubType',
        values: updateSubType,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function deleteSubTypes(variables) {
    try {
      const query = subTypeSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteSubType } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'deleteSubType',
        values: deleteSubType,
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

module.exports = SubTypeActions;