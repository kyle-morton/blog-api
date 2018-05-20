var express = require('express'),
  app = express(),
  cors = require('cors'),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Entry = require('./api/models/blogEntryModel'), //created model loading here
  bodyParser = require('body-parser');
  
var connectionString = "";
if (process.env.mongoConnString)
  connectionString = process.env.mongoConnString; //get CS from configuration vars
else 
  connectionString = 'mongodb://localhost/Blogdb'; //local database

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(connectionString);

app.use(cors()); //enable cors on all requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//on incorrect route -> send 404 - not found message
// app.use(function(req, res) {
//   res.status(404).send({url: req.originalUrl + ' not found'})
// });

var blogRoutes = require('./api/routes/blogRoutes'); //importing route
blogRoutes(app); //register the route

var homeRoutes = require('./api/routes/homeRoutes');
homeRoutes(app);

app.listen(port);


console.log('Blog RESTful API server started on: ' + port);