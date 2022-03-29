// Event Listener nos pixels
function pixelListener({ target }) {
  const pixel = target;
  const selectedColorPixel = document.getElementsByClassName('selected')[0];
  const selectedColor = window
    .getComputedStyle(selectedColorPixel)
    .getPropertyValue('background-color');

  pixel.style.backgroundColor = selectedColor;
}

// Seta o tamanho do quadro
const board = document.getElementById('board');
function setBoard(size) {
  while (board.children.length !== 0) board.removeChild(board.lastChild);
  document.getElementById('board-size-input').value = size;

  for (let i = 1; i <= size; i += 1) {
    const boardRow = document.createElement('div');
    for (let j = 1; j <= size; j += 1) {
      const boardCol = document.createElement('div');
      boardCol.className = 'board-col borders';
      boardCol.addEventListener('click', pixelListener);
      boardRow.appendChild(boardCol);
    }
    boardRow.className = 'board-row';
    board.appendChild(boardRow);
  }
}

// Mostra ou esconde mensagem de erro do tamanho do input e só aceita números
const boardSizeInput = document.getElementById('board-size-input');
const saveSettings = document.getElementById('save-settings');
boardSizeInput.addEventListener('keyup', ({ target: { value: size } }) => {
  const errorMsg = document.querySelectorAll('.board-settings p')[1];

  if (!size.match(/^\d+$/)) {
    boardSizeInput.value = '';
  } else if (size < 2 || size > 15) {
    errorMsg.classList.remove('hide');
    saveSettings.disabled = true;
  } else {
    errorMsg.classList.add('hide');
    saveSettings.disabled = false;
  }
});

// Ao salvar as configurações, o tamanho do quadro é alterado
saveSettings.addEventListener('click', () => setBoard(boardSizeInput.value));
boardSizeInput.addEventListener('keydown', ({ key, target: { value } }) => {
  if (key === 'Enter') setBoard(value);
});

// Selecionar cores
function selectColor({ target }) {
  const currSelected = document.getElementsByClassName('selected')[0];
  currSelected.classList.remove('selected');
  target.classList.add('selected');
}

// Trocar cores
const colorPicker = document.getElementById('color-picker');
function changeColor({ target }) {
  const color = target;
  color.style.backgroundColor = colorPicker.value;
}

// Seta cores
const boardColors = document.getElementById('board-colors');
function setBoardColors() {
  const basicColors = ['black', 'red', 'blue', 'green'];
  basicColors.forEach((basicColor, i) => {
    const boardColor = document.createElement('div');
    boardColor.className = 'board-color';
    boardColor.style.backgroundColor = basicColor;

    if (i === 0) boardColor.classList.add('selected');
    boardColor.addEventListener('click', selectColor);
    boardColor.addEventListener('dblclick', changeColor);

    boardColors.appendChild(boardColor);
  });
}

// Remove bordas
const removeBordersButton = document.getElementById('remove-borders');
removeBordersButton.addEventListener('click', () => {
  const cols = document.querySelectorAll('.board-col');
  cols.forEach((col) => {
    col.classList.toggle('borders');
  });
});

// Limpar pixels
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
  const cols = document.querySelectorAll('.board-col');
  cols.forEach((column) => {
    const col = column;
    col.style.backgroundColor = 'white';
  });
});

window.onload = () => {
  setBoard(5);
  setBoardColors();
};
