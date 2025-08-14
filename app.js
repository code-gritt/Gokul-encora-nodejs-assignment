const express = require("express");
const app = express();
const port = 3000;

// Define three JSON objects with unique IDs, names, and ages
const data = [
  { id: 1, name: "Alice Johnson", age: 25 },
  { id: 2, name: "Bob Smith", age: 30 },
  { id: 3, name: "Charlie Brown", age: 35 },
];

// API endpoint for ID 1
app.get("/1", (req, res) => {
  res.json(data[0]);
});

// API endpoint for ID 2
app.get("/2", (req, res) => {
  res.json(data[1]);
});

// API endpoint for ID 3
app.get("/3", (req, res) => {
  res.json(data[2]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
