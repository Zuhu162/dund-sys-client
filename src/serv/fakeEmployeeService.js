import * as genresAPI from "./fakeDemartmentService";

const employees = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    firstName: "Michael",
    lastName: "Scott",
    department: { _id: "61a7dbea075643d91bd7f0a9", name: "Management" },
    designation: "Regional Manager",
    salary: 63000,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    firstName: "Jim",
    lastName: "Halpert",
    department: { _id: "5b21ca3eeb7f6fbccd471814", name: "Sales" },
    designation: "Head of Sales",
    salary: 62500,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    firstName: "Dwight",
    lastName: "Shrute",
    department: { _id: "5b21ca3eeb7f6fbccd471814", name: "Sales" },
    designation: "Sales Rep, Assistant to RM",
    salary: 62000,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    firstName: "Stanley",
    lastName: "Hudson",
    department: { _id: "5b21ca3eeb7f6fbccd471814", name: "Sales" },
    designation: "Snr Sales Rep",
    salary: 60000,
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    firstName: "Phyllis",
    lastName: "Vance",
    department: { _id: "5b21ca3eeb7f6fbccd471814", name: "Sales" },
    designation: "Sales Rep",
    salary: 55000,
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    firstName: "Andrew",
    lastName: "Bernard",
    department: { _id: "5b21ca3eeb7f6fbccd471814", name: "Sales" },
    designation: "Sales Rep",
    salary: 45000,
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    firstName: "Ryan",
    lastName: "Howard",
    department: { _id: "5b21ca3eeb7f6fbccd471811", name: "Temp" },
    designation: "Temp",
    salary: 30000,
    liked: false,
  },
  {
    _id: "5b21da33eb7f6fbccd1c1822",
    firstName: "Pam",
    lastName: "Beesly",
    department: {
      _id: "5b21ca3eeb7f6fbccd471811",
      name: "MISC",
    },
    designation: "Office Administrator",
    salary: 41500,
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    firstName: "Oscar",
    lastName: "Martinez",
    department: { _id: "5b21ca3eeb7f6fbccd471820", name: "Accounting" },
    designation: "Head Accountant",
    salary: 45000,
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    firstName: "Angela",
    lastName: "Martin",
    department: { _id: "5b21ca3eeb7f6fbccd471820", name: "Accounting" },
    designation: "Accountant",
    salary: 44000,
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182c",
    firstName: "Kevin",
    lastName: "Malhone",
    department: { _id: "5b21ca3eeb7f6fbccd471820", name: "Accounting" },
    designation: "Accountant",
    salary: 32000,
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd341821",
    firstName: "Kelly",
    lastName: "Kapoor",
    department: { _id: "5b21ca3eeb7f6fbccd471810", name: "Customer Service" },
    designation: "Customer Service Rep",
    salary: 33000,
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd141821",
    firstName: "Toby",
    lastName: "Flenderson",
    department: { _id: "5b21ca3eeb7f6fbccd471821", name: "Human Recources" },
    designation: "HR Rep",
    salary: 53000,
    liked: true,
  },
  {
    _id: "5b21da33eb7f6fbccd141821",
    firstName: "Darryl",
    lastName: "Philbin",
    department: { _id: "5b21ca3eeb7f6fbccd471876", name: "Warehouse" },
    designation: "Warehouse Foreman",
    salary: 58000,
    liked: true,
  },
  {
    _id: "5b21da33eb7f6fbccd1c1822",
    firstName: "Meredith",
    lastName: "Palmer",
    department: { _id: "5b21ca3eeb7f6fbccd471810", name: "Customer Service" },
    designation: "Supplier Relations Rep",
    salary: 45000,
    liked: true,
  },
  {
    _id: "5b21da33eb7f6fbccd1d1822",
    firstName: "Creed",
    lastName: "Bratton",
    department: { _id: "5b21ca3eeb7f6fbccd471869", name: "Quabity Assurance" },
    designation: "Quabity Assurance",
    salary: 45000,
    liked: true,
  },
  {
    _id: "5b21da33eb7f6fbccx1c1922",
    firstName: "Gabe",
    lastName: "Lewis",
    department: { _id: "5b21ca3eeb7f6fbccd471811", name: "MISC" },
    designation: "Coordinating Director",
    salary: 60000,
    liked: true,
  },
  {
    _id: "5b21da33eb7f6fbccl1c1922",
    firstName: "Erin(Kelly)",
    lastName: "Hannon",
    department: { _id: "5b21ca3eeb7f6fbccd471811", name: "MISC" },
    designation: "Receptionist",
    salary: 30000,
    liked: true,
  },
];

export function getEmployees() {
  return employees;
}

// export function getEmployee(id) {
//   return employees.find((m) => m._id === id);
// }

// export function saveEmployee(employee) {
//   let employeeInDb = employees.find((e) => e._id === employee._id) || {};
//   employeeInDb.name = employee.name;
//   employeeInDb.department = genresAPI.departments.find(
//     (g) => g._id === employee.departmentId
//   );
//   employeeInDb.salary = employee.salary;

//   if (!employeeInDb._id) {
//     employeeInDb._id = Date.now().toString();
//     employees.push(employeeInDb);
//   }

//   return employeeInDb;
// }

// export function deleteEmployee(id) {
//   let movieInDb = employees.find((m) => m._id === id);
//   movies.splice(movies.indexOf(movieInDb), 1);
//   return movieInDb;
// }
