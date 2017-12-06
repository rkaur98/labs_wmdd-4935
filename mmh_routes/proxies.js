const Hapi = require("hapi");

const server = new Hapi.Server({
    host: "localhost", 
    port: Number(process.argv[2] || 8080)
});

var H2o2 = require('h2o2');

server.register(H2o2, function (err) {
    if (err) console.log(err);

    server.route({
        method: 'GET',
        path: '/proxy',
        handler: {
            proxy: {
                host: '127.0.0.1',
                port: Number(process.argv[2] || 8080)
            }
        }

    })

    server.start((error) => {
        if(error){
            console.log(error);
        }
        console.log("Server running at "+server.info.uri);
    })
});


