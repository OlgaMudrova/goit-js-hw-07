'use strict';

const nameOutput = document.getElementById('name-output');

document.getElementById('name-input').addEventListener('input', event => {
  const tempText = event.currentTarget.value.trim();
  if (tempText === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = tempText;
  }
});