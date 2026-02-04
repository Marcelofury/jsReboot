// import the express module
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Define a route for GET requests
app.get('users', (req,res)=>{
    res.json({message : 'returning list of users'});
});
