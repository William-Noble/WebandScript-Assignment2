var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Information' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'My Projects' });
});

module.exports = router;
