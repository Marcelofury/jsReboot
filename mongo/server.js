    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    const dotenv = require('dotenv');
    const bcrypt = require('bcrypt');
    const http = require('http');
    const fs = require('fs');
    dotenv.config();

    const app = express();
    app.use(express.json())
    app.use(cors())

    const server = http.createServer(app);

    let allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];

    function options(req, res){
        let tmp;
        let origin = req.headers('origin');

        if(allowedOrigins.indexOf(origin) > -1){
                tmp = {
                    origin: true,
                    originSuccessStatus: 200,
                }
            } else{
                    tmp = {
                        origin: false,
                    }
                }
                res(null, tmp);
    }
    
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.error('MongoDB connection error:', err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

