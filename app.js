var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var monk = require('monk');
var handlebars = require('express-handlebars');

/* Custom Routes */
var main = require('./routes/main');
var search = require('./routes/search');
var signupdata = require('./routes/signupdata');
var foodinfo = require('./routes/foodinfo');
var signuplogin = require('./routes/signup-login');
var helpHIW = require('./routes/helpHIW');
var discover = require('./routes/discover');
var searchdata = require('./routes/searchdata');
var message = require('./routes/message');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.engine('.handlebars', handlebars());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Views */
app.use('/', main);
app.use('/search', search);
app.use('/signup-login', signuplogin);
app.use('/helpHIW', helpHIW);
app.use('/discover', discover);
app.use('/foodinfo', foodinfo);
app.use('/message', message);

app.get('/searchID', searchdata.sendIndex);
app.get('/searchData', searchdata.sendData);
app.get('/signupdata', signupdata.sendData);
//app.get('/signup',signup.addMemtoPage);
//app.get('/decCounter',searchdata.dcrCounter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.log("hehe");
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  console.log('hehe2');
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;

