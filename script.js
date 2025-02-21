const logo = document.getElementById("image");
const descript = document.getElementById("effect");

logo.addEventListener("mouseover", function () {
    descript.style.visibility = "visible";
});

logo.addEventListener("mouseout", function () {
    descript.style.visibility = "hidden";
});
logo.addEventListener("mousemove", function (event) {
    const x = event.clientX;
    const y = event.clientY;
    descript.style.left = (x + 10) + 'px';
    descript.style.top = (y + 10) + 'px';
});
