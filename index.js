var http = require('http');
var request = require('request');
var models = require('./models/index');

this.server = http.createServer(function(req, res) {
  if (req.url === '/') {
      res.writeHead(200, {'Content-Type': 'JSON'});
      res.end();
    }
  else if (req.url === '/events' && req.method == 'GET') {
    models.Event.findAll().then(function(results){
      var json = results.map(function(element){ return element.dataValues});
      res.writeHead(200, {'Content-Type': 'JSON'});
      res.end(JSON.stringify(json));
    })
  }
  else {
    res.writeHead(404);
    res.end();
  }
});

exports.listen = function() {
  this.server.listen.apply(this.server, arguments);
};

exports.close = function(callback) {
  this.server.close(callback);
};
