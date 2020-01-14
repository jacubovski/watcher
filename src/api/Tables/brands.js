const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function BrandActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'table';
  this.owner = 'Brand';
  this.fileName = fileName

  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allBrands':
          return await allBrands(this.variables);
        case 'fetchBrand':
          return await brand(this.variables);
        case 'createBrand': 
          return await createBrands(this.variables);
        case 'updateBrand':
          return await updateBrands(this.variables);
        case 'deleteBrand':
          return await deleteBrands(this.variables);  
        case 'bulkBrandCreate':
          return await bulkCreateBrands(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const brnadSchema = Schema.get(this.owner, this.target, this.action);

  async function allBrands(variables) {
    try {
      const query = brnadSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { brands } = response.data.data;
      const configToWrite = {
        
        action: 'allBrands',
        values: brands,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function brand(variables) {
    try {
      const query = brnadSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { brand } = response.data.data;
      const { mrc_codigo } = brand;
      const configToWrite = {
        
        action: 'brand',
        values: brand,
        code: mrc_codigo,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function createBrands(variables) {
    try {
      const query = brnadSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createBrand } = response.data.data;
      const configToWrite = {
        
        action: 'createBrand',
        values: createBrand,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function bulkCreateBrands(variables) {
    try {
      const query = brnadSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkBrandCreate } = response.data.data;
      const configToWrite = {
        
        action: 'bulkBrandCreate',
        values: bulkBrandCreate,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function updateBrands(variables) {
    try {
      const query = brnadSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateBrand } = response.data.data;
      const configToWrite = {
        
        action: 'updateBrand',
        values: updateBrand,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function deleteBrands(variables) {
    try {
      const query = brnadSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteBrand } = response.data.data;
      const configToWrite = {
        
        action: 'deleteBrand',
        values: deleteBrand,
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

module.exports = BrandActions;