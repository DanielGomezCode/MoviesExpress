const mongoose = require("mongoose");
const directorSchema = mongoose.Schema({
    dir_id: {
        type: Number,
        IntegerOnly: true,
        required: true
    },
    dir_fname: {
        type: String,
        required: true,
        maxlenght: 30
    },
    dir_lname: {
        type: String,
        required: true,
        maxlenght: 30
    }
})

module.exports = mongoose.model('Director', directorSchema);