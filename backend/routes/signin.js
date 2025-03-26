const express = require('express');
const router = express.Router();

// Get connexion page
router.get('/login', (req, res) => {
    console.log('Page de connexion');
    res.render('index');
    // return res.sendFile("../../custom/signin.html");
});

module.exports = router;