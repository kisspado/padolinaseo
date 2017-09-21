//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/main.html'));
});
app.get('/Task1', function(req, res){
  res.sendFile(path.join(__dirname, 'views/Task1.html'));
});
app.get('/Padolina', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/Padolina.html'));
});
app.get('/Task3', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/Task3.html'));
});
app.get('/Task4', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/Task4.html'));
});
app.get('/Task5', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/Task5.html'));
});

//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});