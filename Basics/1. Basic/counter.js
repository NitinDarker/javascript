let i = 1;
const counter = setInterval(() => {
    if (i == 50) {
        clearInterval(counter);
    }
    console.log(i);
    i++;
}, 100);

const tim = setTimeout(() => {
    console.log("Hello Universe");
   setTimeout(() => {
     console.log("Hello World");
   }, 2000);
   console.log("Hello India");
}, 3 * 1000);
