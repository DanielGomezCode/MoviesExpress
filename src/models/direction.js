const mongoose = require("mongoose");
const directionSchema = mongoose.Schema({
    dir_id: {
        type: Number,
        IntegerOnly: true,
        required: true
    },
    mov_id: {
        type: Number,
        IntegerOnly: true,
        required: true
    }
})

module.exports = mongoose.model('Direction', directionSchema);