const express = require("express");
const ratingSchema = require("../models/rating")

const router = express.Router();

// create rating
router.post('/rating', (req, res) => {
   const rating = ratingSchema(req.body);
   rating
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error }))
});

// Get all rating
router.get('/rating', (req, res) => {
    ratingSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

// Get a rating
router.get('/rating/:id', (req, res) => {
    const { id } = req.params;
    ratingSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });
 
// Update a rating
router.put('/rating/:id', (req, res) => {
    const { id } = req.params;
    const { mov_id, rev_id, rev_stars, num_o_ratings } = req.body;
    ratingSchema
    .updateOne({ _id: id }, { $set: {mov_id, rev_id, rev_stars, num_o_ratings} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

// Delete a rating
router.delete('/rating/:id', (req, res) => {
    const { id } = req.params;
    ratingSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

module.exports = router;