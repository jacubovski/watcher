const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function PaymentFormActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'financial';
  this.owner = 'PaymentForm';
  this.fileName = fileName
  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allPaymentForms':
          return await allPaymentForms(this.variables);
        case 'fetchPaymentForm':
          return await paymentForm(this.variables);
        case 'createPaymentForm': 
          return await createPaymentForm(this.variables);
        case 'updatePaymentForm':
          return await updatePaymentForm(this.variables);
        case 'deletePaymentForm':
          return await deletePaymentForm(this.variables);  
        case 'bulkPaymentFormCreate':
          return await bulkCreatePaymentForm(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const paymentFormSchema = Schema.get(this.owner, this.target, this.action);

  async function allPaymentForms(variables) {
    try {
      const query = paymentFormSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { paymentForms } = response.data.data;
      const configToWrite = {
        action: 'allPaymentForms',
        values: paymentForms,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function paymentForm(variables) {
    try {
      const query = paymentFormSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { paymentForm } = response.data.data;
      const { fpg_codigo } = paymentForm;
      const configToWrite = {
        action: 'paymentForm',
        values: paymentForm,
        code: fpg_codigo,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function createPaymentForm(variables) {
    try {
      const query = paymentFormSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createPaymentForm } = response.data.data;
      const configToWrite = {
        action: 'createPaymentForm',
        values: createPaymentForm,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function updatePaymentForm(variables) {
    try {
      const query = paymentFormSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updatePaymentForm } = response.data.data;
      const configToWrite = {
        action: 'updatePaymentForm',
        values: updatePaymentForm,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function deletePaymentForm(variables) {
    try {
      const query = paymentFormSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deletePaymentForm } = response.data.data;
      const configToWrite = {
        action: 'deletePaymentForm',
        values: deletePaymentForm,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function bulkCreatePaymentForm(variables) {
    try {
      const query = paymentFormSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkPaymentFormCreate } = response.data.data;
      const configToWrite = {
        action: 'bulkPaymentFormCreate',
        values: bulkPaymentFormCreate,
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

module.exports = PaymentFormActions;