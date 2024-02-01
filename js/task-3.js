const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener('input', () => {
  const trimmedValue = nameInput.value.trim();
  trimmedValue === ' ' || trimmedValue === ''
    ? (nameOutput.textContent = 'Anonymous')
    : (nameOutput.textContent = trimmedValue);
});