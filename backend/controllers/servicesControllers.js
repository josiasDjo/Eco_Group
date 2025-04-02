const Service = require('../models/objectifs');

exports.addService = async (req, res) => {
    try {
        const { title, description, image } = req.body;
        await Service.create({title, description, image});
        return res.json({ success: true, message: 'Service ajouté avec succès'});
    } catch (err) {
        console.log('Une erreur s\'est produite');
        return res.json({ success: false, message: 'Une erreur s\est produite'});
    }
}

exports.getService = async (req, res) => {
    try {
        const services = await Service.findAll();
        return services;
    } catch(err) {
        console.log('Une erreur s\'est produite');
        return res.json({ success: false, message: 'Une erreur s\est produite'});
    }
}

exports.updateService = async (req, res) => {
    try {
        
    } catch (err) {
        console.log('Une erreur s\'est produite');
        return res.json({ success: false, message: 'Une erreur s\est produite'});
    }
}