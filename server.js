var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Entry = require('./api/models/blogEntryModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Blogdb'); 
mongoose.connect('mongodb+srv://blog_rw_user:password1234@kmnosql-ln6px.mongodb.net/BlogDb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//on incorrect route -> send 404 - not found message
// app.use(function(req, res) {
//   res.status(404).send({url: req.originalUrl + ' not found'})
// });

var routes = require('./api/routes/blogRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Blog RESTful API server started on: ' + port);