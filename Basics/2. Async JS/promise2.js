const cat = require('fs');

function myFileReader() {
    console.log("I am Reading the file...");
    return new Promise(function(resolve){
        console.log("I am inside Promise...");
        // Async function start
        cat.readFile("readme.txt", "utf-8", function(err, data){ 
            console.log("Resolving data...");
            resolve(data);
            console.log("Data Resolved!");
        })
        // Async function end
    })
}

function printSomething(something) {
    console.log(something);
    console.log("I printed Something!");
}

let fileData = myFileReader();
console.log("Returned File Data: ", fileData);
fileData.then(printSomething); // Async

console.log("File Data Now? : ", fileData);

console.log("My Work is Done!");