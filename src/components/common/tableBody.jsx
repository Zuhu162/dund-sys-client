import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

export default function TableBody(props) {
  const { data, columns } = props;

  const renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id} className="tableRow">
          {columns.map((column) => (
            <td key={column.path || column.key}>{renderCell(item, column)}</td>
          ))}
          <td></td>
        </tr>
      ))}
    </tbody>
  );
}
