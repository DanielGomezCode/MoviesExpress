const express = require("express");
const ejemploSchema = require("../models/ejemplo")

const router = express.Router();

// crear ejemplo
router.post('/ejemplo', (req, res) => {
   const ejemplo = ejemploSchema(req.body);
   ejemplo
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error }))
});

module.exports = router;


router.get('/ejemplo', (req, res) => {
    ejemploSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });

 // Update a ejemplo
router.put('/ejemplo/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, edad } = req.body;
    ejemploSchema
    .updateOne({ _id: id }, { $set: {nombre, edad} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 });