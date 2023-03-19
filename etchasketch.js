const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;

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

// START OF APP, grid = 16x16 by default
createGrid(DEFAULT_SIZE);

// select slider elements
const slider = document.querySelector(".slider");
const slider_value = document.querySelector(".slidervalue");

// slider changes size of grid
slider.addEventListener("change", function() {
    currentSize = slider.value;
    slider_value.textContent = `${currentSize}x${currentSize}`;
    clearGrid();
    createGrid(currentSize);
});