const increment = document.getElementById("Increment");
const decrement = document.getElementById("Decrement");
const clear = document.getElementById("Clear");
const counter = document.getElementById("Counter");
const error_box = document.getElementById("error-box");



increment.addEventListener("click",()=>{
    counter.innerText = Number(counter.innerText) + 1;
    clear.style.display = "block";
    error_box.style.display = "none";
})

decrement.addEventListener("click",()=>{
    let count_value = Number(counter.innerText);
    if(count_value > 0){
    counter.innerText = count_value - 1;
    clear.style.display = "block";
    error_box.style.display = "none";
}
    if(count_value <= 0){
        error_box.style.display = "block";
    }
})

clear.addEventListener("click", ()=>{
    counter.innerText = "0";
    clear.style.backgroundColor = "transparent";
    clear.style.color = "white";
    error_box.style.display = "none"; 
})