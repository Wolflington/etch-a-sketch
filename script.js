const gridContainer = document.querySelector('.grid-container');
const slider = document.querySelector('.slider');
let output = document.querySelector('.grid-size');
output.innerText = `Grid Size: ${slider.value} x ${slider.value}`;
slider.oninput = () => getSliderValue();
let gridSize;

function getSliderValue () {
    gridSize = slider.value;
    output.innerText = `Grid Size: ${slider.value} x ${slider.value}`;
    console.log(gridSize);
}


function createGrids() {
    let gridSize = slider.value*slider.value;
    console.log(gridSize);
    for (i = 0; i < gridSize; i++) {
        const grids = document.createElement('div');
        grids.classList.add('grids');
        grids.setAttribute('draggable', false);
        gridContainer.appendChild(grids);
    }
}
createGrids();

let grids = document.querySelectorAll('.grids');
grids.forEach(fcn => {
    fcn.addEventListener('mousedown', enableDraw);
    fcn.addEventListener('mouseup', disableDraw);
    fcn.addEventListener('mouseover', drawGrids);
});

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