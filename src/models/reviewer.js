const mongoose = require("mongoose");
const reviewerSchema = mongoose.Schema({
    rev_id: {
        type: Number,
        IntegerOnly: true,
        required: true
    },
    rev_name: {
        type: String,
        required: true,
        maxlenght: 30
    }
})

module.exports = mongoose.model('Reviewer', reviewerSchema);