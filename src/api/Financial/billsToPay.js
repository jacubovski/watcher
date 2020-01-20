const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function BillsToPayActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'financial';
  this.owner = 'BillsToPay';
  this.fileName = fileName

  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'fetchBillsToPay':
          return await billsToPay(this.variables);
        case 'createBillsToPay': 
          return await createBillsToPay(this.variables);
        case 'updateBillsToPay':
          return await updateBillsToPay(this.variables);
        case 'deleteBillsToPay':
          return await deleteBillsToPay(this.variables);  
        case 'bulkBillsToPayCreate':
          return await bulkCreateBillsToPay(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const billsToPaySchema = Schema.get(this.owner, this.target, this.action);

  async function billsToPay(variables) {
    try {
      const query = billsToPaySchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { billsToPay } = response.data.data;
      const { cpg_contador } = billsToPay;
      const configToWrite = {
        method: 'billsToPay',
        action: 'billsToPay',
        module: 'financial',
        values: billsToPay,
        code: cpg_contador,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function createBillsToPay(variables) {
    try {
      const query = billsToPaySchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createBillsToPay } = response.data.data;
      const configToWrite = {
        method: 'createBillsToPay',
        action: 'billsToPay',
        module: 'financial',
        values: createBillsToPay,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function bulkCreateBillsToPay(variables) {
    try {
      const query = billsToPaySchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkBillsToPayCreate } = response.data.data;
      const configToWrite = {
        method: 'bulkBillsToPayCreate',
        action: 'billsToPay',
        module: 'financial',
        values: bulkBillsToPayCreate,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function updateBillsToPay(variables) {
    try {
      const query = billsToPaySchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateBillsToPay } = response.data.data;
      const configToWrite = {
        method: 'updateBillsToPay',
        action: 'billsToPay',
        module: 'financial',
        values: updateBillsToPay,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function deleteBillsToPay(variables) {
    try {
      const query = billsToPaySchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteBillsToPay } = response.data.data;
      const configToWrite = {
        method: 'deleteBillsToPay',
        action: 'billsToPay',
        module: 'financial',
        values: deleteBillsToPay,
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

module.exports = BillsToPayActions;