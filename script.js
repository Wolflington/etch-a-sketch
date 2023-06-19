const gridContainer = document.querySelector('.grid-container');
function createGrids(size) {
    size = 16 * 16;
    for (i = 0; i < size; i++) {
        const grids = document.createElement('div');
        grids.classList.add('grids');
        gridContainer.appendChild(grids);
    }
}
createGrids();