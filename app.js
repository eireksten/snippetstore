
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');

var db = mongoose.createConnection('localhost', 'snippetstore');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}
var snippets = [
    {
        title: "Sum of numbers in array",
        code: "_.reduce(numarray, function (acc, num) {return acc + num;}, 0);",
        star: false
    },
    {
        title: "Immediate Function",
        code: "(function () {}());",
        star: true
    },
    {
        title: "Function Factory",
        code: "function (statement) {return function () {alert(statement);}};",
        star: false
    }
];

app.get('/', routes.index(snippets));
app.post('snippet.json', routes.addSnippet(snippets));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
