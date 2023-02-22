const mongoose = require("mongoose");
const genresSchema = mongoose.Schema({
    gen_id: {
        type: Number,
        IntegerOnly: true,
        required: true
    },
    gen_title: {
        type: String,
        required: true,
        maxlenght: 20
    }
})

module.exports = mongoose.model('Genres', genresSchema);