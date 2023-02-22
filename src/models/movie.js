const mongoose = require("mongoose");
const movieSchema = mongoose.Schema({
    mov_id: {
        type: Number,
        IntegerOnly: true,
        required: true
    },
    mov_title: {
        type: String,
        required: true,
        maxlength: 50
    },
    mov_year: {
        type: Date,
        IntegerOnly: true,
        required: true
    },
    mov_time: {
        type: String,
        IntegerOnly: true,
        required: true
    },
    mov_lang: {
        type: String,
        required: true,
        maxlength: 50
    },
    mov_dt_rel: {
        type: Date,
        required: true
    },
    mov_red_country: {
        type: String,
        required: true,
        maxlength: 5
    }

})

module.exports = mongoose.model('Movie', movieSchema);