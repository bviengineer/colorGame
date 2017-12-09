var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var colorSquares = document.querySelectorAll(".square"),
selectedColor = colors[3];

for(var i = 0; i < colorSquares.length; i++){
    colorSquares[i].style.backgroundColor = colors[i];
}
