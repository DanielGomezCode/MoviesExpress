const mongoose = require("mongoose");
const ejemploSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        maxlenght: 30
    },
    edad: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Ejemplo', ejemploSchema);