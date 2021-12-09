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

export default function NewClient() {
  const [salesman, setSalesman] = useState([]);
  const [name, setName] = useState("");
  const [salesRep, setSalesRep] = useState("");
  const [productAmount, setProductAmount] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const client = {
      name: name,
      contactNumber: contactNumber,
      salesRep: salesRep,
      productAmount: productAmount,
    };

    try {
      const res = await axios.post("/clients", client);
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const temp = [];

  useEffect(() => {
    const fetchSalesRep = async () => {
      const res = await axios.get("/employees");
      for (let i = 0; i < res.data.length - 1; i++) {
        if (res.data[i].department._id === "61aa178dc3738c012a4248a6") {
          temp.push(res.data[i]);
        }
      }
      setSalesman(temp);
    };
    fetchSalesRep();
  }, []);

  return (
    <div>
      <Container sx={{ backgroundColor: "white" }} maxWidth="sm">
        <Box p={5}>
          <Typography variant="h5">New Client Form</Typography>
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
            options={salesman.map((d) => d._id)}
            onChange={(event, value) => setSalesRep(value)}
            renderInput={(params) => (
              <TextField {...params} label="SalesRep ID" />
            )}
          />
          <TextField
            onChange={(e) => setProductAmount(e.currentTarget.value)}
            margin="normal"
            required
            fullWidth
            id="name"
            label="ProductAmount"
            name="name"
            autoComplete="name"
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
