const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function PaymentTermActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'financial';
  this.owner = 'PaymentTerm';
  this.fileName = fileName
  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allPaymentTerms':
          return await allPaymentTerms(this.variables);
        case 'fetchPaymentTerm':
          return await paymentTerm(this.variables);
        case 'createPaymentTerm': 
          return await createPaymentTerm(this.variables);
        case 'updatePaymentTerm':
          return await updatePaymentTerm(this.variables);
        case 'deletePaymentTerm':
          return await deletePaymentTerm(this.variables);  
        case 'bulkPaymentTermCreate':
          return await bulkCreatePaymentTerm(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const paymentTermSchema = Schema.get(this.owner, this.target, this.action);

  async function allPaymentTerms(variables) {
    try {
      const query = paymentTermSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { paymentTerms } = response.data.data;
      const configToWrite = {
        
        action: 'allPaymentTerms',
        values: paymentTerms,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function paymentTerm(variables) {
    try {
      const query = paymentTermSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { paymentTerm } = response.data.data;
      const { ppg_codigo } = paymentTerm;
      const configToWrite = {
        
        action: 'paymentTerm',
        values: paymentTerm,
        code: ppg_codigo,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function createPaymentTerm(variables) {
    try {
      const query = paymentTermSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createPaymentTerm } = response.data.data;
      const configToWrite = {
        
        action: 'createPaymentTerm',
        values: createPaymentTerm,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function updatePaymentTerm(variables) {
    try {
      const query = paymentTermSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updatePaymentTerm } = response.data.data;
      const configToWrite = {
        action: 'updatePaymentTerm',
        values: updatePaymentTerm,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function deletePaymentTerm(variables) {
    try {
      const query = paymentTermSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deletePaymentTerm } = response.data.data;
      const configToWrite = {
        
        action: 'deletePaymentTerm',
        values: deletePaymentTerm,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function bulkCreatePaymentTerm(variables) {
    try {
      const query = paymentTermSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkPaymentTermCreate } = response.data.data;
      const configToWrite = {
        
        action: 'bulkPaymentTermCreate',
        values: bulkPaymentTermCreate,
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

module.exports = PaymentTermActions;