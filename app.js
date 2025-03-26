require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
// const jwt = require('jsonwebtoken');

//Importer les modèles
const Users = require('./backend/models/Users');

//Importer les routes
const indexRouter = require('./backend/routes/index');
const usersRouter = require('./backend/routes/users');

const app = express();
const port = process.env.PORT || 3000;

// view engine setup
app.set('views', [
  path.join(__dirname, 'views'),
  path.join(__dirname, 'includes'),
  path.join(__dirname, 'views/admin')
]);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`✅ App is listening on port ${port}`);
})

module.exports = app;