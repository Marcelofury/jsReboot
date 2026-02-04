exports.getUsers = (req, res) => {
    res.json({message: 'All users'});
};

exports.createUser = (req, res) => {
    res.status(201).json({message: 'User created'});
};