
const mongoose = require("mongoose");
const movgenresSchema = mongoose.Schema({
    mov_id: {
        type: Number,
        IntegerOnly: true,
        required: true
    },
    gen_id: {
        type: Number,
        IntegerOnly: true,
        required: true
    }
})

module.exports = mongoose.model('Movgenres', movgenresSchema);