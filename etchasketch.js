const gamebox = document.querySelector(".gamebox");

function createGrid(size){ // size = length of each side (size**2 == total pixels)
    let total_pixels = size**2
    let grid_columns = "";

    // add pixels to grid
    for (let i = 0; i < total_pixels; i++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");

        // style the pixel
        pixel.textContent = "X";
        pixel.style.backgroundColor = "white";
        pixel.style.border = "2px solid black";
        pixel.style.width = "20px";
        pixel.style.height = "20px";

        gamebox.appendChild(pixel);
    }

    // creat grid columns (same # as 'size')
    for (let j = 0; j < size; j++){
        grid_columns += "auto ";
    }
    gamebox.style.gridGap = "0px";
    gamebox.style.gridTemplateColumns = grid_columns;

}

createGrid(4);