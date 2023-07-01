//Global variables
const DEFAULT_MODE = 'normal';
let currentMode = DEFAULT_MODE;

const gridContainer = document.querySelector('.grid-container');
const output = document.querySelector('.grid-size');
const slider = document.querySelector('.slider');
output.innerText = `Grid Size: ${slider.value} x ${slider.value}`;


//Variables for buttons
const normalBtn = document.querySelector('.normal-mode');
const rainbowBtn = document.querySelector('.rainbow-mode');
const eraserBtn = document.querySelector('.eraser');

//Event listeners
slider.oninput = () => getSliderValue();
normalBtn.onclick = () => setCurrentMode('normal');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
eraserBtn.onclick = () => setCurrentMode('eraser');

function getSliderValue() {
    let gridSize = slider.value;
    output.innerText = `Grid Size: ${slider.value} x ${slider.value}`;
    console.log(gridSize*gridSize);
    createGrids(gridSize);
}

function createGrids(size) {
    function removeAllChild(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChild(gridContainer);

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr);`
    for (i = 0; i < size*size; i++) {
        const grids = document.createElement('div');
        grids.classList.add('grids');
        grids.setAttribute('draggable', false);
        grids.addEventListener('mousedown', enableDraw);
        grids.addEventListener('mouseup', disableDraw);
        grids.addEventListener('mousemove', drawGrids);
        gridContainer.appendChild(grids);

        function clearGrid() {
            const clearBtn = document.querySelector('.clear');
            clearBtn.addEventListener('click', () => {
                grids.style.backgroundColor = '#e1dad2';
                });
            }
        clearGrid();
    }
}
createGrids(16);

let mouseDown = false;
function enableDraw(e) {
    mouseDown = true;
}

function disableDraw(e) {
    mouseDown = false;
}

function drawGrids(e) {
    if (mouseDown) {
        if (currentMode === 'normal') {
            e.currentTarget.style.backgroundColor = 'black';
        } else if (currentMode === 'rainbow') {
            const red = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            e.currentTarget.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
        } else if (currentMode === 'eraser') {
            e.currentTarget.style.backgroundColor = '#e1dad2';
        }
    }
}

function setCurrentMode (mode) {
    activateButtons(mode)
    currentMode = mode;
}

function activateButtons (mode) {
    if (currentMode === 'normal') {
        normalBtn.classList.toggle('active');
    } else if (currentMode === 'rainbow') {
        rainbowBtn.classList.toggle('active');
    } else if (currentMode === 'eraser') {
        eraserBtn.classList.toggle('active');
    }
}