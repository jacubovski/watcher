const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function CustomerActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'registration';
  this.owner = 'Customer';
  this.fileName = fileName
  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allCustomer':
          return await AllCustomers(this.variables);
        case 'fetchCustomer':
          return await customer(this.variables);
        case 'createCustomer': 
          return await CreateCustomer(this.variables);
        case 'updateCustomer':
          return await UpdateCustomer(this.variables);
        case 'deleteCustomer':
          return await DeleteCustomer(this.variables);  
        case 'bulkCustomerCreate':
          return await BulkCreateCustomer(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const customerSchema = Schema.get(this.owner, this.target, this.action);

  async function AllCustomers(variables) {
    try {
      const query = customerSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { customers } = response.data.data;
      const configToWrite = {
        action: 'allCustomers',
        values: customers,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function customer(variables) {
    try {
      const query = customerSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { customer } = response.data.data;
      const { cli_codigo } = customer;
      const configToWrite = {
        action: 'customer',
        values: customer,
        code: cli_codigo,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function CreateCustomer(variables) {
    try {
      const query = customerSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createCustomer } = response.data.data;
      const configToWrite = {
        action: 'createCustomer',
        values: createCustomer,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function UpdateCustomer(variables) {
    try {
      const query = customerSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateCustomer } = response.data.data;
      const configToWrite = {
        action: 'updateCustomer',
        values: updateCustomer,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function DeleteCustomer(variables) {
    try {
      const query = customerSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteCustomer } = response.data.data;
      const configToWrite = {
        action: 'deleteCustomer',
        values: deleteCustomer,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function BulkCreateCustomer(variables) {
    try {
      const query = customerSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkCustomerCreate } = response.data.data;
      const configToWrite = {
        action: 'bulkCustomerCreate',
        values: bulkCustomerCreate,
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

module.exports = CustomerActions;