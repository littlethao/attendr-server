var http = require('http');
var DatabaseManager = require('./lib/database')

this.server = http.createServer(function(req, res) {

  if (req.url === '/') {
      res.writeHead(200, {'Content-Type': 'JSON'});
      res.end();
    }

  else if (req.url === '/events' && req.method == 'GET') {
    var results = DatabaseManager.getEvents();
    res.writeHead(200, {'Content-Type': 'JSON'});
    res.end(JSON.stringify({events: results}));
  }

  else if (req.url === '/users/new' && req.method == 'POST') {
    whole = ''
     req.on('data', (chunk) => {
         whole += chunk.toString()
     })
     req.on('end', () => {

         res.writeHead(200, 'OK', {'Content-Type': 'text/html'})
         res.end(whole)
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
