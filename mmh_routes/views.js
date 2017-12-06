const Hapi = require("hapi");
const Inert = require('inert');
var Vision = require('vision');

const server = new Hapi.Server({
	host: "localhost", 
    port: Number(process.argv[2] || 8080)
});


server.register(Vision, function (err) {
    if (err){
    	console.log(err);
    } 
    server.views({
	    engines: {
	        html: require('handlebars')
	    },
	    relativeTo: __dirname,
	    path: 'templates'
	});

});

server.register(Inert, function (err) {
    if (err){
    	console.log(err);
    } 
    server.route({
		method: 'GET',
	    path: '/name={Handling}',
	    handler: function (request, reply) {
            reply.view('index',{ title: 'Hello '+request.params.Handling });
        }
	})

	server.start((error) => {
		if(error){
			console.log(error);
		}
		console.log("Server running at "+server.info.uri);
	})
});




