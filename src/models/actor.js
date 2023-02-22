const mongoose = require("mongoose");
const actorSchema = mongoose.Schema({
    act_id: {
        type: Number,
        IntegerOnly: true,
        required: true
    },
    act_fname: {
        type: String,
        required: true,
        maxlenght: 20
    },
    act_lname: {
        type: String,
        required: true,
        maxlenght: 20
    },
    act_gender: {
        type: String,
        required: true,
        maxlenght: 20
    }
})

module.exports = mongoose.model('Actor', actorSchema);