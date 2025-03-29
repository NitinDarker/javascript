let boo = document.getElementsByClassName("btn");
let arr = Array.from(boo)
console.log(arr)
arr.forEach(e => {
    e.addEventListener("click", e => {
        alert("Mujhe daba diya");
        
    })
})