import React, { useState, useEffect } from "react";
import Pagination, { paginate } from "./common/pagination";
import EmployeesTable from "./employeesTable";
import Sidebar from "./sidebar";
import _ from "lodash";
import axios from "axios";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [selectedDep, setSelectedDep] = useState();
  const [pageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({
    path: "name",
    order: "asc",
  });

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await axios.get("/employees");
      setEmployees(res.data);
    };
    fetchEmployees();
  }, []);

  let count = employees.length;

  const handleDelete = (employee) => {
    let filteredEmployees = employees.filter((e) => e._id !== employee._id);
    setEmployees(filteredEmployees);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDepartmentSelect = (d) => {
    setSelectedDep(d);
    console.log(d);
  };

  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };

  const filtered = selectedDep
    ? employees.filter((e) => e.department._id === selectedDep)
    : employees;

  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  let paginated = paginate(sorted, currentPage, pageSize);

  return (
    <div className="row">
      <div className="col-3">
        <Sidebar onDepartmentSelect={handleDepartmentSelect}></Sidebar>
      </div>
      <div className="col">
        <p>There are {count} employees in the Database</p>
        <EmployeesTable
          onSort={handleSort}
          paginated={paginated}
          sortColumn={sortColumn}
          onDelete={handleDelete}
        ></EmployeesTable>
        <Pagination
          currentPage={currentPage}
          totalItems={filtered.length}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        ></Pagination>
      </div>
    </div>
  );
}
