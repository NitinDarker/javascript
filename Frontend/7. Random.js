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


let dom = document.querySelectorAll(".box").forEach(e => {
    e.style.color = randColor();
    e.style.backgroundColor = randColor();
    e.innerHTML = randColor();
})


