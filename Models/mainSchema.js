const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    owner:{
        type:String,
        required : true
    },
    tags:{
        type:Array,
    },
    branch: {
        type: String,
        required: false,
    },
    endsem: {
        type: Boolean,
        required: false,
    },
    code: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        required: false,
    },
    avgrating: {
        type: Number,
        required: false,
    },
    ratings: {
        type: Array,
        required: false,
    },
    downloads: {
        type: Number,
        required: false,
    },
    base64_file: {
        type: String,
        required: true
    },
})

mongoose.model('File', userSchema);