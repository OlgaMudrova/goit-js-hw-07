function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector('input');
const dataCreateButton = document.querySelector('[data-create]');
const dataDestroyButton = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

function createBoxes(amount) {
  const numAmount = parseInt(amount);
  if (numAmount >= 1 && numAmount <= 100) {
    destroyBoxes();
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesDiv.appendChild(box);
      size += 10;
    }
    numberInput.value = '';
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

dataCreateButton.addEventListener('click', () =>
  createBoxes(numberInput.value)
);
dataDestroyButton.addEventListener('click', destroyBoxes);