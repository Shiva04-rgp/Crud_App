const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String
    },
    role: {
        type: String
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;