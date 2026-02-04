// import the express module
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Define a route for GET requests
app.get('users', (req,res)=>{
    res.json({message : 'returning list of users'});
});

//Define a route for POST requests
app.post('/users',(req, res) => {
    const newUser = req.body;
    res.json({message: 'User Created', user: newUser});
});
