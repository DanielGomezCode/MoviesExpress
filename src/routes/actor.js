const express = require("express");
const actorSchema = require("../models/actor")

const router = express.Router();

// create actor
router.post('/actor', (req, res) => { 
   const actor = actorSchema(req.body);
   actor
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error }))
});

// Get all actor
router.get('/actor', (req, res) => {
    actorSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

// Get a actor
router.get('/actor/:id', (req, res) => {
    const { id } = req.params;
    actorSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });
 
// Update a actor
router.put('/actor/:id', (req, res) => {
    const { id } = req.params;
    const { act_id, act_fname, act_lname, act_gender } = req.body;
    actorSchema
    .updateOne({ _id: id }, { $set: {act_id, act_fname, act_lname, act_gender} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

// Delete a actor
router.delete('/actor/:id', (req, res) => {
    const { id } = req.params;
    actorSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

module.exports = router;