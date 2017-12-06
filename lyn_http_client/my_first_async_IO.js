const fs = require('fs')

let data = fs.readFile(process.argv[2], (err, data) => {
  if (err) console.log(err)
  console.log(data.toString().split('\n').length-1);
})

