// Animate the .square div using Anime.js
document.addEventListener("DOMContentLoaded", function () {
  anime({
    targets: ".square",
    keyframes:[
        {translateX: 50, scale:10},
        {translateY: 50, scale: 1},
        {translateX: -50, scale: 5},
        {translateY: -500, scale: 60}
    ],
    duration: 5000,
    loop: true,
  });
});

