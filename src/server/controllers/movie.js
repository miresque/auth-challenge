const prisma = require('../utils/prisma')

const getAllMovies = async (req, res) => {
    const movies = await prisma.movie.findMany();

    res.json({ data: movies });
};

const createMovie = async (req, res) => {
    const { title, description, runtimeMins } = req.body;

    if (!title || !description || !runtimeMins) {
        return res.status(400).json({ error: "Missing fields in the request body" });
    }
    
    const createdMovie = await prisma.movie.create({
        data: {
            title,
            description,
            runtimeMins
        }
    });

    res.status(201).json({ movie: createdMovie });
};

module.exports = {
    getAllMovies,
    createMovie
};