var mongoose = require('mongoose');

var CharacterSchema = mongoose.Schema({
    name: String,
    age: Number,
    rank: String
});

module.exports = mongoose.model('character', CharacterSchema);