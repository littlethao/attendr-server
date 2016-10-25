var http = require('http');
var request = require('request');

this.server = http.createServer(function(req, res) {
  if (req.url === '/') {
      res.writeHead(200, {'Content-Type': 'JSON'});
      res.end();
    }
});

exports.listen = function() {
  this.server.listen.apply(this.server, arguments);
};

exports.close = function(callback) {
  this.server.close(callback);
};
