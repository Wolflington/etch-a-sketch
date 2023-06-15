const mainContainer = document.createElement('div');
mainContainer.id = "mainContainer";
// Make sure that EVERY divs are inside of this block to make sure they are in one container.
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');

        for (i = 0; i < 256; i++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            gridContainer.appendChild(grid);
        }

    mainContainer.appendChild(gridContainer); 

document.body.appendChild(mainContainer);

const gridButtons = document.querySelectorAll('.grid');
// gridButtons.forEach(btn => {
//     btn.addEventListener('mousedown', () => {
//         console.log('I am clicked!');
//         btn.style.backgroundColor = 'black';
//     });
// });
gridButtons.forEach(fcn => {
    fcn.onmousedown = () => eventHandler(event);
    fcn.onmouseover = () => eventHandler(event);
    fcn.onmouseup = () => eventHandler(event);
});


function eventHandler(event) {
    if (event.type === 'mousedown'){
        console.log('I am clicked!')
        event.currentTarget.style.backgroundColor = 'black';
   } else if (event.type === 'mouseover') {
        console.log('I am hovered!');
        event.currentTarget.style.backgroundColor = 'black';
   } else if (event.type === 'mouseup') {
        console.log('I am free!');
        event.currentTarget.style.backgroundColor = 'white';
   }
}