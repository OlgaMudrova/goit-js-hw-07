'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.body.querySelector('#controls > button[data-create]');
const buttonDestroy = document.body.querySelector('#controls > button[data-destroy]');


buttonCreate.addEventListener('click', function () {
  const inputNumber = document.body.querySelector('#controls > input[type="number"]');
 
  if (inputNumber.value >= 1 && inputNumber.value <= 100) {
    createBoxes(inputNumber.value);
  } else {
    alert('Bad number! min="1" max="100" step="1"');
  }
  inputNumber.value = '';
});

buttonDestroy.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  
  destroyBoxes();
  const boxes = document.getElementById('boxes');
  let boxElements = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    let last = 30;

    
    if (boxes.lastElementChild !== null) {
      const tempWidth = boxes.lastElementChild.style.width;
      last = 10 + parseInt(tempWidth.slice(0, tempWidth.length - 2));
    }

    box.style.width = box.style.height = `${10 * i + last}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxElements.push(box);
  }
  boxes.append(...boxElements);
}

function destroyBoxes() {
  document.querySelectorAll('div#boxes > div').forEach(el => el.remove());
}