// import the express module
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Define a route for GET requests
app.get('/users', (req,res)=>{
    res.json({message : 'returning list of users'});
});

//Define a route for POST requests
app.post('/users',(req, res) => {
    const newUser = req.body;
    res.json({message: 'User Created', user: newUser});
});

// define a route for PUT requests
app.put('/users/:id', (req, res) => {
      const UserId = req.params.id;
      const updatedUser = req.body;
      res.json({message: `User with ID ${UserId} updated`, updatedUser});
});

// Define a route for DELETE requests
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({message: `User with ID ${userId} deleted`});
});

// Start the server 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// ERROR HANDLING (IMPORTANT)

app.get('/error', (req, res) => {
    res.status(500).json({error : 'something went wrong'})
});

// GLOBAL ERROR HANDLER