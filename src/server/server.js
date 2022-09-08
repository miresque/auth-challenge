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

// Import Prisma Request Error helper
const { PrismaClientKnownRequestError } = require('@prisma/client/runtime'); 


const userRouter = require('./routers/user');
app.use('/user', userRouter);

const movieRouter = require('./routers/movie');

app.use('/movie', movieRouter);

app.use((err, req, res, next) => {
    if (err instanceof PrismaClientKnownRequestError) {
        console.log(err.code)
        if(err.code === 'P2025') {
            return res.status(400).json({ error: "User does not exist." })
        }
        if(err.code === 'P2002') {
            return res.status(400).json({ error: "A User with this name already exists." })
        }
    }
})

module.exports = app