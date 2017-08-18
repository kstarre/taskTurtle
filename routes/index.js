var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');
var authController = require('../controllers/authController');
// var passport = require('../config/passport/passport');
var passport = require('passport');

/* GET home page. */
router.get('/', indexController.index);
router.get('/signup', authController.signup);
router.get('/signin', authController.signin);
router.post('/signin', passport.authenticate('local-signin', {
  // successRedirect: '/',
  failureRedirect: 'signin',
  failureFlash: true
}), (req, res) => {
  // console.log(req.user);
  res.render('index', {user: req.user});
});
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/signup',
  failureFlash: true
}));

router.get('/signout', authController.logout);


module.exports = router;