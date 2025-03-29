function countTill100(n) {
    let a = 1;
    for (let i = 0; i < n; i++) {
        a += i;
    }
    return a;
}

function callbackFunc(){
    console.log(countTill100(1000));
}

function sleep(){
    let a = 0;
    for (let i = 0; i < 10000000000; i++) {
        a++;
    }
    console.log(a);
}

setTimeout(callbackFunc, 5000); // swap
sleep(); // swap
console.log(4);
// setTimeout(() => {
//     console.log("1 sec function");
// }, 1000);