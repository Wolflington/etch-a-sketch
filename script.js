const mainContainer = document.createElement('div');
mainContainer.id = "mainContainer";
// Make sure that EVERY divs are inside of this block to make sure they are in one container.
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');
    mainContainer.appendChild(gridContainer);

document.body.appendChild(mainContainer);