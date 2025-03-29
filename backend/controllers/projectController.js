const Project = require('../models/projects');

exports.addProjects = async (req, res) => {
    try { 
        const { title,description,start_date,end_date, image } = req.body;
    } catch {
        console.log('Une erreur d\'est produite : ', err);
        return res.json({ success: false, message: 'Erreur serveur, réesayer plus tard !! '});
    }
}