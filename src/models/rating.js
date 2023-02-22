const mongoose = require("mongoose");
const ratingSchema = mongoose.Schema({
    mov_id: {
        type: Number,
        IntegerOnly: true,
        required: true
    },
    rev_id: {
        type: Number,
        IntegerOnly: true,
        required: true
    },
    rev_stars: {
        type: Number,
        IntegerOnly: true,
        required: true
    },
    num_o_ratings: {
        type: Number,
        IntegerOnly: true,
        required: true
    }
})

module.exports = mongoose.model('Rating', ratingSchema);