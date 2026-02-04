const router = require("../routes/users");

const auth = (req, res, next) => {
    console.log('Auth check');
    next();
}; 

router.post('/', auth, controller.createUser);


// middleware can protect routes 