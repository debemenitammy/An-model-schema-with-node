const mongoose = require('mongoose');

const PeopleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    complexion: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    race: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('People', PeopleSchema);