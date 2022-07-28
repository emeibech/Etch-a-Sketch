//create grid of boxes
let total = 9999;
const container = document.querySelector('.container');
for (let i = 0; i < total; i++) {
    let boxes = document.createElement('div');
    boxes.classList.toggle('boxes');
    container.appendChild(boxes);
}

//ask user how many boxes they want for each side
const input = document.querySelector('.width-and-height');
input.addEventListener('submit', (e) => {
    e.preventDefault();

    for (let i = 0; i < total; i++) {
        document.querySelector('.container > div').remove();
    }

    let width = document.querySelector('#width').value;
    let height = document.querySelector('#height').value;
    container.setAttribute('style', `grid-template: repeat(${width}, minmax(auto, auto)) / repeat(${height}, minmax(auto, auto))`);
    console.log(total);
    total = width * height;

    //set new grid
    for (let i = 0; i < total; i++) {
        let boxes = document.createElement('div');
        boxes.classList.toggle('boxes');
        container.appendChild(boxes);
    }
});
