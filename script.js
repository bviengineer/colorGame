var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var colorSquares = document.querySelectorAll(".square"),
pcSelectedColor = colors[3],
colorValueInSpan = document.getElementById("color-in-span");

//Updates the name of the color after the correct guess
colorValueInSpan.textContent = pcSelectedColor;

for(var i = 0; i < colorSquares.length; i++){
    //assigns a color to each square
    colorSquares[i].style.backgroundColor = colors[i];

    //compares the color value of the clicked square to the color value selected
    colorSquares[i].addEventListener("click", function(){
        var userSelectedColor = this.style.backgroundColor;
      
        if(userSelectedColor === pcSelectedColor){
            alert("You are correct")
        } else {
            alert("WRONG!");
        }
        console.log(userSelectedColor);
        // this.style.background
    });
}
