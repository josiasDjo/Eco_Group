const Project = require('../models/projects');

exports.addProjects = async (req, res) => {
    try { 
        const { title,description,start_date,end_date, image } = req.body;
        const projectExist = await Project.findOne({where: {title: title}});
        if (projectExist) return res.json({ success: false, message: 'Choisissez un autre titre'});
        await Project.create({title,description,start_date,end_date, image});
    } catch {
        console.log('Une erreur d\'est produite : ', err);
        return res.json({ success: false, message: 'Erreur serveur, réesayer plus tard !! '});
    }
}