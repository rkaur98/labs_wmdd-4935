const Hapi = require("hapi");
const Joi = require("joi");

const server = new Hapi.Server({
	host: "localhost", 
    port: Number(process.argv[2] || 8080)
});


server.route({
		method: 'GET',
	    path: '/chickens/{breed}',
	    config: {
        handler: function(request, response) {
            return (request.params.breed);
        },
        validate: {
            params: {
                breed: Joi.string().required()
            }
        }
    }
})

server.start((error) => {
	if(error){
		throw error;
	}
	console.log("Server running at "+server.info.uri);
})