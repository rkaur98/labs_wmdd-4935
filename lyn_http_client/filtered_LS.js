const fs = require('fs')

let data = fs.readdir(process.argv[2], (err, data) => {
  if (err) console.log(err)
  
  
  for(var i=0;i<data.length;i++){
      var name = data[i].toString().split('.');
      
      if(name[1] == process.argv[3])
      console.log(data[i]);
  }
})

