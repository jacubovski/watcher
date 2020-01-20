const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function CardActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'financial';
  this.owner = 'Card';
  this.fileName = fileName

  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'fetchCard':
          return await card(this.variables);
        case 'createCard': 
          return await createCard(this.variables);
        case 'updateCard':
          return await updateCard(this.variables);
        case 'deleteCard':
          return await deleteCard(this.variables);  
        case 'bulkCardsCreate':
          return await bulkCreateCard(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const cardSchema = Schema.get(this.owner, this.target, this.action);

  async function card(variables) {
    try {
      const query = cardSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { card } = response.data.data;
      const { crt_contador } = card;
      const configToWrite = {
        module: 'financial',
        action: 'card',
        method: 'card',
        values: card,
        code: crt_contador,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function createCard(variables) {
    try {
      const query = cardSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createCard } = response.data.data;
      const configToWrite = {
        module: 'financial',
        action: 'card',
        method: 'createCard',
        values: createCard,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function bulkCreateCard(variables) {
    try {
      const query = cardSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkCardCreate } = response.data.data;
      const configToWrite = {
        module: 'financial',
        action: 'card',
        method: 'bulkCardCreate',
        values: bulkCardCreate,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function updateCard(variables) {
    try {
      const query = cardSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateCard } = response.data.data;
      const configToWrite = {
        module: 'financial',
        action: 'card',
        method: 'updateCard',
        values: updateCard,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function deleteCard(variables) {
    try {
      const query = cardSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteCard } = response.data.data;
      const configToWrite = {
        module: 'financial',
        action: 'card',
        method: 'deleteCard',
        values: deleteCard,
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

module.exports = CardActions;