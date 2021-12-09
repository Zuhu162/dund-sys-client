import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import axios from "axios";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function BasicTable() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const res = await axios.get(
        "https://dundermiff-sys.herokuapp.com/api/clients"
      );
      setClients(res.data);
    };
    fetchClients();
  });

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Monthly Order($)</TableCell>
              <TableCell align="right">Contact Number</TableCell>
              <TableCell align="right">Sales Rep</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((c) => (
              <TableRow
                key={c._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {c.name}
                </TableCell>
                <TableCell align="right">{c.productAmount}</TableCell>
                <TableCell align="right">{c.contactNumber}</TableCell>
                <TableCell align="right">{c.salesRep.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/new-client">
        <Box mt={2}>
          <Button variant="contained">+</Button>
        </Box>
      </Link>
    </Box>
  );
}
