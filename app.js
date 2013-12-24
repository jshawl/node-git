var express = require('express');
var app = express();

var hbs = require('hbs');

app.set('view engine', 'hbs');
app.engine('html', hbs.__express);
 
app.listen(3000);
app.get('/:page', function(req, res) {
  res.render('index',{title: req.params.page});
});

