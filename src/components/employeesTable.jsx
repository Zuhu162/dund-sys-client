import React, { useState } from "react";
import { Link } from "react-router-dom";
import TableHeader from "./common/tableHeader";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./css/table.css";
import TableBody from "./common/tableBody";

export default function EmployeesTable(props) {
  const { onDelete, paginated, onSort, sortColumn } = props;

  const columns = [
    {
      path: "name",
      label: "Name",
      content: (e) => (
        <Link style={{ textDecoration: "none" }} to={`/employees/${e._id}`}>
          {e.name}
        </Link>
      ),
    },
    { path: "department.name", label: "Department" },
    { path: "designation", label: "Designation" },
    { path: "salary", label: "Salary" },
  ];

  return (
    <div>
      <table className="table whiteTable">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        ></TableHeader>
        <TableBody
          columns={columns}
          data={paginated}
          onDelete={onDelete}
        ></TableBody>
      </table>
      <Link to="/new-employee">
        <Box mb={1}>
          <Button variant="contained">+</Button>
        </Box>
      </Link>
    </div>
  );
}
