const express = require('express');
const bodyParser = require('body-parser');
const { PORT, JWT_KEY } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
// const jwt = require()
const app = express();

const UserService = require('./services/user-service');

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api',apiRoutes);
    app.listen(PORT, () => {
        console.log(`Server Started on Port : ${PORT}`);

        const service = new UserService();
        // const newToken = service.createToken({email : 'Manish@gmail.com', id : 1});
        // console.log(newToken )
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik1hbmlzaEBnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNjc1NjA0OTI4LCJleHAiOjE2NzU2MDg1Mjh9.mdZ_vUPgJr1GpqjasyFCzHUv3Pk9VPum83-M1KmkYpA';
        const response = service.verifyToken(token,JWT_KEY);
        console.log(response);
    });
}

prepareAndStartServer();
     