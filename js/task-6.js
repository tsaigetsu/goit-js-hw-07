function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const controlsDiv = document.getElementById('controls');
const createBtn = controlsDiv.querySelector('[data-create]');
const destroyBtn = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = parseInt(controlsDiv.querySelector('input').value, 10);
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 - 100');
    return;
  }

  destroyBoxes();

  const fragment = document.createDocumentFragment();

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    size += 10;
  }

  boxesDiv.appendChild(fragment);
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}
