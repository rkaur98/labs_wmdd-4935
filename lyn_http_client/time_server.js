var net = require('net') ;
var port = process.argv[2];
var date = new Date().toISOString().replace(/T/, ' ').substr(0, 16);

var server = net.createServer(function (socket) {  
    var data = date;
      socket.write(data+`\n`);
      socket.end()
}) 
server.listen(port)