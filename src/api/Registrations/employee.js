const { axiosAuth } = require('../../configs/axios');
const WriteFile = require('../writerFiles');
const CopyAndDeleteFile = require('../writerFiles/cpAndDelFile');
const Schema = require('../../utils/getSchemas');

function EmployeeActions(action, variables,fileName) {
  this.action = action;
  this.variables = variables;
  this.target = 'registration';
  this.owner = 'Employee';
  this.fileName = fileName
  this.selectAndExecuteAction = async () => {
    try {
      switch (this.action) {
        case 'allEmployees':
          return await AllEmployees(this.variables);
        case 'fetchEmployee':
          return await employee(this.variables);
        case 'createEmployee': 
          return await CreateEmployee(this.variables);
        case 'updateEmployee':
          return await UpdateEmployee(this.variables);
        case 'deleteEmployee':
          return await DeleteEmployee(this.variables);  
        case 'bulkEmployeeCreate':
          return await BulkCreateEmployee(this.variables);
        default: 
          break;
      }
    } catch (error) {
      throw new Error(error);      
    }
  }

  const employeeSchema = Schema.get(this.owner, this.target, this.action);

  async function AllEmployees(variables) {
    try {
      const query = employeeSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { employees } = response.data.data;
      const configToWrite = {
        action: 'allEmployees',
        values: employees,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }
  
  async function employee(variables) {
    try {
      const query = employeeSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { employee } = response.data.data;
      const { func_codigo } = employee;
      const configToWrite = {
        action: 'employee',
        values: employee,
        code: func_codigo,
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function CreateEmployee(variables) {
    try {
      const query = employeeSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { createEmployee } = response.data.data;
      const configToWrite = {
        action: 'createEmployee',
        values: createEmployee,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function UpdateEmployee(variables) {
    try {
      const query = employeeSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { updateEmployee } = response.data.data;
      const configToWrite = {
        action: 'updateEmployee',
        values: updateEmployee,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function DeleteEmployee(variables) {
    try {
      const query = employeeSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables,
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { deleteEmployee } = response.data.data;
      const configToWrite = {
        action: 'deleteEmployee',
        values: deleteEmployee,
        code: Date.now(),
      }
      WriteFile.handler(configToWrite);
      CopyAndDeleteFile.handler(fileName);
      return { code: 200, status: 'success' }
    } catch (err) {
      return { code: 500, status: `Error: ${err.message}` };
    }
  }

  async function BulkCreateEmployee(variables) {
    try {
      const query = employeeSchema;
      const response = await axiosAuth.post('/macweb', {
        query,
        variables: { input: variables },
      });
      if (response.data.errors) throw new Error(response.data.errors);
      const { bulkEmployeeCreate } = response.data.data;
      const configToWrite = {
        action: 'bulkEmployeeCreate',
        values: bulkEmployeeCreate,
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

module.exports = EmployeeActions;