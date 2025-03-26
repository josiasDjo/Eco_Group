const express = require('express');
const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });

// Get connexion page
router.get('/', (req, res) => {
  console.log('Page de connexion');
  res.render('signup');
  // return res.sendFile("../../custom/signin.html");
});


module.exports = router;