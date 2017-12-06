const Hapi = require("hapi");
const Inert = require('inert');


const server = new Hapi.Server({
	host: "localhost", 
    port: Number(process.argv[2] || 8080)
});

server.register(Inert, function (err) {
    if (err){
    	console.log(err);
    } 
    else{
    server.route({
		method: 'GET',
	    path: '/',
	    handler: {
	        file: "index.html"
		}
	})

	server.start((error) => {
		if(error){
			console.log(error);
		}
		console.log("Server running at "+server.info.uri);
	})
}
});


