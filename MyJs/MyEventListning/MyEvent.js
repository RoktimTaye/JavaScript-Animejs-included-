//  // This code listens for keydown events and updates the h1 text content based on the pressed key. If the spacebar is pressed, it displays "SPC"; otherwise, it shows the name of the key pressed.
let h1 = document.querySelector("h1");

window.addEventListener("keydown", (event) => {

    if(event.key === " ") {
        h1.textContent = "SPC";
    }

    else{
        h1.textContent = event.key;
    }
});