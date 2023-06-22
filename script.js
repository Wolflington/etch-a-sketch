const gridContainer = document.querySelector('.grid-container');
let gridSize = 16*16;

function createGrids() {
    for (i = 0; i < gridSize; i++) {
        const grids = document.createElement('div');
        grids.classList.add('grids');
        grids.setAttribute('draggable', false);
        gridContainer.appendChild(grids);
    }
}
createGrids();

let mouseDown = false;
function enableDraw(e) {
    mouseDown = true;
    e.currentTarget.style.backgroundColor = 'black';
}

function disableDraw() {
    mouseDown = false;
}

function drawGrids(e) {
    if (mouseDown) {
        e.currentTarget.style.backgroundColor = 'black';
        console.log(e);
    }
}

let grids = document.querySelectorAll('.grids');
grids.forEach(fcn => {
    fcn.addEventListener('mousedown', enableDraw);
    fcn.addEventListener('mouseup', disableDraw);
    fcn.addEventListener('mouseover', drawGrids);
});
