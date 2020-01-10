const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function CostCenterActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'table';
  this.owner = 'CostCenter';
  this.fileName = fileName

  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allCostCenters':
          return await allCostCenters(this.variables);
        case 'fetchCostCenter':
          return await costCenter(this.variables);
        case 'createCostCenter': 
          return await createCostCenters(this.variables);
        case 'updateCostCenter':
          return await updateCostCenters(this.variables);
        case 'deleteCostCenter':
          return await deleteCostCenters(this.variables);  
        case 'bulkCostCenterCreate':
          return await bulkCreateCostCenters(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const costCenterSchema = Schema.tables(this.owner, this.target, this.action);

  async function allCostCenters(variables) {
    try {
      const query = costCenterSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { costCenters } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'allCostCenters',
        values: costCenters,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function costCenter(variables) {
    try {
      const query = costCenterSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { costCenter } = response.data.data;
      const { cc_codigo } = costCenter;
      const configToWrite = {
        totalFields: 2,
        action: 'costCenter',
        values: costCenter,
        code: cc_codigo,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function createCostCenters(variables) {
    try {
      const query = costCenterSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createCostCenter } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'createCostCenter',
        values: createCostCenter,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function bulkCreateCostCenters(variables) {
    try {
      const query = costCenterSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkCostCenterCreate } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'bulkCostCenterCreate',
        values: bulkCostCenterCreate,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function updateCostCenters(variables) {
    try {
      const query = costCenterSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateCostCenter } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'updateCostCenter',
        values: updateCostCenter,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function deleteCostCenters(variables) {
    try {
      const query = costCenterSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteCostCenter } = response.data.data;
      const configToWrite = {
        totalFields: 2,
        action: 'deleteCostCenter',
        values: deleteCostCenter,
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

module.exports = CostCenterActions;