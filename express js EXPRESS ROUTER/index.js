const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

const userRoutes = require('./routes/users'); // Importing the user routes

app.use('/users', userRoutes); // Using the user routes with /users prefix

app.listen(3000, () => {
    console.log('server running on port 3000');
});


    // resulting endpoints

   // GET /users
   // POST /users
   // GET /users/:id
   // PUT /users/:id
   // DELETE /users/:id

   // This is a clean REST architecture 