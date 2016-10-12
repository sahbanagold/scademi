var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/admin', function(req, res, next) {
  res.render('admin');
});
router.get('/user', function(req, res, next) {
  res.render('user');
});
router.get('/profileuser', function(req, res, next) {
  res.render('profileuser');
});
router.get('/exam', function(req, res, next) {
  res.render('exam', { title: 'Express' });
});
router.get('/score', function(req, res, next) {
  res.render('score', { title: 'Express' });
});

router.get('/scoreboard', function(req, res, next) {
  res.render('scoreboard', { title: 'Express' });
});
router.get('/questionadmin', function(req, res, next) {
  res.render('questionadmin', { title: 'Express' });
});

module.exports = router;
