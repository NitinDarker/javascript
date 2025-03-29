function sum(a,b) {
    return a + b;
}

function printResult(data) {
    console.log("Result of the sum is:",data);
}

function printResultPassive(data) {
    console.log("Sum's Result is:", data);
}

let a = 5;
let b = 15;


// Single Function call only ->
printResult(sum(a,b))