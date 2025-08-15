let count = 0;
let progress = document.querySelector(".progress-bar");
let percentText = document.querySelector("#percentText")
setInterval(function(){
    if(count<=99) {
        count ++;
        progress.style.width = `${count}%`;
        percentText.innerHTML = `${count}%`
    }
},30);