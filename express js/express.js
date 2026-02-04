// npm init -y
// npm install express

const express = require('express');
const app = express();


// start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});


// ROUTES
//Basic route 

app.get('/', (req, res) => {
    res.send('Home Page');
})


// Multiple routes

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req,res) => {
    res.send('Contact Page');
}); 

// routes respond to HTTP requests


// HTTP METHODS 
// GET ---- read data
// POST ---- create data
// PUT ---- update data
//DELETE ---- delete data 


// example

app.post('/users', (req,res) => {
    res.send('user created')
});
//This is  REST API thinking


// req and res objects 
//request info

app.get((req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    res.send('check console');
})

// sending JSON (Backend reality)

app.get('/api/users', (req, res) => {
    res.json([
        {id: 1, name: 'Amina'},
        {id:2 , name:'John'}
    ]);
});

//frontend consumes JSON not HTML

// MIDDLEWARE (most important Express concept)
//What is a Middleware?
// -- A function that runs before the final route

app.use((req,res) => {
    console.log('Request receieved');
    next();
})

// next() lets request continue

// Built in Middleware (MUST KNOW)
app.use(express.json());
// allows reading JSON body:
app.post('/api/users', (req, res) => {
    console.log(req.body);
    res.send('User received');
});


// ROUTE PARAMETERS
app.get('/users/:id', (req,res) => {
    res.send(`User ID: ${req.params.id}`);
});
//used for dynamic data 

//QUERY PARAMETERS
app.get('search', (req, res) => {
    res.send(req.query);
});    
// URL: /search?name=marcel&age=20    pgsql
// Query params != route params


// SIMPLE REST API EXAMPLE (REALISTIC)
const users =[];
app.post('/users', (req, res) => {
    users.push(req.body);
    res.status(201).json(users);
});
app.get('/users', (req, res) => {
    res.json(users);
});

// This is a backend logic, no database yet