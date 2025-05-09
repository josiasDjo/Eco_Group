const Project = require('../models/projects');

exports.addProjects = async (req, res) => {
    try { 
        const { title,description,start_date,end_date, image } = req.body;
        const projectExist = await Project.findOne({where: {title: title}});
        if (projectExist) return res.json({ success: false, message: 'Choisissez un autre titre'});
        await Project.create({title,description,start_date,end_date, image});
        return res.json({ success: true, message: 'Opération réussie !!'});
    } catch (err) {
        console.log('Une erreur d\'est produite : ', err);
        return res.json({ success: false, message: 'Erreur serveur, réesayer plus tard !! '});
    }
}

exports.getAllProjects = async (req, res) => {
    try {
        const AllProject = await Project.findAll();
        return AllProject;
    } catch(err) {
        console.log('Une erreur d\'est produite : ', err);
        return { success: false, message: 'Erreur serveur, réesayer plus tard !! '};
    }
}

exports.updateProjects = async (req, res) => {
    try {
        const { project_id,title,description,image } = req.body;
        const projectExist = await Project.findByPk(project_id);
        if (!projectExist) return res.json({ success: false, message: 'Projet introuvable'});
        const [updated] = await Project.update({ title,description,image }, {where: {project_id}});
        if (updated) {
            return res.json({ success: true, message: 'Modification réussie' });
        } else {
            return res.json({ success: false, message: 'Aucune modification effectuée' });
        }
    } catch (err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Erreur serveur, réesayer plus tard !! '});
    }
}

exports.deleteProjects = async (req, res) => {
    try {
        const project_id = req.body.project_id;
        const projectExist = await Project.findByPk(project_id);
        if(!projectExist) return res.json({ success: false, message: 'Projet introuvable'});
        await Project.destroy({where: {project_id}});
        return res.json({ success: true, message: 'Suppression réussie'});
    } catch (err) {
        console.log('Une erreur d\'est produite : ', err);
        return res.json({ success: false, message: 'Erreur serveur, réesayer plus tard !! '});
    }
}