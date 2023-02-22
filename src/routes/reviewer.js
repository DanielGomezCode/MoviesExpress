const express = require("express");
const reviewerSchema = require("../models/reviewer")

const router = express.Router();

// create reviewer
router.post('/reviewer', (req, res) => {
   const reviewer = reviewerSchema(req.body);
   reviewer
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error }))
});

// Get all reviewer
router.get('/reviewer', (req, res) => {
    reviewerSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

// Get a reviewer
router.get('/reviewer/:id', (req, res) => {
    const { id } = req.params;
    reviewerSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });
 
// Update a reviewer
router.put('/reviewer/:id', (req, res) => {
    const { id } = req.params;
    const { rev_id, rev_name } = req.body;
    reviewerSchema
    .updateOne({ _id: id }, { $set: {rev_id, rev_name} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

// Delete a reviewer
router.delete('/reviewer/:id', (req, res) => {
    const { id } = req.params;
    reviewerSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

module.exports = router;