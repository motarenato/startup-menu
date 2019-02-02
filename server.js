var http = require('http');
var fs = require('fs');
http
  .createServer(function(req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/json',
      'Access-Control-Allow-Origin': '*',
      'X-Powered-By': 'nodejs',
    });
    fs.readFile('data.json', function(err, content) {
      res.write(content);
      res.end();
    });
  })
  .listen(3001);
console.log('Server running at port 3001');
