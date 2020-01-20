const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function BillsToReceiveActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'financial';
  this.owner = 'BillsToReceive';
  this.fileName = fileName

  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'fetchBillsToReceive':
          return await billsToReceive(this.variables);
        case 'createBillsToReceive': 
          return await createBillsToReceive(this.variables);
        case 'updateBillsToReceive':
          return await updateBillsToReceive(this.variables);
        case 'deleteBillsToReceive':
          return await deleteBillsToReceive(this.variables);  
        case 'bulkBillsToReceiveCreate':
          return await bulkCreateBillsToReceive(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const billsToReceiveSchema = Schema.get(this.owner, this.target, this.action);

  async function billsToReceive(variables) {
    try {
      const query = billsToReceiveSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { billsToReceive } = response.data.data;
      const { cpg_contador } = billsToReceive;
      const configToWrite = {
        method: 'billsToReceive',
        action: 'billsToReceive',
        module: 'financial',
        values: billsToReceive,
        code: cpg_contador,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function createBillsToReceive(variables) {
    try {
      const query = billsToReceiveSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createBillsToReceive } = response.data.data;
      const configToWrite = {
        method: 'createBillsToReceive',
        action: 'billsToReceive',
        module: 'financial',
        values: createBillsToReceive,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function bulkCreateBillsToReceive(variables) {
    try {
      const query = billsToReceiveSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkBillsToReceiveCreate } = response.data.data;
      const configToWrite = {
        method: 'bulkBillsToReceiveCreate',
        action: 'billsToReceive',
        module: 'financial',
        values: bulkBillsToReceiveCreate,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function updateBillsToReceive(variables) {
    try {
      const query = billsToReceiveSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateBillsToReceive } = response.data.data;
      const configToWrite = {
        method: 'updateBillsToReceive',
        action: 'billsToReceive',
        module: 'financial',
        values: updateBillsToReceive,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function deleteBillsToReceive(variables) {
    try {
      const query = billsToReceiveSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteBillsToReceive } = response.data.data;
      const configToWrite = {
        method: 'deleteBillsToReceive',
        action: 'billsToReceive',
        module: 'financial',
        values: deleteBillsToReceive,
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

module.exports = BillsToReceiveActions;