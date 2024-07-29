// src/components/CreateContacts.js
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { validatePhoneNumber } from "./util";
import {Box} from "@mui/material";

export default function CreateContacts(props) {
  const [contact, setContact] = useState({ name: "", number: "", location: "" });
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "number") {
      if (validatePhoneNumber(value)) {
        setContact((prevContact) => ({ ...prevContact, [name]: value }));
        setError("");
      } else {
        setError("Please enter a valid 10-digit phone number.");
      }
    } else {
      setContact((prevContact) => ({ ...prevContact, [name]: value }));
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    if (contact.number.length !== 10) {
      setError("Phone number must be exactly 10 digits.");
    } else {
      fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact)
      })
      .then(response => response.json())
      .then(data => {
        props.onAdd(data);
        setContact({ name: "", number: "", location: "" });
      })
      .catch(error => console.error("Error adding contact:", error));
    }
  }

  return (
    <form className="create-contact" onSubmit={onSubmit}>
      

      <Box component="div"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          className="create-fields">
            
            <div className="create-details">
              <h1>Details...</h1>
            </div>

      <div className="create-fields">
        <TextField required name="name" label="Name" placeholder="Enter your Name..."
          onChange={handleChange} value={contact.name} />
        <TextField required name="number" label="Phone Number" placeholder="Enter your phone number..."
          onChange={handleChange} value={contact.number}
          inputProps={{ maxLength: 10, inputMode: 'numeric' }}
          error={!!error} helperText={error} />
        <TextField required name="location" label="Location" placeholder="Enter your Location..."
          onChange={handleChange} value={contact.location} />

          <div className="create-button">
            <Fab size="small" color="primary" aria-label="Add" type="submit">
              <AddIcon />
            </Fab>
          </div>
        
      </div>

      </Box>
    </form>
  );
}
