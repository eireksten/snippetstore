
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');

var db = mongoose.createConnection('localhost', 'snippetstore');
var SnippetSchema = require('./models/Snippet.js').SnippetSchema;
var Snippet = db.model('snippets', SnippetSchema);


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
app.get('/', routes.index(Snippet));
app.post('/snippet.json', routes.create(Snippet));
app.put('/snippet/:id.json', routes.update(Snippet));
//app.post('/snippet.json', routes.create(Snippet));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
