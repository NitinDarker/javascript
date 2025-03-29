// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter your name: ', (name) => {
//     console.log(`Hello, ${name}!`);
//     readline.close();
// });

const prompt = require('prompt-sync')();

const phil = prompt('What is your name? ');
console.log("Hey there" , phil);
console.log(`Hey there, ${phil}!`);

let anam = Math.floor(Math.random() * 10); // 0 - 9
console.log(anam);
