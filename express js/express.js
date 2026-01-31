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
