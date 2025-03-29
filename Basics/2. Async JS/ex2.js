console.log("Hi there!");

setTimeout(() => {
  console.log("I am inside first setTimeout...");
}, 1000);

console.log("Now loop will run");

let a = 0;
for (let i = 0; i < 15; i++) {
  a++;
}
console.log(a);

setTimeout(() => {
  console.log("I am inside second setTimeout...");
}, 200);

console.log("My work is Done!");
