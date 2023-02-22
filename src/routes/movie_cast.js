const express = require("express");
const MovieCastSchema = require("../models/movie_cast")

const router = express.Router();

// create moviecast
router.post('/moviecast', (req, res) => {
   const moviecast = MovieCastSchema(req.body);
   moviecast
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error }))
});

// Get all moviecast
router.get('/moviecast', (req, res) => {
    MovieCastSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

// Get a moviecast
router.get('/moviecast/:id', (req, res) => {
    const { id } = req.params;
    MovieCastSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });
 
// Update a moviecast
router.put('/moviecast/:id', (req, res) => {
    const { id } = req.params;
    const { act_id, mov_id, role} = req.body;
    MovieCastSchema
    .updateOne({ _id: id }, { $set: {act_id, mov_id, role} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

// Delete a moviecast
router.delete('/moviecast/:id', (req, res) => {
    const { id } = req.params;
    MovieCastSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

module.exports = router;