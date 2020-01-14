const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function PlotPaymentTermActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'financial';
  this.owner = 'PlotPaymentTerm';
  this.fileName = fileName
  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'createPlotsPaymentTerm': 
          return await createPlotPaymentTerm(this.variables);
        case 'updatePlotsPaymentTerm':
          return await updatePlotPaymentTerm(this.variables);
        case 'deletePlotsPaymentTerm':
          return await deletePlotPaymentTerm(this.variables);  
        case 'bulkPlotsPaymentTermCreate':
          return await bulkCreatePlotPaymentTerm(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const plotSchema = Schema.get(this.owner, this.target, this.action);

  async function createPlotPaymentTerm(variables) {
    try {
      const query = plotSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createPlotsPaymentTerm } = response.data.data;
      const configToWrite = {
        action: 'createPlotsPaymentTerm',
        values: createPlotsPaymentTerm,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function updatePlotPaymentTerm(variables) {
    try {
      const query = plotSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updatePlotsPaymentTerm } = response.data.data;
      const configToWrite = {
        action: 'updatePlotsPaymentTerm',
        values: updatePlotsPaymentTerm,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function deletePlotPaymentTerm(variables) {
    try {
      const query = plotSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deletePlotsPaymentTerm } = response.data.data;
      const configToWrite = {
        action: 'deletePlotsPaymentTerm',
        values: deletePlotsPaymentTerm,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function bulkCreatePlotPaymentTerm(variables) {
    try {
      const query = plotSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkPlotsPaymentTermCreate } = response.data.data;
      const configToWrite = {
        action: 'bulkPlotsPaymentTermCreate',
        values: bulkPlotsPaymentTermCreate,
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

module.exports = PlotPaymentTermActions;