const fs = require('fs');
var path = process.argv[2];
var filter = process.argv[3];
var filtereddata = new Array();

module.exports = 
    function (path, filter, callback){
    
    
    fs.readdir(path, (err, data) => {
      if (err) return callback(err)
      
      for(var i=0;i<data.length;i++){
          var name = data[i].toString().split('.');
          
          if(name[1] == filter)
          filtereddata.push(data[i]);
          
      }
      
      
      callback(null, filtereddata)
      return filtereddata;
    })
    
}
