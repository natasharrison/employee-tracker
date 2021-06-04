// imported required packages
const inquirer = require('inquirer');


// array of questions for user input 
const questions = [
  {
    type: 'list',
    name: 'action',
    message: 'What type of action would you like to take?',
    choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update and employee role"]
  },
// WHEN I view all departments
// I am presented with a formatted table showing department names and department ids

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
  
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
  {
    type: 'input',
    name: 'department',
    message: "Please enter the name of the department:",
    validate: departmentName => {
      if (departmentName) {
        return true;
      } else {
        console.log('Please enter the name of the department!');
        return false;
      }
    }
    // add department to database
  },
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
  {
    type: 'input',
    name: 'role',
    message: "Please enter the name of the role:",
    validate: roleName => {
      if (roleName) {
        return true;
      } else {
        console.log('Please enter the name of the role!');
        return false;
      }
    }
  },
    {
    type: 'input',
    name: 'salary',
    message: "Please enter the salary for the role:",
    validate: roleSalary => {
      if (roleSalary) {
        return true;
      } else {
        console.log('Please enter the salary for the role!');
        return false;
      }
    }
  },
    {
    type: 'input',
    name: 'roleDepartment',
    message: "Please enter the name of the department for the new role:",
    validate: roleDept => {
      if (roleDept) {
        return true;
      } else {
        console.log('Please enter the name of the department for the new role!');
        return false;
      }
    }
  },
// add all of these into a role and add the new role to the database

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
  {
    type: 'input',
    name: 'firstName',
    message: "Please enter the first name of the employee:",
    validate: firstName => {
      if (firstName) {
        return true;
      } else {
        console.log('Please enter the first name of the employee!');
        return false;
      }
    }
  },
    {
    type: 'input',
    name: 'lastName',
    message: "Please enter the last name of the employee:",
    validate: lastName  => {
      if (lastName) {
        return true;
      } else {
        console.log('Please enter the last name for the employee!');
        return false;
      }
    }
  },
    {
    type: 'input',
    name: 'employeeRole',
    message: "Please enter the role of the employee:",
    validate: employeeRole => {
      if (employeeRole) {
        return true;
      } else {
        console.log('Please enter the role of the employee!');
        return false;
      }
    }
  },
      {
    type: 'input',
    name: 'employeeManager',
    message: "Please enter the Manager of the employee:",
    validate: employeeManager => {
      if (employeeManager) {
        return true;
      } else {
        console.log('Please enter the Manager of the employee!');
        return false;
      }
    }
  },
  // add all of these into a role and add the new role to the database

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
];

inquirer.prompt(questions);