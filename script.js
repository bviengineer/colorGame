var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var colorSquares = document.querySelectorAll(".square"),
pcSelectedColor = chooseColor(),
colorValueInSpan = document.getElementById("color-in-span"),
resultsDisplay = document.querySelector("#message");

//Updates the name of the color after the correct guess
// colorValueInSpan.textContent = pcSelectedColor;

for(var i = 0; i < colorSquares.length; i++){
    //assigns a color to each square
    colorSquares[i].style.backgroundColor = colors[i];

    //compares the color value of the clicked square to the color value selected
    colorSquares[i].addEventListener("click", function(){
        var userSelectedColor = this.style.backgroundColor;
      
        if(userSelectedColor === pcSelectedColor){
            resultsDisplay.textContent = "Correct"
            colorValueInSpan.textContent = pcSelectedColor;
            changeColors(userSelectedColor);
        } else {
            this.style.backgroundColor = "#232323";
            resultsDisplay.textContent = "Try Again"
        }
        console.log(userSelectedColor);
    });
}

//function will loop through the squares/divs and set each of their background color to the correctly guessed color
function changeColors(color){
    for(var i = 0; i < colorSquares.length; i++){
        colorSquares[i].style.backgroundColor = color;
    }
}
//function will randomly pick a color from the colors array
    function chooseColor(){
        var randomColorSelection = Math.floor(Math.random()* colors.length);
        return colors[randomColorSelection];
    }
