const Hapi = require("hapi");

const server = new Hapi.Server({
	host: "localhost", 
    port: Number(process.argv[2] || 8080)
});


server.route({
		method: 'GET',
	    path: '/{name}',
	    handler: function (request, response) {
	        return ("Hello "+request.params.name)
			  
		}
})

server.start((error) => {
	if(error){
		throw error;
	}
	console.log("Server running at "+server.info.uri);
})