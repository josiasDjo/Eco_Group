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
        const name = newUser.fist_name;
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
        const userExist = await User.findOne({ where: {email}});
        if (!userExist) {
            console.log('Email incorrect')
            return res.json({ success: false, message: 'Email incorrect'});
        }
        let password_hash = userExist.password;
        const verify_password = await bcrypt.compare(password,password_hash);
        if(verify_password != true) return res.json({ success:false, message: 'Mot de passe incorrect'});

        req.session.user = {
            user_id: userExist.user_id,
            fist_name: userExist.fist_name,
            last_name: userExist.last_name,
            email: userExist.email
        }
        // console.log(userExist);
        return res.json({ success:true, message: 'Connexion réussie'});
    } catch(err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { user_id, fist_name,last_name,email } = req.body;
        const userExist = await User.findByPk(user_id);
        if (!userExist) return res.json({ success: false, message: 'Une erreur s\'est produite'});
        await User.update({fist_name,last_name,email}, {where:{user_id:user_id}});
        return res.json({ success: true, message: 'Mise à jour réussie'});
    } catch(err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}

exports.resetPassword = async (req, res) => {
    try {
        const { email, password } = req.body;
        const EmailExist = await User.findOne({ where: {email}});
        if(!EmailExist) return res.json({ success: false, message: 'Email incorrect'});
        const user_id = EmailExist.user_id;
        await User.update({password}, {where: {user_id}});
        return res.json({ success: true, message: 'Mise à jour du mot de passe réussie'});
    } catch (err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}

exports.deleteAccount = async (req, res) => {
    try {
        const { user_id, email } = req.body;
        const userExist = await User.findOne({where: {user_id, email}});
        if(!userExist) return res.json({ success: false, message: 'Une erreur s\'est produite, Veillez réessayer plus tard'});
        await User.destroy({where: {user_id: user_id}});
    } catch(err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}