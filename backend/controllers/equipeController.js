const { where } = require('sequelize');
const Equipe = require('../models/equipe');

exports.addToTeam = async (req, res) => {
    try {
        const { first_name,last_name,image } = req.body;
        const newMember = await Equipe.create({first_name,last_name,image});
        return res.json({ success: true, message: 'Membre ajouté'});
    } catch (err) {
        console.log('Une erreur d\'est produite : ', err);
        return res.json({ success: false, message: 'Erreur serveur, réesayer plus tard !! '});
    }
}

exports.updateMember = async (req, res) => {
    try {
        const { equipe_id,first_name,last_name,image } = req.body;
        const memberExist = await Equipe.findByPk(equipe_id);
        if (!memberExist) return res.json({ success: false, message: 'Membre introuvable'});
        await Equipe.update({first_name,last_name,image}, {where: {equipe_id:equipe_id}});
        return res.json({ success: true, message: false });
    } catch(err) {
        console.log('Une erreur d\'est produite : ', err);
        return res.json({ success: false, message: 'Erreur serveur, réesayer plus tard !! '});
    }
}

exports.deleteMember = async (req, res) => {
    try {
        const { equipe_id } = req.body;
        const memberExist = await Equipe.findByPk(equipe_id);
        if(!memberExist) return res.json({ success: false, message: 'Membre introuvable'});
        await Equipe.destroy({where: { equipe_id: equipe_id}});
        return res.json({ success: true, message: 'Suppression réussie !! '});
    } catch (err) {
        console.log('Une erreur d\'est produite : ', err);
        return res.json({ success: false, message: 'Erreur serveur, réesayer plus tard !! '});
    }
}