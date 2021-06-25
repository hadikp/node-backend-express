var express = require('express');
var router = express.Router();
var app = express();
var config = require('config');
var mongoose = require('mongoose');
var billModel = require('../model/bill.model');

//database connection
mongoose.connect('mongodb://localhost:27017/na', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('A MongoDB adatbázishoz sikeresen csatlakoztál!'))
  .catch(err => {
    console.log(err);
    process.exit();
  });

  //MongoDb test
  var Cat = mongoose.model('Cat', {name: String});
  var kitty = new Cat({name: 'Miska'});
  kitty.save(function (err) {
    if (err) {
      console.log(err);
        }
    console.log('Miska létrehozva');
  });
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dashboard' });
});

router.get('/ingredients', function(req, res, next) {
  //kell ide model
  res.render('ingredients', { title: 'Étel összetevők listája' });
});

router.get('/form', function(req, res, next) {
  //kell ide model
  res.render('form', { title: 'Form' });
});

router.get('/bill', function(req, res) {
  billModel.find({'shopper': 'Hadik'},  function (err, bill) {
    if (err) return console.error (err);
    console.log(bill.shopper);
  });
});

module.exports = router;
