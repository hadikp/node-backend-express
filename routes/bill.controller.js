var express = require('express');
var Bill = require('../model/bil.model');

var billController = express.Router();

billController.get('/', async (req, res) => {
    var bills = await Bill.find();
    res.json(bills);
});

module.exports = billController;