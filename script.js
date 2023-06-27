//Default Values

const gridContainer = document.querySelector('.grid-container');
const slider = document.querySelector('.slider');
slider.oninput = () => getSliderValue();

//Create a function that gets the user input from the slider
function getSliderValue() {
    let output = document.querySelector('.grid-size');
    let gridSize = slider.value;
    output.innerText = `Grid Size: ${slider.value} x ${slider.value}`;
    console.log(gridSize*gridSize);
    createGrids(gridSize);
}

// Use loop to create the grids
function createGrids(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr);`

    for (i = 0; i < size*size; i++) {
        const grids = document.createElement('div');
        grids.classList.add('grids');
        grids.setAttribute('draggable', false);
        grids.addEventListener('mousedown', enableDraw);
        grids.addEventListener('mouseup', disableDraw);
        grids.addEventListener('mouseover', drawGrids);
        gridContainer.appendChild(grids);

        //Clears the drawing board
        function clearGrid() {
            const clearBtn = document.querySelector('.clear');
            clearBtn.addEventListener('click', () => {
                grids.style.backgroundColor = 'white';
                })
            }
        clearGrid();
    }
}
createGrids(16);

//Create a variable that "turns the switch on/off"  when the mouse button is clicked
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

