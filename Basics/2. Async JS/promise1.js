const cat = require("fs");

let variable = null;

cat.readFile("readme.txt", "utf-8", function(err, data){
    variable = data;
})

function printSomething(something) {
    console.log(something);
}

// console.log(variable); // Doesn't update

setTimeout(() => {
    printSomething(variable);
}, 100); // Works but not the right way