
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
    res.json({message: `Get user ${req.params.id}`});
});

router.put('/:id', (req, res) => {
    res.json({message: ` Update user ${req.params.id}`});
});

router.delete('/:id', (req, res) => {
    res.json({message: ` Delete user ${req.params.id}`});
});

module.exports = router;


// router works like app, but scoped

