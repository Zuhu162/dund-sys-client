export const departments = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Management" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Sales" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Accounting" },
  { _id: "5b21ca3eeb7f6fbccd471821", name: "HR" },
  { _id: "5b21ca3eeb7f6fbccd471810", name: "Customer Service" },
  { _id: "5b21ca3eeb7f6fbccd471869", name: "Quality Assuarance" },
  { _id: "5b21ca3eeb7f6fbccd471876", name: "Warehouse" },
  { _id: "5b21ca3eeb7f6fbccd471811", name: "MISC" },
];

export function getDepartments() {
  return departments.filter((g) => g);
}
