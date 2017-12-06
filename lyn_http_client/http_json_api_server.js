var http = require('http');
var url = require('url')
var port = Number(process.argv[2]);
var date = new Date();
date.setHours(date.getHours(), date.getMinutes()-2, date.getSeconds()+20);
   
var server = http.createServer(function(request, response){
    
    var param = request.url.split('/')[2].split('?')[0];
    
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = Math.round((date).getTime())
    
    var str ={hour:hours, minute:minutes,second:seconds};
    var unix ={unixtime:time};
   
    
    if(param == 'parsetime'){
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(str))
    }
    else if(param == 'unixtime'){
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(unix))
    }
    
    
     
})
server.listen(port);



     