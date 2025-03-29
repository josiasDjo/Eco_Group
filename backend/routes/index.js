const express = require('express');
const router = express.Router();
const path = require('path');
const isAuthenticated = require('../middlewares/isAuthenticated');
const authenticateToken = require('../middlewares/authenticateToken');
const projectController = require('../controllers/projectController');
const EquipeController = require('../controllers/equipeController');


/* GET home page. */
router.get('/', async function(req, res, next) {
  const getProjects = async () => {
    return await projectController.getAllProjects();
  }

  const getEquipe = async () => {
    return await EquipeController.getAllMember();
  }

  const ad = 'adminConfig';
  const projects = await getProjects();
  const members = await getEquipe();

  res.render('index', {
    projects: projects,
    members: members
  });
});

// Get connexion page
router.get('/login', (req, res) => {
  console.log('Page de connexion');
  // res.render('sign');
  res.sendFile(path.join(__dirname, '../../custom/signin.html'));
});

router.get('/s/admin', isAuthenticated, authenticateToken, async (req, res) => {
  const getProjects = async () => {
    return await projectController.getAllProjects();
  }

  const getEquipe = async () => {
    return await EquipeController.getAllMember();
  }

  const ad = 'adminConfig';
  const projects = await getProjects();
  const members = await getEquipe();

  res.render('indexAdmin', {
    admin: ad,
    projects: projects,
    members: members
  });
}); 


module.exports = router;