function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.body;
const spanColor = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');
changeColorButton.addEventListener('click', () => {
  const randomHexColor = getRandomHexColor();
  bodyElem.style.backgroundColor = randomHexColor;
  spanColor.textContent = randomHexColor;
});