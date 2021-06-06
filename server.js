// imported required packages
const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');

const roleDepartment = async function () {
  var roleDepartment = [];
  var promiseWrapper = function () {
    return new Promise((resolve) => {
      db.query('SELECT * FROM department',
        function (err, results, field) {
          if (err) throw err;
          for (var i = 0; i < results.length; i++) {
            roleDepartment.push(results[i].department_name);
          }
          resolve("resolved");
        });
    });
  };
  await promiseWrapper();
  return roleDepartment;
};

// array of questions for user input 
const mainQuestion = [
  {
    type: 'list',
    name: 'action',
    message: 'What type of action would you like to take?',
    choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit"]
  },
];

// ask this question once 'add a department' is selected
const deptQuestion = [
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
  }
];

var roleQuestion = [];
// ask this question once 'add a role' is selected
roleDepartment().then((departments) => {
  roleQuestion = [
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
      type: 'list',
      name: 'roleDepartment',
      message: "Please select the appropriate Department for the new role:",
      choices: departments
    }
  ];
});

// ask this question once 'add an employee is selected 
const employeeQuestion = [
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
    validate: lastName => {
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
  }
];

// ask this question once 'update an employee is selected 
const updateEmployee = [
  // WHEN I choose to update an employee role
  // THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
];

inquirer.prompt(mainQuestion)
  //answers = {}
  .then(answers => {
    // WHEN I view all departments
    // I am presented with a formatted table showing department names and department ids
    if (answers.action == "View all departments") {
      db.query('SELECT * FROM department',
        function (err, results, fields) {
          console.table(results);
        }
      )
    }
    // WHEN I choose to view all roles
    // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
    if (answers.action == "View all roles") {
      db.query('SELECT * FROM employeeRole',
        function (err, results, fields) {
          console.table(results);
        })
    }
    // WHEN I choose to view all employees
    // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    if (answers.action == "View all employees") {
      db.query('SELECT * FROM employee',
        function (err, results, fields) {
          console.table(results);
        })
    }

    if (answers.action == "Add a department") {
      inquirer.prompt(deptQuestion)
        .then(answers => {
          console.log(answers.department)
          db.query("INSERT INTO department (department_name) VALUES (?)", [answers.department])
          db.query('SELECT * FROM department',
            function (err, results, fields) {
              console.table(results)
            })
        })
    }

    if (answers.action == "Add a role") {
      inquirer.prompt(roleQuestion)
        .then(answers => {
          db.query("INSERT INTO employeeRole (title, salary, department_id) VALUES (?, ?, ?)", [answers.role, answers.salary, answers.roleDepartment])

          db.query('SELECT * FROM employeeRole',
            function (err, results, fields) {
              console.table(results)
            })
        })
    }

    if (answers.action == "Add an employee") {
      inquirer.prompt(employeeQuestion)
        .then(answers => {
          db.query("INSERT INTO employee (first_name, last_name) VALUES (?, ?)", [answers.firstName, answers.lastName])
          // db.query("INSERT INTO employee (employeeRole_id) VALUES (?)", [answers.employeeRole])
          // db.query("INSERT INTO employee (manager_id) VALUES (?)", [answers.employeeManager])
          db.query('SELECT * FROM employee',
            function (err, results, fields) {
              console.table(results)
            })
        })
    }

    if (answers.action == "Update an employee role") {
      inquirer.prompt(updateEmployee)
        .then(answers => {
          console.log(answers);
        })
    }

    // Exit
    if (answers.action == "Exit") {
      questions.complete();
    }
  });


