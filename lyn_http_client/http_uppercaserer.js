var http = require('http')
var map = require('through2-map');
var port = Number(process.argv[2])
   
var server = http.createServer(function(inStream,outStream){
    
    inStream.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase();  
     })).pipe(outStream)
     
})
server.listen(port);



     