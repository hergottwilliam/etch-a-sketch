const gamebox = document.querySelector(".gamebox");

let gamebox_height = gamebox.offsetHeight;
let gamebox_width = gamebox.offsetWidth;

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
        pixel.style.border = "1px solid black";
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
}

createGrid(16);

// select all the pixels that currently exist in grid
const pixels = document.querySelectorAll('.pixel');

// pixels change color when clicked
pixels.forEach((pix) => {

    pix.addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = "black";
    });
});
