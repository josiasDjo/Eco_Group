const User = require('../models/Users');

exports.createUser = async (req, res) => {
    try {

    } catch (err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}