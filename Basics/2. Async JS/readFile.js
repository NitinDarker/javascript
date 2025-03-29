const dog = require("fs");

dog.readFile("readme.txt", "utf-8", (err, data)=>{
   console.log(data);
})

console.log("Hello World!");