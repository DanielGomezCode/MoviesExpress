const express = require("express");
const directorSchema = require("../models/director");
const director = require("../models/director");

const router = express.Router();

// create director
router.post('/director', (req, res) => { 
   const director = directorSchema(req.body);
   director.save()
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error }))
});

// Get all director
router.get('/director', (req, res) => {
    director
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

// Get a director
router.get('/director/:id', (req, res) => { 
    const { id } = req.params;
    director
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });
 
// Update a director
router.put('/director/:id', (req, res) => {
    const { id } = req.params;
    const { dir_id, dir_fname, dir_lname } = req.body;
    directorSchema
    .updateOne({ _id: id }, { $set: {dir_id, dir_fname, dir_lname} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

// Delete a director
router.delete('/director/:id', (req, res) => {
    const { id } = req.params;
    directorSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

module.exports = router;