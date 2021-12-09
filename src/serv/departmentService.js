import axios from "axios";

let departments = [];

const getDepartments2 = async () => {
  const res = axios.get("/api/departments");
  departments = res.data;
  console.log(departments);
};

export default getDepartments2;
