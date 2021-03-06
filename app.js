var express = require('express');
var app = express();
var path = require('path');
var expressLayouts = require('express-ejs-layouts');

app.set('port', (process.env.PORT || 5000));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/tests'));

app.get('/', function (req, res) {
  res.render('index', { title: 'ADPR' });
})

app.get('/tests', function (req, res) {
  res.render('tests', { title: 'ADPR Tests' });
});

app.get('/grammar', function (req, res) {
  res.render('grammar', { title: 'ADPR Grammar' });
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});