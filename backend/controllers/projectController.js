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

exports.getAllProjects = async (req, res) => {
    try {
        const AllProject = await Project.findAll();
        return { success: true, AllProject: AllProject};
    } catch(err) {
        console.log('Une erreur d\'est produite : ', err);
        return res.json({ success: false, message: 'Erreur serveur, réesayer plus tard !! '});
    }
}

exports.updateProjects = async (req, res) => {
    try {
        const { project_id,title,description } = req.body;
        const projectExist = await Project.findByPk(project_id);
        if (!projectExist) return res.json({ success: false, message: 'Projet introuvable'});
        await Project.update({ title,description }, {where: {project_id}});
        return res.jon({ success: true, message: 'Modification réussie'});
    } catch (err) {
        console.log('Une erreur d\'est produite : ', err);
        return res.json({ success: false, message: 'Erreur serveur, réesayer plus tard !! '});
    }
}

exports.deleteProjects = async (req, res) => {
    try {
        const { project_id } = req.body;
        const projectExist = await Project.findByPk(project_id);
        if(!projectExist) return res.json({ success: false, message: 'Projet introuvable'});
        await Project.destroy({where: project_id});
        return res.json({ success: true, message: 'Suppression réussie'});
    } catch (err) {
        console.log('Une erreur d\'est produite : ', err);
        return res.json({ success: false, message: 'Erreur serveur, réesayer plus tard !! '});
    }
}