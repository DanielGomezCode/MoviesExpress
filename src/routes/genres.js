const express = require("express");
const genresSchema = require("../models/genres")

const router = express.Router();

// create genres
router.post('/genres', (req, res) => {
   const genres = genresSchema(req.body);
   genres
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error }))
});

// Get all genres
router.get('/genres', (req, res) => {
    genresSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

// Get a genres
router.get('/genres/:id', (req, res) => {
    const { id } = req.params;
    genresSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });
 
// Update a genres
router.put('/genres/:id', (req, res) => {
    const { id } = req.params;
    const { gen_id, gen_title } = req.body;
    genresSchema
    .updateOne({ _id: id }, { $set: {gen_id, gen_title} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

// Delete a genres
router.delete('/genres/:id', (req, res) => {
    const { id } = req.params;
    genresSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

module.exports = router;