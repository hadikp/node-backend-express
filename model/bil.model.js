var mongoose = require('mongoose');

var BillSchema = mongoose.Schema({
    billName: String,
    shopper: String,
    count: Number
},
{
    timeStamps: true
});

module.exports = mongoose.model('bill', BillSchema);