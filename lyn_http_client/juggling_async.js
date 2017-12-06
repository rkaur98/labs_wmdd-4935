const http = require("http");
var path = new Array();
path[0] = process.argv[2];
path[1] = process.argv[3];
path[2] = process.argv[4];

for(var i=0; i<=2;i++){

    http.get(path[i], (res) => {
    
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
          console.log(rawData);
        try {
          const parsedData = JSON.parse(rawData);
          console.log(parsedData);
        } catch (e) {
          console.error(e.message);
        }
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
    });

}