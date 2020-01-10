const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function LineActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'table';
  this.owner = 'Line';
  this.fileName = fileName

  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allLines':
          return await allLines(this.variables);
        case 'fetchLine':
          return await line(this.variables);
        case 'createLine': 
          return await createLines(this.variables);
        case 'updateLine':
          return await updateLines(this.variables);
        case 'deleteLine':
          return await deleteLines(this.variables);  
        case 'bulkLineCreate':
          return await bulkCreateLines(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const lineSchema = Schema.tables(this.owner, this.target, this.action);

  async function allLines(variables) {
    try {
      const query = lineSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { lines } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'allLines',
        values: lines,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function line(variables) {
    try {
      const query = lineSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { line } = response.data.data;
      const { lin_codigo } = line;
      const configToWrite = {
        totalFields: 2,
        action: 'line',
        values: line,
        code: lin_codigo,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function createLines(variables) {
    try {
      const query = lineSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createLine } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'createLine',
        values: createLine,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function bulkCreateLines(variables) {
    try {
      const query = lineSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkLineCreate } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'bulkLineCreate',
        values: bulkLineCreate,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function updateLines(variables) {
    try {
      const query = lineSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateLine } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'updateLine',
        values: updateLine,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function deleteLines(variables) {
    try {
      const query = lineSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteLine } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'deleteLine',
        values: deleteLine,
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

module.exports = LineActions;