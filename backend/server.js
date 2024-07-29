// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();

const PORT = 5000;
const CONTACTS_FILE = './contacts.json';

app.use(cors());
app.use(bodyParser.json());

// Read contacts from JSON file
function readContacts() {
  try {
    const data = fs.readFileSync(CONTACTS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading contacts file:', err);
    return [];
  }
}

// Write contacts to JSON file
function writeContacts(contacts) {
  fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
}

// Get all contacts
app.get('/api/contacts', (req, res) => {
  const contacts = readContacts();
  res.json(contacts);
});

// Add a new contact
app.post('/api/contacts', (req, res) => {
  const newContact = req.body;
  const contacts = readContacts();
  contacts.push(newContact);
  writeContacts(contacts);
  res.status(201).json(newContact);
});

// Delete a contact
app.delete('/api/contacts/:index', (req, res) => {
  const index = parseInt(req.params.index, 10);
  let contacts = readContacts();
  contacts = contacts.filter((_, i) => i !== index);
  writeContacts(contacts);
  res.status(204).end();
});

// Update a contact
app.put('/api/contacts/:index', (req, res) => {
  const index = parseInt(req.params.index, 10);
  const updatedContact = req.body;
  let contacts = readContacts();
  contacts[index] = updatedContact;
  writeContacts(contacts);
  res.json(updatedContact);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
