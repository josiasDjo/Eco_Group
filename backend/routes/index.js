const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
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

  const projects = await getProjects();
  const members = await getEquipe();

  console.log('Projet : ', projects);

  res.render('index', {
    projects: projects,
    members: members
  });
  // res.render('index');
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

  console.log('Projet : ', projects);

  res.render('indexAdmin', {
    admin: ad,
    projects: projects,
    members: members
  });
}); 

// Uploader les images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function(req, file, cb) {
    const newName = Date.now() + path.extname(file.originalname);
    cb(null, newName);
  }
});

const upload = multer({ storage: storage });

router.post('/upload/image', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.json({ success: false, message: 'Aucun fichier réçu' });
  }
  const newname = req.file.filename;
  return res.json({ success: true, newname: newname});
});


module.exports = router;