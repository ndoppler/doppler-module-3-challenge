// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
const employeeArray = [];
let addAnotherEmployee = true

    while (addAnotherEmployee) {

    const firstName = prompt("Enter the first name of the employee:");
    const lastName = prompt("Enter the last name of the employee:");
    let salary;
    do {
        salary = parseInt(prompt("Enter the salary of the employee:"));
        if (isNaN(salary) || salary <= 0) {
            alert("Please enter a valid salary greater than 0.");
        }
    } while (isNaN(salary) || salary <= 0);

    // Create an object representing the employee
    const currentEmployee = {
        firstName: firstName,
        lastName: lastName,
        salary: salary
    }
  
    employeeArray.push(currentEmployee);


    // add confirm statement to loo
    addAnotherEmployee = confirm("Add another employee?")
    }
    return employeeArray; // Return the employee object
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
    // TODO: Calculate and display the average salary
    employeesSum = 0 
for (i = 0; i < employeesArray.length; ++i) {
   employeesSum += employeesArray[i].salary;
}

console.log(`The average employee salary between our ${employeesArray.length} is $${employeesSum/employeesArray.length}.`);
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {

    // TODO: Select and display a random employee
    function getRandomInt(max) {
        return Math.floor(Math.random() * employeesArray.length);
      }
    
      let employeeRandomizer = getRandomInt()
    
    console.log(`Congratulations to ${employeesArray[employeeRandomizer].firstName} ${employeesArray[employeeRandomizer].lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');

    // Clear the employee table
    employeeTable.innerHTML = '';

    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
        const currentEmployee = employeesArray[i];

        const newTableRow = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = currentEmployee.firstName;
        newTableRow.append(firstNameCell);

        const lastNameCell = document.createElement("td");
        lastNameCell.textContent = currentEmployee.lastName;
        newTableRow.append(lastNameCell);

        const salaryCell = document.createElement("td");
        // Format the salary as currency
        salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });

        newTableRow.append(salaryCell);

        employeeTable.append(newTableRow);
    }
}

const trackEmployeeData = function () {
    const employees = collectEmployees();

    console.table(employees);

    displayAverageSalary(employees);

    console.log('==============================');

    getRandomEmployee(employees);

    employees.sort(function (a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        } else {
            return 1;
        }
    });

    displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
