var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const getDetailsRouter = require('./routes/getDetails');

const recordRouter = require('./routes/record');
const recordsRouter = require('./routes/records');

const records1Router = require('./routes/records1');

const records2Router = require('./routes/records2');

const records3Router = require('./routes/records3');

const records4Router = require('./routes/records4');

const records5Router = require('./routes/records5');

const records6Router = require('./routes/records6');

const updaterecordRouter = require('./routes/updaterecord');
const deleterecordRouter = require('./routes/deleterecord');


const deleteRouter = require('./routes/delete');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/getDetails', getDetailsRouter);

app.get('/record', recordRouter);
app.get('/records', recordsRouter);

app.get('/records1', records1Router);

app.get('/records2', records2Router);

app.get('/records3', records3Router);

app.get('/records4', records4Router);

app.get('/records5', records5Router);

app.post('/records6', records6Router);

app.post('/updaterecord', updaterecordRouter);
app.post('/deleterecord', deleterecordRouter);


app.get('/delete', deleteRouter);
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

module.exports = app;
