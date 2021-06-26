var express = require('express');
var router = express.Router();
var app = express();
var config = require('config');
var mongoose = require('mongoose');
var billModel = require('../model/bill.model');
var characterModel = require('../model/character.model');
const { findByIdAndUpdate } = require('../model/bill.model');

//database connection
mongoose.connect('mongodb://localhost:27017/na', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('A MongoDB adatbázishoz a localhoston sikeresen csatlakoztál!'))
  .catch(err => {
    console.log(err);
    process.exit();
  });
//Másik példa: characterek létrehozása, felülírása, törlése
  /* const Character = mongoose.model('Character', mongoose.Schema({
    name: String,
    age: Number,
    rank: String
  })); */
  
   /* Character.create([
    { name: 'Jean-Luc Picard', age: 59, rank: 'Captain' },
    { name: 'William Riker', age: 29, rank: 'Commander' },
    { name: 'Deanna Troi', age: 28, rank: 'Lieutenant Commander' },
    { name: 'Geordi La Forge', age: 29, rank: 'Lieutenant' },
    { name: 'Worf', age: 24, rank: 'Lieutenant' }
  ]); */

//Character update
  /* Character.updateOne({age: {$gt:58}}, {name: 'Senior Picard'}, (err) => {
    if (err) return console.log(err);
    console.log('Felülírva!');
  }); */

//Character delete
  /* Character.remove({age: {$eq:59}}, (err, resp) => {
    if (err) return console.log('Hiba: ', err);
    console.log('Character törölve!');
  }); */

  /* Character.find({ rank: 'Lieutenant' }, (err, char) => {
    if (err) return console.log(err);
    console.log(char[0].age);
  }); */



  //MongoDb Cat documentumok keresése a localhost adatbázisban
  /* const Cat = mongoose.model('Cat', mongoose.Schema({name: String, food: String, count: Number}));
  Cat.find({name: 'Feri'}, (err, cats) => {
    if (err) return console.log(err);
    console.log(cats[0].food);
  }); */

  //MongoDb Cat documentumok létrehozása a localhost adatbázisban
  /* var cat = new Cat({name: 'Geri', food: 'macska kaja', count:7 }); //new Cat(data)
  cat.save(function (err) {
    if (err) return console.log(err);
    console.log('Macska létrehozva');
  }); */

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

router.get('/form-design', function(req, res, next) {
  //kell ide model
  res.render('form-design', { title: 'Form Design' });
});

router.get('/bill', function(req, res) {
  billModel.find({'shopper': 'Cirmi'},  function (err, bills) {
    if (err) return console.error (err);
    //console.log(bills[0].billName);
    res.render('index', { title: 'Számlák oldal', bills : bills });
  });
});

router.get('/character', function(req, res) {
  characterModel.find({},  function (err, chars) {
    if (err) return console.error (err);
    //console.log(char);
    res.render('form-character', { title: 'Star Trek oldal', chars : chars });
  });
});

/* POST character page. */
router.post('/character/new', function(req, res) {
  characterModel.create(req.body, function(data) {
    res.redirect('/index');
  });
});

module.exports = router;
