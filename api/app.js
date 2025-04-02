require('dotenv').config();

const sequelize = require('../backend/models/index');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const { exec } = require('child_process');

// const jwt = require('jsonwebtoken');

//Importer les modèles
const Users = require('../backend/models/Users');
const Equipe = require('../backend/models/equipe');
const Projects = require('../backend/models/projects');

//Importer les routes
const indexRouter = require('../backend/routes/index');
const usersRouter = require('../backend/routes/usersRoute');
const equipeRouter = require('../backend/routes/equipeRoute');
const projectsRouter = require('../backend/routes/projectRoute');

const app = express();
const port = process.env.PORT || 3000;


// view engine setup
app.set('views', [
  path.join(__dirname, '../views'),
  path.join(__dirname, '../includes'),
  path.join(__dirname, '../views/admin'),
  path.join(__dirname, '../views/modals')
]);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/images', express.static(path.join(__dirname, '../public/images'), { maxAge: '30d' }));
// app.use(bodyParser.json());

// configuration de la session
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 15
  }
}));

app.use(flash());

// Middleware pour rendre Flash accessible dans les vues
app.use((req, res, next) => {
  res.locals.admin = "";
  res.locals.error_conn = "";
  res.locals.success_msg = req.flash('success_msg'); 
  res.locals.error_msg = req.flash('error_msg');
  console.log('✅ Middleware Flash exécuté');
  next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/equipe', equipeRouter);
app.use('/project',projectsRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// exec('taskkill /pid 563404 /T /F', (err, stdout, stderr) => {
//   if (err) {
//     // Gérer l'erreur ici (par exemple, vérifier si c'est une erreur "process not found" et l'ignorer)
//     console.error('Erreur lors de la terminaison du processus:', err.message);
//     return;
//   }
//   console.log('Processus terminé avec succès');
// });

// try {
//   if (require.main === module) {
//     const port = process.env.PORT || 3000;
//     sequelize.sync({ force: false })
//       .then(() => {
//         console.log('✅ Base de données synchronisée avec Sequelize !');
//         app.listen(port, () => {
//           console.log(`✅ App is listening on port ${port}`);
//         });
//       })
//       .catch(err => console.error('❌ Erreur de synchronisation de la BDD :', err));
//   }
  
// } catch(err) {
//   console.log('Erreur serveur : ', err);
// }

app.listen(port, () => {
  console.log(`✅ App is listening on port ${port}`);
});

sequelize.sync({ force: false })
  .then(() => {
    console.log('✅ Base de données synchronisée avec Sequelize !');
})
.catch(err => console.error('❌ Erreur de synchronisation de la BDD :', err));


module.exports = app;