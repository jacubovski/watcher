const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function SalesmanActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'registration';
  this.owner = 'Salesman';
  this.fileName = fileName
  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allSalesman':
          return await AllSalesmans(this.variables);
        case 'fetchSalesman':
          return await salesman(this.variables);
        case 'createSalesman': 
          return await CreateSalesman(this.variables);
        case 'updateSalesman':
          return await UpdateSalesman(this.variables);
        case 'deleteSalesman':
          return await DeleteSalesman(this.variables);  
        case 'bulkSalesmanCreate':
          return await BulkCreateSalesman(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const salesmanSchema = Schema.get(this.owner, this.target, this.action);

  async function AllSalesmans(variables) {
    try {
      const query = salesmanSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { salesmans } = response.data.data;
      const configToWrite = {
        action: 'AllSalesmans',
        values: salesmans,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function salesman(variables) {
    try {
      const query = salesmanSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { salesman } = response.data.data;
      const { vnd_codigo } = salesman;
      const configToWrite = {
        action: 'salesman',
        values: salesman,
        code: vnd_codigo,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function CreateSalesman(variables) {
    try {
      const query = salesmanSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createSalesman } = response.data.data;
      const configToWrite = {
        action: 'createSalesman',
        values: createSalesman,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function UpdateSalesman(variables) {
    try {
      const query = salesmanSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateSalesman } = response.data.data;
      const configToWrite = {
        action: 'updateSalesman',
        values: updateSalesman,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function DeleteSalesman(variables) {
    try {
      const query = salesmanSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteSalesman } = response.data.data;
      const configToWrite = {
        action: 'deleteSalesman',
        values: deleteSalesman,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function BulkCreateSalesman(variables) {
    try {
      const query = salesmanSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkSalesmanCreate } = response.data.data;
      const configToWrite = {
        action: 'bulkSalesmanCreate',
        values: bulkSalesmanCreate,
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

module.exports = SalesmanActions;