// NOTES
// fix bug that creates random red lines across the grid (a gap in the grid box showing the background)

const DEFAULTSIZE = 16;
const DEFAULTCOLOR = "black";

let currentSize = DEFAULTSIZE;
let currentColor = DEFAULTCOLOR;

const gamebox = document.querySelector(".gamebox");
let gameboxHeight = gamebox.offsetHeight;
let gameboxWidth = gamebox.offsetWidth;

const displayCurrentColor = document.querySelector(".currentcolor");
displayCurrentColor.textContent = `Color: ${currentColor}`;

// function that generates random color (returns hexidecimal string)
function generateRandomColor(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
}

// create a grid of size x size
function createGrid(size){ // size = desired length of each side (size**2 == total pixels)
    // ex:
    // gamebox dimensions = 700px X 700px
    // pixel dimensions = 700px/size X 700px/size 

    let totalPixels = size**2
    let gridColumns = "";

    // add pixels to grid
    for (let i = 0; i < totalPixels; i++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");

        // style the pixel
        pixel.style.backgroundColor = "white";
        pixel.style.width = `${gameboxWidth / size}px`;
        pixel.style.height = `${gameboxHeight / size}px`;

        gamebox.appendChild(pixel);
    }

    // create and add grid columns (same # as 'size')
    for (let j = 0; j < size; j++){
        gridColumns += "auto ";
    }
    
    gamebox.style.gridTemplateColumns = gridColumns;

    // select all the pixels that currently exist in grid
    let pixels = document.querySelectorAll('.pixel');

    pixels.forEach((pix) => {

        pix.addEventListener("mouseover", function(e) {
            if (currentColor == "rainbow"){
                e.target.style.backgroundColor = generateRandomColor();
            }
            else {
                e.target.style.backgroundColor = currentColor;
            }
            
        });
    });
}

// clear grid by removing all pixels (deletes entire grid, not a grid reset)
function clearGrid() {
    // clear the grid
    const deletePixels = document.querySelectorAll(".pixel");
    for (let i = 0; i < deletePixels.length; i++) {
        deletePixels[i].remove();
    }
}

// START: grid = 16x16, color = black, by default
createGrid(DEFAULTSIZE);

// select all elements that can modify the grid
const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slidervalue");
const blackButton = document.querySelector(".blackbutton");
const rainbowButton = document.querySelector(".rainbowbutton");
const eraserButton = document.querySelector(".eraserbutton");
const clearButton = document.querySelector(".clearbutton");

// slider changes size of grid
slider.addEventListener("change", function() {
    currentSize = slider.value;
    sliderValue.textContent = `Size: ${currentSize}x${currentSize}`;
    clearGrid();
    createGrid(currentSize);
});

// ALL BUTTONS
blackButton.addEventListener("click", function(){
    currentColor = "black";
    displayCurrentColor.textContent = `Color: ${currentColor}`;
});

rainbowButton.addEventListener("click", function(){
    currentColor = "rainbow";
    displayCurrentColor.textContent = `Color: ${currentColor}`;
});

eraserButton.addEventListener("click", function() {
    currentColor = "white";
    displayCurrentColor.textContent = "Color: eraser";
});

clearButton.addEventListener("click", function() {
    clearGrid();
    createGrid(currentSize);
    currentColor = "black";
    displayCurrentColor.textContent = `Color: ${currentColor}`;
});

