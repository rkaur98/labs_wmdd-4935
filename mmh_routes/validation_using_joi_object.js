const Hapi = require("hapi");
const Joi = require("joi");

const server = new Hapi.Server({
	host: "localhost", 
    port: Number(process.argv[2] || 8080)
});


server.route({
		method: 'POST',
	    path: '/login',
	    config: {
        handler: function(request, response) {
            return ("login successful");
        },
        validate: {
            payload: Joi.object({
                    isGuest: Joi.boolean().required(),
                    username: Joi.string().when('isGuest', { is: false, then: Joi.required() }),
                    password: Joi.string().alphanum(),
                    accessToken: Joi.string().alphanum(),
                    
               })
               .options({allowUnknown: true})
               .without('password', 'accessToken')
               
        }
    }
})

server.start((error) => {
	if(error){
		throw error;
	}
	// console.log("Server running at "+server.info.uri);
})