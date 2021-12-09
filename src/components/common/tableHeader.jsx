import React from "react";
import TableHead from "@mui/material/TableHead";

export default function TableHeader(props) {
  const raiseSort = (path) => {
    const sortColumn = { ...props.sortColumn };

    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    props.onSort(sortColumn);
  };

  return (
    <thead>
      <tr>
        {props.columns.map((column) => (
          <th key={column.path} onClick={() => raiseSort(column.path)}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
