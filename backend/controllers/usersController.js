const User = require('../models/Users');

exports.createUser = async (req, res) => {
    try {
        const { fist_name,last_name,email,password	} = req.body;
        const emailExist = await User.findOne({where: {email}});
        if (emailExist) return res.json({ success: false, message: 'Cet email existe déjà !!'});

        await User.create({fist_name,last_name,email,password})
    } catch (err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}