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
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import axios from "axios";

export default function NewEmployee() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    let user = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post(
        "https://dundsys.herokuapp.com/api/auth/login",
        user
      );

      localStorage.setItem("token", res.data);
      window.location.replace("/");
    } catch (err) {
      setError(true);
    }

    e.preventDefault();
  };

  return (
    <div>
      <Container sx={{ backgroundColor: "white" }} maxWidth="sm">
        <Box p={5}>
          <Typography variant="h5">Welcome Back!</Typography>
          <TextField
            onChange={(e) => setEmail(e.currentTarget.value)}
            margin="normal"
            required
            fullWidth
            id="name"
            label="email"
            name="email"
            autoFocus
          />

          <TextField
            onChange={(e) => setPassword(e.currentTarget.value)}
            margin="normal"
            required
            fullWidth
            type="password"
            id="password"
            label="password"
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
          {error ? (
            <Alert severity="error">Invalid email or password</Alert>
          ) : null}
        </Box>
      </Container>
    </div>
  );
}
