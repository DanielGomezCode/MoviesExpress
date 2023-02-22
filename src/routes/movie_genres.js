const express = require("express");
const movgenresSchema = require("../models/movie_genres")

const router = express.Router();

// create movgenres
router.post('/movgenres', (req, res) => {
   const movgenres = movgenresSchema(req.body);
   movgenres
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error }))
});

// Get all movgenres
router.get('/movgenres', (req, res) => {
    movgenresSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

// Get a movgenres
router.get('/movgenres/:id', (req, res) => {
    const { id } = req.params;
    movgenresSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });
 
// Update a movgenres
router.put('/movgenres/:id', (req, res) => {
    const { id } = req.params;
    const { mov_id, gen_id } = req.body;
    movgenresSchema
    .updateOne({ _id: id }, { $set: {mov_id, gen_id} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

// Delete a movgenres
router.delete('/movgenres/:id', (req, res) => {
    const { id } = req.params;
    movgenresSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

module.exports = router;