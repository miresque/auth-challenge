// Import express and cors
const express = require('express');
require('express-async-errors');
const cors = require('cors');

// Set up express
const app = express();
app.disable('x-powered-by');
app.use(cors());
// Tell express to use a JSON parser middleware
app.use(express.json());
// Tell express to use a URL Encoding middleware
app.use(express.urlencoded({ extended: true }));

// Import Request Error helpers
const { PrismaClientKnownRequestError } = require('@prisma/client/runtime'); 
const { JsonWebTokenError } = require('jsonwebtoken');


const userRouter = require('./routers/user');
app.use('/user', userRouter);

const movieRouter = require('./routers/movie');

app.use('/movie', movieRouter);

app.use((err, req, res, next) => {
    if (err instanceof JsonWebTokenError || err.message.includes("reading 'split'")) {
        return res.status(401).json({ error: 'Invalid token provided.' })
    }
    if (err instanceof PrismaClientKnownRequestError) {
        if(err.code === 'P2025') {
            return res.status(400).json({ error: "User does not exist." })
        }
        if(err.code === 'P2002') {
            return res.status(409).json({ error: "A User with this name already exists." })
        }
    }
    res.status(500).json({ error: 'Error handler hit!' })
})

module.exports = app