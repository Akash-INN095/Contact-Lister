import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Fab, Button, TextField } from "@mui/material";
import { validatePhoneNumber } from "./util";

export default function Contact(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState({
    name: props.name,
    number: props.number,
    location: props.location,
  });

  const [error, setError] = useState("");

  function handleDelete() {
    props.onDelete(props.index);
  }

  function handleUpdate() {
    setIsEditing(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "number") {
      if (validatePhoneNumber(value)) {
        setEditedContact((prevContact) => ({
          ...prevContact,
          [name]: value
        }));
        setError("");
      } else {
        setError("Please enter a valid 10-digit phone number.");
      }
    } else {
      setEditedContact((prevContact) => ({
        ...prevContact,
        [name]: value
      }));
    }
  }

  function handleSave() {
    if (editedContact.number.length !== 10) {
      setError("Phone number must be exactly 10 digits.");
    } else {
      props.onUpdate(props.index, editedContact);
      setIsEditing(false);
    }
  }

  function handleCancel() {
    setIsEditing(false);
    setEditedContact({
      name: props.name,
      number: props.number,
      location: props.location,
    });
    setError("");
  }

  return (
    <div className="contact">
      {isEditing ? (
        <div>
          <TextField
            name="name"
            label="Name"
            value={editedContact.name}
            onChange={handleChange}
          />
          <TextField
            name="number"
            label="Number"
            value={editedContact.number}
            onChange={handleChange}
            inputProps={{ maxLength: 10, inputMode: 'numeric' }}
            error={!!error}
            helperText={error}
          />
          <TextField
            name="location"
            label="Location"
            value={editedContact.location}
            onChange={handleChange}
          />
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </div>
      ) : (
        <div>
          <h1>{props.name}</h1>
          <p>{props.number}</p>
          <p>{props.location}</p>
          <Fab onClick={handleUpdate} className="updateButton" size="small" color="primary">
            <EditIcon />
          </Fab>
          <Button onClick={handleDelete} aria-label="delete" className="deleteButton" size="small" color="error">
            <DeleteIcon />
          </Button>
        </div>
      )}
    </div>
  );
}
