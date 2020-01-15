const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function ProviderActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'registration';
  this.owner = 'Provider';
  this.fileName = fileName
  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allProvider':
          return await AllProviders(this.variables);
        case 'fetchProvider':
          return await provider(this.variables);
        case 'createProvider': 
          return await CreateProvider(this.variables);
        case 'updateProvider':
          return await UpdateProvider(this.variables);
        case 'deleteProvider':
          return await DeleteProvider(this.variables);  
        case 'bulkProviderCreate':
          return await BulkCreateProvider(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const providerSchema = Schema.get(this.owner, this.target, this.action);

  async function AllProviders(variables) {
    try {
      const query = providerSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { providers } = response.data.data;
      const configToWrite = {
        action: 'AllProviders',
        values: providers,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function provider(variables) {
    try {
      const query = providerSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { provider } = response.data.data;
      const { frn_codigo } = provider;
      const configToWrite = {
        action: 'provider',
        values: provider,
        code: frn_codigo,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function CreateProvider(variables) {
    try {
      const query = providerSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createProvider } = response.data.data;
      const configToWrite = {
        action: 'createProvider',
        values: createProvider,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function UpdateProvider(variables) {
    try {
      const query = providerSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateProvider } = response.data.data;
      const configToWrite = {
        action: 'updateProvider',
        values: updateProvider,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function DeleteProvider(variables) {
    try {
      const query = providerSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteProvider } = response.data.data;
      const configToWrite = {
        action: 'deleteProvider',
        values: deleteProvider,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function BulkCreateProvider(variables) {
    try {
      const query = providerSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkProviderCreate } = response.data.data;
      const configToWrite = {
        action: 'bulkProviderCreate',
        values: bulkProviderCreate,
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

module.exports = ProviderActions;