var images = [
    "./imgs/1.jpg",
    "./imgs/2.jpg",
    "./imgs/3.jpg",
    "./imgs/4.jpg",
    "./imgs/5.jpg",
    "./imgs/6.jpg",
];
var idx = 0;
var interval;
prev.addEventListener("click", function () {
    if (idx <= 0) {
        idx = 0;
    } else {
        slider.src = images[--idx];
    }
});
next.addEventListener("click", function () {
    if (idx >= images.length - 1) {
        idx = images.length - 1;
    } else {
        slider.src = images[++idx];
    }
});
play.addEventListener("click", function () {
    interval = setInterval(function () {
        if (idx >= images.length - 1) {
            idx = -1;
        } else {
            slider.src = images[++idx];
        }
    }, 1000);
});
pause.addEventListener("click", function () {
    clearInterval(interval);
});
