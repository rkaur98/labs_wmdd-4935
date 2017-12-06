const Hapi = require("hapi");
const fs = require("fs");
const Path = require("path");
const Rot13 = require("rot13-transform");

const server = new Hapi.Server({
	host: "localhost", 
    port: Number(process.argv[2] || 8080)
});


server.route({
		method: 'GET',
	    path: '/',
	    config: {
	        handler: (request, response) => {
	            var file = fs.createReadStream(Path.join(__dirname, 'file.txt'));
	            return (file.pipe(Rot13()));
	        }
	    }
})

server.start((error) => {
	if(error){
		throw error;
	}
	console.log("Server running at "+server.info.uri);
})