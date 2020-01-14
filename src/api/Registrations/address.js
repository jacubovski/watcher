const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function AddressActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'registration';
  this.owner = 'Address';
  this.fileName = fileName
  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allAddress':
          return await AllAddress(this.variables);
        case 'fetchAddress':
          return await Address(this.variables);
        case 'createAddress': 
          return await CreateAddress(this.variables);
        case 'updateAddress':
          return await UpdateAddress(this.variables);
        case 'deleteAddress':
          return await DeleteAddress(this.variables);  
        case 'bulkAddressCreate':
          return await BulkCreateAddress(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const addressSchema = Schema.get(this.owner, this.target, this.action);

  async function AllAddress(variables) {
    try {
      const query = addressSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { addresss } = response.data.data;
      const configToWrite = {
        
        action: 'allAddress',
        values: addresss,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function Address(variables) {
    try {
      const query = addressSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { address } = response.data.data;
      const configToWrite = {
        
        action: 'address',
        values: address,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function CreateAddress(variables) {
    try {
      const query = addressSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createAddress } = response.data.data;
      const configToWrite = {
        
        action: 'createAddress',
        values: createAddress,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function UpdateAddress(variables) {
    try {
      const query = addressSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateAddress } = response.data.data;
      const configToWrite = {
        
        action: 'updateAddress',
        values: updateAddress,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function DeleteAddress(variables) {
    try {
      const query = addressSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteAddress } = response.data.data;
      const configToWrite = {
        
        action: 'deleteAddress',
        values: deleteAddress,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function BulkCreateAddress(variables) {
    try {
      const query = addressSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkAddressCreate } = response.data.data;
      const configToWrite = {
        
        action: 'bulkAddressCreate',
        values: bulkAddressCreate,
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

module.exports = AddressActions;