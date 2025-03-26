const User = require('../models/Users');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
    try {
        let { fist_name,last_name,email,password_user } = req.body;
        const emailExist = await User.findOne({where: {email}});
        if (emailExist) return res.json({ success: false, message: 'Cet email existe déjà !!'});
        const saltRounds = 10;
        const password = await bcrypt.hash(password_user, saltRounds);
        const newUser = await User.create({fist_name,last_name,email,password});

        req.session.user = {
            user_id: newUser.user_id,
            fist_name: newUser.fist_name,
            last_name: newUser.last_name,
            email: newUser.email
        }
        const name = newUser.first_name;
        console.log('Name : ', name);
        return res.json({ success: true, message: 'Nouvel utilisateur ajouter avec succès'});
    } catch (err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}

exports.getUser = async (req, res) => {
    try {  
        const { email, password } = req.body;
        const userExist = await User.findOne({ where: {email, password}});
        if (!userExist) return res.json({ success: false, message: 'Email ou mot de passe incorrect'});
        req.session.user = {
            user_id: userExist.user_id,
            fist_name: userExist.fist_name,
            last_name: userExist.last_name,
            email: userExist.email
        }
        return res.json({ success: true, message: 'Connexion réussie'});
    } catch(err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}

exports.resetPassword = async (req, res) => {
    
}