const express = require('express');
const router = express.Router();
const path = require('path');
const isAuthenticated = require('../middlewares/isAuthenticated');
const authenticateToken = require('../middlewares/authenticateToken');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// Get connexion page
router.get('/login', (req, res) => {
  console.log('Page de connexion');
  // res.render('sign');
  res.sendFile(path.join(__dirname, '../../custom/signin.html'));
});

router.get('/s/admin', isAuthenticated, authenticateToken, (req, res) => {
  res.render('indexAdmin');
}); 


module.exports = router;