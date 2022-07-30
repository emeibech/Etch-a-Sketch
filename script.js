//create grid of boxes
let total = 3600;
const container = document.querySelector('.container');
for (let i = 0; i < total; i++) {
    let boxes = document.createElement('div');
    boxes.classList.toggle('boxes');
    container.appendChild(boxes);
}

//change the number of boxes per side based on user selection
const input = document.querySelector('#input');
input.addEventListener('change', (e) => {

    //remove previous grid
    for (let i = 0; i < total; i++) {
        document.querySelector('.container > div').remove();
    }

    //get the new value for number of boxes
    let value = e.target.value;
    let width = Math.sqrt(value);
    let height = Math.sqrt(value);
    total = value;
    
    container.setAttribute('style', `grid-template: repeat(${width}, minmax(auto, auto)) / repeat(${height}, minmax(auto, auto))`);

    //set new grid
    for (let i = 0; i < total; i++) {
        let boxes = document.createElement('div');
        boxes.classList.toggle('boxes');
        container.appendChild(boxes);
    }}
);

//change color of box when user presses mouse over it
function colorBlack (e) {
    e.target.style.cssText = 'background-color: black';
    container.addEventListener('mousemove', colorBlack);
}
container.addEventListener('mousedown', colorBlack);

//stop coloring when user releases the mouse
container.addEventListener('mouseup', function() {
    container.removeEventListener('mousemove', colorBlack);
});