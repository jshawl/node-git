var express = require('express');
var app = express();

var hbs = require('hbs');
var fs = require('fs');

app.set('view engine', 'hbs');
app.engine('html', hbs.__express);
 
app.listen(3000);

app.get('/', function(req, res) {
  var list = fs.readdirSync('/Users/jesseshawl/repos');
  var repos = new Array();
  for (i=0;i<list.length;i++){
   var repo = list[i];
   repo = repo.substr(0,repo.lastIndexOf('.'));
   repos.push(repo);
  }
  res.render('index', {title: 'Home Page', repos: repos});
});

app.get('/:page', function(req, res) {
  res.render('repo',{repo: req.params.page});
});
