// Definir paleta
for (let index = 1; index <= 4; index += 1) {
  const color = document.createElement('div');
  const palette = document.querySelector('#color-palette');
  color.className = 'color';
  palette.appendChild(color);
}

// Definir cores da Paleta
const palette = document.querySelectorAll('.color');
const firstPColor = palette[0];
const secondPColor = palette[1];
const thirdPColor = palette[2];
const forthPColor = palette[3];

firstPColor.style.color = 'black';
firstPColor.style.backgroundColor = 'black';

secondPColor.style.color = '#4f58b9';
secondPColor.style.backgroundColor = '#4f58b9';

thirdPColor.style.color = '#d14a4a';
thirdPColor.style.backgroundColor = '#d14a4a';

forthPColor.style.color = '#e6c936';
forthPColor.style.backgroundColor = '#e6c936';

// Criar quadro de pixels
const pixelBoard = document.getElementById('pixel-board');
for (let index = 1; index <= 5; index += 1) {
  for (let secondIndex = 1; secondIndex <= 5; secondIndex += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}

// Definir cor preta como inicial
function setInitialColor(color) {
  color.classList.add('selected');
}

// Selecionar cor da paleta
function selectColor(event) {
  for (let i = 0; i < palette.length; i += 1) {
    palette[i].className = 'color';
  }
  const color = event.target;
  color.classList.add('selected');
}

// Pintar pixel com a cor selecionada
function paintPixel(event) {
  const pixel = event.target;
  const selectedColor = document.querySelector('.selected');
  const color = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
  pixel.style.backgroundColor = `${color}`;
}

// Botão de limpar
const clearButton = document.getElementById('clear-board');
function clearBoard() {
  const allPixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < allPixels.length; i += 1) {
    const currentPixel = allPixels[i];
    currentPixel.style.backgroundColor = '';
  }
}

// Event Listeners
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('color')) {
    selectColor(event);
  }
}, false);

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('pixel')) {
    paintPixel(event);
  }
}, false);

clearButton.addEventListener('click', clearBoard);

// On Load

window.onload = function load() {
  setInitialColor(firstPColor);
};
