//const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// option pour enlever les warnings 

const mongooseParams = {
  useUnifiedTopology : true,
  useNewUrlParser : true,
  useCreateIndex : true
}

//server.listen(port, hostname);

mongoose.connect('mongodb://mongo/sqynode', mongooseParams);

app.use( bodyParser.urlencoded({extended: true}) );
app.use( bodyParser.json());

const userRoute= require ('./api/routes/userRoute');
userRoutes(app);

const noteRoutes= require ('./api/routes/noteRoute');
noteRoutes(app);

app.listen(port, hostname);
