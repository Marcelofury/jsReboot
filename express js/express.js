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