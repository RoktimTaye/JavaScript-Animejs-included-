let abcd = document.querySelector("#abcd");
window.addEventListener("mousemove", (event) => {
  abcd.style.left = event.clientX + "px";
  abcd.style.top = event.clientY + "px";
});