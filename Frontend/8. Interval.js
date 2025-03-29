function randNum(min, max) {
  let num = Math.random() * (max - min + 1);
  num = Math.floor(num) + min;
  return num;
}

function randColor() {
  let r = randNum(0, 255);
  let g = randNum(0, 255);
  let b = randNum(0, 255);
  let col = `rgb(${r},${g},${b})`;
  return col;
}

console.log("Harr\"".length)

let boo = document.querySelectorAll(".box");
boo.forEach((e) => {
  setInterval(() => {
    e.style.backgroundColor = randColor();
    e.style.color = randColor();
  }, 1000);
});

document.querySelector(".container").style.backgroundColor = randColor();

console.log(document.body)

