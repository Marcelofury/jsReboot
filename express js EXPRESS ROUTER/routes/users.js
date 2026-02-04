
// initialization
const express = require('express');
const router = express.Router();

// creating routes
router.get('/', (req, res) => {
    res.json({message : 'Get all users'});
});

router.post('/', (req, res) => {
    res.json({message : 'create user'})
});

router.get('/:id', (req, res) => {
    res.json({message: `update user ${req.params.id}`});
});

