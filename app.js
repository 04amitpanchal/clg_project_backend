var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var admin=require('./routes/getAllRecruiter');
var getAllEmplyee=require('./routes/getAllEmployees');
var removeRec=require('./routes/deleteRec');
var removeEmp=require('./routes/deleteEmp');
var addrec=require('./routes/addrecruiter');
var updaterec=require('./routes/updaterecruiter');
var LoginVerify=require('./routes/loginVerifyroutes');
var empDetailsById=require('./routes/empDetailsById');
var updateEmpDetails=require('./routes/updateEmpDetails');
var addEmp=require('./routes/addemp');
var addrecByImg=require('./routes/addrecByimg');
var updaterecByImg=require('./routes/updaterecByImg');
var getRecById=require('./routes/getrecById');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin',admin);
app.use('/getAllEmployee',getAllEmplyee);
app.use('/removeRec',removeRec);
app.use('/removeEmp',removeEmp);
app.use('/addrecruiter',addrec);
app.use('/updaterecruiter',updaterec);
app.use('/loginVerify',LoginVerify);
app.use('/empDetailsById',empDetailsById);
app.use('/updateEmpDetails',updateEmpDetails);
app.use('/addEmp',addEmp);
app.use('/addrecbyimg',addrecByImg);
app.use('/updaterec',updaterecByImg);
app.use('/getRecById',getRecById);
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
