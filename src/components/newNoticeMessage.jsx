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

export default function NewNotice(props) {
  const [name, setName] = useState();
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    let post = {
      name: props.user._id,
      topic: topic,
      message: message,
    };

    try {
      const res = await axios.post(
        "https://dundermiff-sys.herokuapp.com/api/noticeBoard",
        post
      );

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
            onChange={(e) => setTopic(e.currentTarget.value)}
            margin="normal"
            required
            fullWidth
            id="topic"
            label="Topic"
            name="topic"
            autoFocus
          />

          <TextField
            onChange={(e) => setMessage(e.currentTarget.value)}
            margin="normal"
            required
            fullWidth
            type="message"
            id="message"
            label="Message"
            name="message"
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
            <Alert severity="error">
              Please make sure you have filled out all fields!
            </Alert>
          ) : null}
        </Box>
      </Container>
    </div>
  );
}
