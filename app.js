var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var monk = require('monk');
var handlebars = require('express-handlebars');

/* Custom Routes */
/*var main = require('./routes/main');
var search = require('./routes/search');
var signup = require('./routes/signup');
var signupdata = require('./routes/signupdata');
var foodinfo = require('./routes/foodinfo');
var login = require('./routes/login');
var help = require('./routes/help');
var discover = require('./routes/discover');
var howitworks = require('./routes/howitworks');
var becomeachef = require('./routes/becomeachef');
var searchdata = require('./routes/searchdata');
var message = require('./routes/message');
var profile = require('./routes/profile');
var success = require('./routes/success');*/

var main = require('./routes/main');
var search2 = require('./routes/new/search2');
var signup2 = require('./routes/new/signup2');
var signupdata2 = require('./routes/new/signupdata2');
var foodinfo2 = require('./routes/new/foodinfo2');
var login2 = require('./routes/new/login2');
var help2 = require('./routes/new/help2');
var discover2 = require('./routes/new/discover2');
var howitworks2 = require('./routes/new/howitworks2');
var becomeachef2 = require('./routes/new/becomeachef2');
var searchdata2 = require('./routes/new/searchdata2');
var message2 = require('./routes/new/message2');
var profile2 = require('./routes/new/profile2');
var success2 = require('./routes/new/success2');


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
/*app.use('/', main);
app.use('/search', search);
app.use('/signup', signup);
app.use('/login', login);
app.use('/help', help);
app.use('/discover', discover);
app.use('/howitworks', howitworks);
app.use('/becomeachef', becomeachef);
app.use('/foodinfo', foodinfo);
app.use('/message', message);
app.use('/profile', profile);
app.use('/success', success);

app.get('/searchID', searchdata.sendIndex);
app.get('/searchData', searchdata.sendData);
app.get('/signupdata', signupdata.sendData);*/
//app.get('/signup',signup.addMemtoPage);
//app.get('/decCounter',searchdata.dcrCounter);


app.use('/', main);
app.use('/search', search2);
app.use('/signup', signup2);
app.use('/login', login2);
app.use('/help', help2);
app.use('/discover', discover2);
app.use('/howitworks', howitworks2);
app.use('/becomeachef', becomeachef2);
app.use('/foodinfo', foodinfo2);
app.use('/message', message2);
app.use('/profile', profile2);
app.use('/success', success2);

app.get('/searchID', searchdata2.sendIndex);
app.get('/searchData', searchdata2.sendData);
app.get('/signupdata', signupdata2.sendData);
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

