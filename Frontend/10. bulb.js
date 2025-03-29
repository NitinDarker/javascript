let bulb_glass = document.querySelector(".gola").style;
let bulb_handle = document.querySelector(".kala").style;

bulb_glass.backgroundColor = "lightyellow";
bulb_glass.border = "1px solid black"
bulb_handle.backgroundColor = "grey";
bulb_glass.borderRadius = "50px";

let btn = document.querySelector(".btn");
btn.style.cursor = "pointer";
btn.addEventListener("click", () => {
    bulb_glass.backgroundColor = "yellow";
    setTimeout(() => {
        bulb_glass.backgroundColor = "lightyellow"
    }, 1000);
});
