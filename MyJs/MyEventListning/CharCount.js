let inp= document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", function(){
     // Number logic to calculate remaining characters
    let left = 20 - inp.value.length;
    // Displaying the remaining characters in the span
    if(left < 0){
        span.textContent = left
        span.style.color = "red";
    } else {
        span.textContent = left
        span.style.color = "white";
    }
});