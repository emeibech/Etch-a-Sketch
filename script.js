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

//set drawing color to black for when user presses mouse over the boxes
function stopColorBlack () {
    container.removeEventListener('mousemove', colorBlack);
}

function stopColorWhite () {
    container.removeEventListener('mousemove', colorWhite);
}

function colorBlack (e) {
    e.target.classList.add('boxes-black-fill')
    container.addEventListener('mousemove', colorBlack);

    //stop coloring black when user releases the mouse
    container.addEventListener('mouseup', stopColorBlack);
}

function colorWhite (e) {
    e.target.classList.remove('boxes-black-fill');
    container.addEventListener('mousemove', colorWhite);

    //stop coloring white when user releases the mouse
    container.addEventListener('mouseup', stopColorWhite);
}

container.addEventListener('mousedown', colorBlack);

//set drawing color to white for when user click erase
// const draw = document.querySelector('.draw');
// const erase = document.querySelector('.erase');
function mode (e) {
    if (e.target.className === 'draw') {
        container.removeEventListener('mousedown', colorWhite);
        container.addEventListener('mousedown', colorBlack);
    }
    else if (e.target.className === 'erase') {
        container.removeEventListener('mousedown', colorBlack);
        container.addEventListener('mousedown', colorWhite);
    }
    else if (e.target.className === 'clear') {
        const boxes = document.querySelectorAll('.boxes');
        for (box of boxes) {
            box.classList.remove('boxes-black-fill');
        }
        container.addEventListener('mousedown', colorBlack);
    }
}

const buttons = document.querySelectorAll('.buttons > button');
buttons.forEach(button => button.addEventListener('click', mode));


// draw.addEventListener('click', e => {
//     container.removeEventListener('mousemove', colorWhite);
//     container.addEventListener('mousedown', colorBlack);
//     console.log(e.target.classList)
//     });

// erase.addEventListener('click', e => {
//     container.removeEventListener('mousemove', colorBlack);
//     container.addEventListener('mousedown', colorWhite);
//     console.log(e.target.classList)
//     });

    //try nodelist