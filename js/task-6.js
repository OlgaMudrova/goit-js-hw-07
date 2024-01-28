const numberValue = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', () => {
  const amount = numberValue.value;
  const valueMax = Number(numberValue.max);
  const valueMin = Number(numberValue.min);

  // check if the input number is greater than 100 or less than 1
  if (amount >= valueMin && amount <= valueMax) {
    createBoxes(amount);
  }

  // clear the input field
  numberValue.value = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxes.innerHTML = '';
  const boxesItems = [];
  let boxSize = 30;
  for (let i = 1; i <= amount; i += 1) {

    let div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    boxesItems.push(div);

    boxSize += 10;
  }
  boxes.append(...boxesItems);
}

const destroyBoxes = () => boxes.innerHTML = '';

buttonDestroy.addEventListener('click', destroyBoxes);