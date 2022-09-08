const jwtSecret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
const prisma = require('../utils/prisma')

const auth = async (req, res, next) =>{
    const [_, token] = req.get('authorization').split(' ');

    const decodedToken = jwt.verify(token, jwtSecret);

    const user = await prisma.user.findFirst({
        where: {
            username: decodedToken.username
        }
    })
    req.user = user
    
    next()
}

module.exports = auth