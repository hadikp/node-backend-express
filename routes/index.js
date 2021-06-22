var express = require('express');
var router = express.Router();
var app = express();
var config = require('config');
var mongoose = require('mongoose');
const billModel = require('../model/bil.model');

//database connection
if (!config.has('database')) {
  console.error('Nem találom az adatbázist a config fileban!');
  process.exit();
}
var {username, password, host} = config.get('database');
mongoose
  .connect(`mongodb+srv://${username}:${password}@${host}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('A MongoDB adatbázishoz sikeresen csatlakoztál!'))
  .catch(err => {
    console.log(err);
    process.exit();
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

router.get('/bill', function(req, res, next) {
  billModel.find( {}, (err, bills) => {
    res.render('index', { title: 'Számlák', bills: bills});
  });
});

module.exports = router;
