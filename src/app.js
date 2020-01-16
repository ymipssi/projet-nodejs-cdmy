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

mongoose.connect('mongodb://mongo/sqynode', mongooseParams); // docker (mongo = nom du container)
// mongoose.connect('mongodb://localhost:27017/apinodeipssi', mongooseParams); // windows sans docker

app.use( bodyParser.urlencoded({extended: true}) );
app.use( bodyParser.json());

const userRoutes= require ('./src/routes/userRoute');
userRoutes(app);

const noteRoutes= require ('./src/routes/noteRoute');
noteRoutes(app);

//server.listen(port, hostname);
app.listen(port, hostname);
