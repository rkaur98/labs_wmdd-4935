const Hapi = require("hapi");
const Inert = require('inert');


const server = new Hapi.Server({
	host: "localhost", 
    port: Number(process.argv[2] || 8080)
});

server.register(Inert, function (err) {
    if (err){
    	throw err;
    } 
    server.route({
		method: 'GET',
	    path: '/foo/bar/file.html',
	    handler: {
	        directory: { path: './public' }
		}
	})

	server.start((error) => {
		if(error){
			throw error;
		}
		console.log("Server running at "+server.info.uri);
	})
});


