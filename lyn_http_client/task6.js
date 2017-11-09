var mymodule = require('./task6module.js');
var path = process.argv[2];
var filter = process.argv[3];

let data = mymodule(path, filter, function(err, data){
    
    if (err) console.log(err)
    
    for(var i=0;i < data.length; i++)
    console.log(data[i]) 
})

//   console.log(data) 
  
//   for(var i=0;i<data.length;i++){
      
//       console.log(data[i]);
//   }
  


