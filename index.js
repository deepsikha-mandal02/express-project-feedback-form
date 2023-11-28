
// const express = require("express");
// const app= express();
// const port = 3000;

// app.get("/",(req,res) =>{
//     res.send("Hello world!");
// })
// app.listen(port, ()=>{
//     console.log(`Server running on port ${port}.`)
// })

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set up middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));

// Serve HTML form for GET requests
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/file.html');
});

// Handle form submission for POST requests
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const registrationNo = req.body.registrationNo;
  const email = req.body.email;
  const cgpa = req.body.cgpa;
  const feedback = req.body.feedback;

  // You can do something with the received data, for example, log it
  console.log(`Feedback received from ${name} (Registration No: ${registrationNo}, Email: ${email}, CGPA: ${cgpa}): ${feedback}`);

  // Send a response back to the user
  res.send(`Feedback received from ${name}. Thank you for your feedback!`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
