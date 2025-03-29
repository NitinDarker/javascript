let pro = new Promise((resolve)=>{
    console.log("I am a promise that resolves instantaneously!");
    resolve(440);
}); // Creating a new promise is NOT an async task

function doSomething(something){
    console.log("I am doing something!");
    console.log(something);
}

console.log("Where am I?");
pro.then(doSomething) // .then is an async task
console.log("I am Done!");