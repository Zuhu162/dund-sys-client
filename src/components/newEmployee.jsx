import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import axios from "axios";

export default function NewEmployee() {
  const [departments, setDepartments] = useState([]);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employee = {
      name: name,
      department: department,
      designation: designation,
      salary: salary,
      contactNumber: contactNumber,
    };

    try {
      const res = await axios.post("/employees", employee);
      window.location.replace("/employees/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchDepartments = async () => {
      const res = await axios.get(
        "https://dundsys.herokuapp.com/api/departments"
      );
      setDepartments(res.data);
    };
    fetchDepartments();
  }, []);

  return (
    <div>
      <Container sx={{ backgroundColor: "white" }} maxWidth="sm">
        <Box p={5}>
          <Typography variant="h5">New Employee Form</Typography>
          <TextField
            onChange={(e) => setName(e.currentTarget.value)}
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={departments.map((d) => d._id)}
            onChange={(event, value) => setDepartment(value)}
            renderInput={(params) => (
              <TextField {...params} label="Department" />
            )}
          />
          <TextField
            onChange={(e) => setDesignation(e.currentTarget.value)}
            margin="normal"
            required
            fullWidth
            id="name"
            label="Designation"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            onChange={(e) => setSalary(e.currentTarget.value)}
            margin="normal"
            required
            fullWidth
            id="salary"
            label="Salary"
            name="salary"
            autoFocus
          />
          <TextField
            onChange={(e) => setContactNumber(e.currentTarget.value)}
            margin="normal"
            required
            fullWidth
            id="contactNumber"
            label="Contact Number"
            name="contactNumber"
            autoFocus
          />
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </div>
  );
}
