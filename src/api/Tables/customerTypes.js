const { axiosAuth } = require('../../configs/axios');
const Schema = require('../../utils/getSchemas');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');

function CustomerTypeActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'table';
  this.owner = 'CustomerType';
  this.fileName = fileName

  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allCustomerTypes':
          return await allCustomerTypes(this.variables);
        case 'fetchCustomerType':
          return await customerTypes(this.variables);
        case 'createCustomerType': 
          return await createCustomerTypes(this.variables);
        case 'updateCustomerType':
          return await updateCustomerTypes(this.variables);
        case 'deleteCustomerType':
          return await deleteCustomerTypes(this.variables);  
        case 'bulkCustomerTypeCreate':
          return await bulkCreateCustomerTypes(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }
  const cTSchema = Schema.get(this.owner, this.target, this.action);


  async function allCustomerTypes(variables) {
    try {
      const query = cTSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { customerTypes } = response.data.data;
      const configToWrite = {
        
        action: 'allCustomerTypes',
        values: customerTypes,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      console.log('customer', err)
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function customerTypes(variables) {
    try {
      const query = cTSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { customerType } = response.data.data;
      const { tpc_codigo } = customerType;
      const configToWrite = {
        
        action: 'customerType',
        values: customerType,
        code: tpc_codigo,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function createCustomerTypes(variables) {
    try {
      const query = cTSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createCustomerType } = response.data.data;
      const configToWrite = {
        
        action: 'createCustomerType',
        values: createCustomerType,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function bulkCreateCustomerTypes(variables) {
    try {
      const query = cTSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkCustomerTypeCreate } = response.data.data;
      const configToWrite = {
        
        action: 'bulkCustomerTypeCreate',
        values: bulkCustomerTypeCreate,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function updateCustomerTypes(variables) {
    try {
      const query = cTSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateCustomerType } = response.data.data;
      const configToWrite = {
        
        action: 'updateCustomerType',
        values: updateCustomerType,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function deleteCustomerTypes(variables) {
    try {
      const query = cTSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteCustomerType } = response.data.data;
      const configToWrite = {
        
        action: 'deleteCustomerType',
        values: deleteCustomerType,
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

module.exports = CustomerTypeActions;