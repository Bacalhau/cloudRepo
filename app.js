var http = require('http');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(process.env.PORT);
  res.write(process.env.IP);
  res.end("WEB Server Working!");
}).listen(process.env.PORT);