const mongoose = require("mongoose");
const MovieCastSchema = mongoose.Schema({
    act_id: {
        type: Number,
        IntegerOnly: true,
        required: true,
    },
    mov_id: {
        type: Number,
        IntegerOnly: true,
        required: true,
    },
    role: {
        type: String,
        required: true,
        maxlength: 30
    }
})

module.exports = mongoose.model('MovieCast', MovieCastSchema);