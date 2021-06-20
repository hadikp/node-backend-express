var express = require('express');
var router = express.Router();

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
  res.render('bill_form', { title: 'Étel összetevők listája' });
});

module.exports = router;
