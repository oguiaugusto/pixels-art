// Definir paleta
for (let index = 1; index <= 4; index += 1) {
  const color = document.createElement('div');
  const pallete = document.querySelector('#color-palette');
  color.className = 'color';
  pallete.appendChild(color);
}

// Definir cores da Paleta
const pallete = document.querySelectorAll('.color');
const firstPColor = pallete[0];
const secondPColor = pallete[1];
const thirdPColor = pallete[2];
const forthPColor = pallete[3];

firstPColor.style.color = 'black';
firstPColor.style.backgroundColor = 'black';

secondPColor.style.color = '#4f58b9';
secondPColor.style.backgroundColor = '#4f58b9';

thirdPColor.style.color = '#d14a4a';
thirdPColor.style.backgroundColor = '#d14a4a';

forthPColor.style.color = '#e6c936';
forthPColor.style.backgroundColor = '#e6c936';
