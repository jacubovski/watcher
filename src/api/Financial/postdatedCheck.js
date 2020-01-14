const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function PostdatedCheckActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'financial';
  this.owner = 'PostdatedCheck';
  this.fileName = fileName

  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allPostdatedChecks':
          return await allPostdatedChecks(this.variables);
        case 'fetchPostdatedCheck':
          return await postdatedCheck(this.variables);
        case 'createPostdatedCheck': 
          return await createPostdatedCheck(this.variables);
        case 'updatePostdatedCheck':
          return await updatePostdatedCheck(this.variables);
        case 'deletePostdatedCheck':
          return await deletePostdatedCheck(this.variables);  
        case 'bulkPostdatedCheckCreate':
          return await bulkCreatePostdatedCheck(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const postdatedCheckSchema = Schema.get(this.owner, this.target, this.action);

  async function allPostdatedChecks(variables) {
    try {
      const query = postdatedCheckSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { postdatedChecks } = response.data.data;
      const configToWrite = {
        action: 'allPostdatedChecks',
        values: postdatedChecks,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function postdatedCheck(variables) {
    try {
      const query = postdatedCheckSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { postdatedCheck } = response.data.data;
      const { chq_contador } = postdatedCheck;
      const configToWrite = {
        action: 'postdatedCheck',
        values: postdatedCheck,
        code: chq_contador,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function createPostdatedCheck(variables) {
    try {
      const query = postdatedCheckSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createPostdatedCheck } = response.data.data;
      const configToWrite = {
        action: 'createPostdatedCheck',
        values: createPostdatedCheck,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function bulkCreatePostdatedCheck(variables) {
    try {
      const query = postdatedCheckSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkPostdatedCheckCreate } = response.data.data;
      const configToWrite = {
        action: 'bulkPostdatedCheckCreate',
        values: bulkPostdatedCheckCreate,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function updatePostdatedCheck(variables) {
    try {
      const query = postdatedCheckSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updatePostdatedCheck } = response.data.data;
      const configToWrite = {
        action: 'updatePostdatedCheck',
        values: updatePostdatedCheck,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function deletePostdatedCheck(variables) {
    try {
      const query = postdatedCheckSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deletePostdatedCheck } = response.data.data;
      const configToWrite = {
        action: 'deletePostdatedCheck',
        values: deletePostdatedCheck,
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

module.exports = PostdatedCheckActions;