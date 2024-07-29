# Contact Lister App

This is a simple Contact Management application built with React for the frontend and Express.js for the backend. It allows users to add, view, update, and delete contacts.

## Project Structure

In the project directory, you can run:

```bash
/contact-app
  ├── /backend
  │   ├── server.js
  │   ├── /controllers
  │   │   ├── contactController.js
  │   ├── /routes
  │   │   ├── contactRoutes.js
  │   └── /models
  │       ├── contactModel.js
  ├── /frontend
  │   ├── /public
  │   │   └── index.html
  │   ├── /src
  │   │   ├── /components
  │   │   │   ├── Contact.js
  │   │   │   ├── CreateContact.js
  │   │   │   ├── util.js
  │   │   ├── App.js
  │   │   ├── index.css
  │   │   ├── index.js
  ├── /node_modules
  ├── package.json
  ├── README.md

```

## Features
- Add Contact: Add new contact details including name, phone number, and location.
- View Contacts: View a list of all contacts.
- Edit Contact: Edit existing contact details.
- Delete Contact: Remove a contact from the list.
- Phone number validation to ensure the correct format.

## Installation
### Prerequisites
- Node.js and npm installed
- MySQL database setup

## Technologies Used

### Frontend
- React: A JavaScript library for building user interfaces.
- Material-UI (MUI): A React component library for styling and UI components.

### Backend

- Express.js: A web application framework for Node.js.
- body-parser: Middleware to parse incoming request bodies.
- fs: Node.js File System module for file handling.

## Frontend Setup

1. Navigate to the frontend directory:

```bash
cd contact-app

```

2. Install dependencies:

```bash
npm install

```
3. Start the React development server:

```bash
npm start

```

## Backend Setup
1. Navigate to the frontend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install

```
3. Start the Node.js server:

```bash
node server.js

```

## Usage
1. Add a Contact: Fill in the contact details (Name, Phone Number, Location) in the form and click the Add button.

2. Edit a Contact: Click the Edit icon next to the contact you wish to edit, make the necessary changes, and save.

3. Delete a Contact: Click the Delete button next to the contact you wish to remove.

## API Endpoints
- POST /api/contacts : Add a new contact.
- PUT /api/contacts/ : Update an existing contact.
- DELETE /api/contacts/ : Delete a contact.

## Future Enhancements
Implement user authentication for secure access.
Use a more robust database (e.g., MySQL, MongoDB) for storing contact data.
Enhance the UI with more interactive features.
