const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;

const displayCurrentColor = document.querySelector(".currentcolor");
displayCurrentColor.textContent = `Color: ${currentColor}`;

const gamebox = document.querySelector(".gamebox");

let gamebox_height = gamebox.offsetHeight;
let gamebox_width = gamebox.offsetWidth;

// create a grid of size x size
function createGrid(size){ // size = desired length of each side (size**2 == total pixels)
    // ex:
    // gamebox dimensions = 700px X 700px
    // pixel dimensions = 700px/size X 700px/size 

    let total_pixels = size**2
    let grid_columns = "";

    // add pixels to grid
    for (let i = 0; i < total_pixels; i++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");

        // style the pixel
        pixel.style.backgroundColor = "white";
        pixel.style.width = `${gamebox_width / size}px`;
        pixel.style.height = `${gamebox_height / size}px`;

        gamebox.appendChild(pixel);
    }

    // create and add grid columns (same # as 'size')
    for (let j = 0; j < size; j++){
        grid_columns += "auto ";
    }
    gamebox.style.gridGap = "0px";
    gamebox.style.gridTemplateColumns = grid_columns;

    // select all the pixels that currently exist in grid
    let pixels = document.querySelectorAll('.pixel');

    pixels.forEach((pix) => {

        pix.addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = currentColor;
        });
    });
}

function clearGrid() {
    // clear the grid
    const deletePixels = document.querySelectorAll(".pixel");
    for (let i = 0; i < deletePixels.length; i++) {
        deletePixels[i].remove();
    }
}

// START OF APP, grid = 16x16, color = black, by default
createGrid(DEFAULT_SIZE);


// select all elements that can modify the grid
const slider = document.querySelector(".slider");
const slider_value = document.querySelector(".slidervalue");
const black_button = document.querySelector(".blackbutton");
const rainbow_button = document.querySelector(".rainbowbutton");
const eraser_button = document.querySelector(".eraserbutton");
const clear_button = document.querySelector(".clearbutton");

// slider changes size of grid
slider.addEventListener("change", function() {
    currentSize = slider.value;
    slider_value.textContent = `Size: ${currentSize}x${currentSize}`;
    clearGrid();
    createGrid(currentSize);
});

// ALL BUTTONS
black_button.addEventListener("click", function(){
    currentColor = "black";
    displayCurrentColor.textContent = `Color: ${currentColor}`;
});

rainbow_button.addEventListener("click", function(){
    currentColor = "blue";
    displayCurrentColor.textContent = `Color: ${currentColor}`;
});

eraser_button.addEventListener("click", function() {
    currentColor = "white";
    displayCurrentColor.textContent = "Color: eraser";
});

clear_button.addEventListener("click", function() {
    clearGrid();
    createGrid(currentSize);
});



// NOTES
// change from hover to click and hover for coloring
// change css so that when elements in the toolbox change they don't move the grid
// fix bug that creates random red lines sometimes (probably a "crack" in the grid box as red is the background color)
// finish toolbox features
// add icon to title
// research naming functions in JS and consider removing all underscores
// add readme