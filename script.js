
const slider = document.querySelector('.slider');
let output = document.querySelector('.grid-size');
let gridSize;

slider.oninput = () => getSliderValue();
output.innerText = `Grid Size: ${slider.value} x ${slider.value}`; //Shows the initial value, which is 16

//Change the value of the slider when dragged
function getSliderValue () {
    gridSize = slider.value;
    output.innerText = `Grid Size: ${slider.value} x ${slider.value}`;
    console.log(gridSize);
}

// Use loop to create the grids
function createGrids() {
    //Get the value, including the oninput value, of slider to specify the number of grids
    gridSize = slider.value; //Just gets the initial value set in HTML instead of the new value when the slider is dragged
    console.log(gridSize);

    //Add style to the grid container
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr);`

    for (i = 0; i < gridSize*gridSize; i++) {
        const grids = document.createElement('div');
        grids.classList.add('grids');
        grids.setAttribute('draggable', false);
        gridContainer.appendChild(grids);
    }
}
createGrids();

//forEach loop the grids since querySelectorAll returns a NodeList
let grids = document.querySelectorAll('.grids');
grids.forEach(fcn => {
    fcn.addEventListener('mousedown', enableDraw);
    fcn.addEventListener('mouseup', disableDraw);
    fcn.addEventListener('mouseover', drawGrids);
});

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