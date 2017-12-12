var colors = generateRandomColors(6);

var colorSquares = document.querySelectorAll(".square"),
pcSelectedColor = chooseColor(),
colorValueInSpan = document.getElementById("color-in-span"),
resultsDisplay = document.querySelector("#message"),
h1 = document.querySelector("h1"),
resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", function(){
    
});

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
            h1.style.backgroundColor = userSelectedColor;
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

//function will create an empty array, call another function that generates random colors, push the randomly generated colors to the array one at a time and then return the array of colors
function generateRandomColors(num){
    var colorsArray = [];
    for(var i = 0; i < num; i++){
        colorsArray.push(generateColors());
    }
    return colorsArray;
};

//function will randomly generate an array of 6 colors
function generateColors(){
    var colorRed = Math.floor(Math.random() * 256);
    var colorGreen = Math.floor(Math.random() * 256);
    var colorBlue = Math.floor(Math.random() * 256);
    return "rgb(" + colorRed + ", " + colorGreen + ", " + colorBlue + ")";
}
