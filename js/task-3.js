const input = document.querySelector('#name-input');
const nameUser = document.querySelector('#name-output');

const helloName = (event) => {
    nameUser.textContent = event.currentTarget.value.trim();

    if (!nameUser.textContent) {
        nameUser.textContent = 'Anonymous';
    }
}

input.addEventListener('input', helloName);