const express = require("express");
const movieSchema = require("../models/movie")

const router = express.Router();

// create movie
router.post('/movie', (req, res) => {
   const movie = movieSchema(req.body);
   movie
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error }))
});

// Get all movie
router.get('/movie', (req, res) => {
    movieSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

// Get a movie
router.get('/movie/:id', (req, res) => {
    const { id } = req.params;
    movieSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });
 
// Update a movie
router.put('/movie/:id', (req, res) => {
    const { id } = req.params;
    const { mov_id, mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country } = req.body;
    movieSchema
    .updateOne({ _id: id }, { $set: {mov_id, mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

// Delete a movie
router.delete('/movie/:id', (req, res) => {
    const { id } = req.params;
    movieSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

module.exports = router;