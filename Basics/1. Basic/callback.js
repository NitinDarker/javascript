function sum(a, b, fun) {
  fun(a + b);
}

function printResult(data) {
  console.log("Result of the sum is:", data);
}

function printResultPassive(data) {
  console.log("Sum's Result is:", data);
}

function esehi(data, psudo) {
    console.log(data, psudo);
}

let a = 5;
let b = 15;

// Single Function call only ->
sum(a, b, esehi);
