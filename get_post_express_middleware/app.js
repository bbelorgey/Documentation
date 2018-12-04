const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

const router = require('./routes');
// Middlewate sur chaque appel
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
// Middlewate sur route /forms-101 revoie type de demande HTTP
app.use('/forms-101', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});
//  http://localhost:3000/forms-101/brubru
app.get('/forms-101/:id', function (req, res, next) {
  res.send('USER');
  next();
});
// sous-pile de middleware appel : http://localhost:3000/forms-101/brubru
app.use('/forms-101/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
   // if the user ID is zozo, skip to the next route
   if (req.params.id === 'zozo') next('route');
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});
// handler for the /user/:id path, which renders a special page
// app.get('/forms-101/:id', function (req, res, next) {
//   res.send('special');  
//   next();
// });

app.use('/', router);

app.listen(3000);
