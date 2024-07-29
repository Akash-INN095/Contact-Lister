// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CreateContacts from './components/CreateContacts';
import Contact from './components/Contact';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contacts")
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error("Error fetching contacts:", error));
  }, []);

  function addContact(newContact) {
    setContacts(prevContacts => [...prevContacts, newContact]);
  }

  function deleteContact(index) {
    fetch(`http://localhost:5000/api/contacts/${index}`, { method: "DELETE" })
      .then(() => {
        setContacts(prevContacts => prevContacts.filter((_, i) => i !== index));
      })
      .catch(error => console.error("Error deleting contact:", error));
  }

  function updateContact(index, updatedContact) {
    fetch(`http://localhost:5000/api/contacts/${index}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedContact)
    })
    .then(response => response.json())
    .then(() => {
      setContacts(prevContacts =>
        prevContacts.map((contact, i) =>
          i === index ? updatedContact : contact
        )
      );
    })
    .catch(error => console.error("Error updating contact:", error));
  }

  return (
    <div className="App container">
      <Header />
      <CreateContacts onAdd={addContact} />
      {contacts.map((contactItem, index) => (
        <Contact 
          key={index}
          index={index}
          name={contactItem.name}
          number={contactItem.number}
          location={contactItem.location}
          onDelete={deleteContact}
          onUpdate={updateContact}
        />
      ))}
    </div>
  );
}

export default App;
