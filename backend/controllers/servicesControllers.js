const Service = require('../models/objectifs');

exports.addService = async (req, res) => {
    try {
        const { title } = req.body;
    } catch (err) {
        console.log('Une erreur s\'est produite');
        return res.json({ success: false, message: 'Une erreur s\est produite'});
    }
}