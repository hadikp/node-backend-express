var mongoose = require('mongoose');

var BillSchema = new mongoose.Schema({
    billName: String,
    shopper: String,
    count: Number
});

module.exports = mongoose.model('bill', BillSchema);