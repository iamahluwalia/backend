const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required : true
    },
    otp: {
        type: String,
        required : false
    }
})

mongoose.model('Owner', userSchema);