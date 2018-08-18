const express =  require('express');
var secure = require('express-force-https');
const path = require('path');
const app = express();
const resumeRouter = require('./server/routers/resume.router');
const mongoose = require('mongoose');
mongoose.Promise = Promise;


const port = 3000;

// db connect
mongoose.connect('mongodb://localhost:27017/aoterocom', { useNewUrlParser: true }, (err, res) => {
  if (!err) console.log('database is connected');
  else throw err;
});

// middleware
app.use(secure);
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // * => allow all origins
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Accept'); // add remove headers according to your needs
  next()
});

// static site on root dir
app.use(express.static(path.join(__dirname, '/dist/aoterocom')));

// routers
app.use('/api/v1/resume', resumeRouter);


app.listen(port, () => {
  console.log(`aotero backend server listen on port ${port}`);
});
