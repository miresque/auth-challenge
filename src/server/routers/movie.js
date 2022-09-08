const express = require('express');
const auth = require('../middleware/auth');
const {
    getAllMovies,
    createMovie
} = require('../controllers/movie');

const router = express.Router();

router.get('/', getAllMovies);
router.post('/', auth, createMovie);

module.exports = router;