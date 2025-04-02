const Service = require('../models/services');

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
        const { service_id,title, description, image } = req.body;
        const serviceExist = await Service.findByPk(service_id);
        if(!serviceExist) return res.json({ success: false, message: 'Service introuvable'});
        await Service.update({title, description, image}, {where: {service_id}});
        return res.json({ success: true, message: 'Modification réussie'});
    } catch (err) {
        console.log('Une erreur s\'est produite');
        return res.json({ success: false, message: 'Une erreur s\est produite'});
    }
}

exports.deleteService = async (req, res) => {
    try {
        const service_id = req.body.service_id;
        const serviceExist = await Service.findByPk(service_id);
        if(!serviceExist) return res.json({ success: false, message: 'Service introuvable'});
        await Service.destroy({where: {service_id}});
        return res.json({ success: true, message: 'Service supprimé'});
    } catch(err) {
        console.log('Une erreur s\'est produite');
        return res.json({ success: false, message: 'Une erreur s\est produite'});
    }
}