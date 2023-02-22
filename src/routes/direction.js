const express = require("express");
const directionSchema = require("../models/direction")

const router = express.Router();

// create direction
router.post('/direction', (req, res) => {
   const direction = directionSchema(req.body);
   direction
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error }))
});

// Get all direction
router.get('/direction', (req, res) => {
    directionSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

// Get a direction
router.get('/direction/:id', (req, res) => {
    const { id } = req.params;
    directionSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });
 
// Update a direction
router.put('/direction/:id', (req, res) => {
    const { id } = req.params;
    const { dir_id, mov_id } = req.body;
    directionSchema
    .updateOne({ _id: id }, { $set: {dir_id, mov_id} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

// Delete a direction
router.delete('/direction/:id', (req, res) => {
    const { id } = req.params;
    directionSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

module.exports = router;