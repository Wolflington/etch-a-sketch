const gridContainer = document.querySelector('.grid-container');
let gridSize = 16*16;

function createGrids() {
    for (i = 0; i < gridSize; i++) {
        const grids = document.createElement('div');
        grids.classList.add('grids');
        gridContainer.appendChild(grids);
    }
}
createGrids();

let mouseDown = false;
const enableDraw = () => mouseDown = true;
const disableDraw = () => mouseDown = false;


document.onmousedown = enableDraw;
document.onmouseup = disableDraw;