
// initialization
const express = require('express');
const app = express();

// creating routes
router.get('/', (req, res) => {
    res.json({message : 'Get all users'});
});


