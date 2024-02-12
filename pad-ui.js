const gameContainer = document.querySelector('#game-container');

const sizeBtn = document.querySelector('#change-size');

let gameBoardSize = 500;
drawGrid(60);
gameContainer.style.width = `${gameBoardSize}px`;

sizeBtn.addEventListener('click', () => {
  let gridSide;
  do {
    gridSide = prompt('How many grids per side? (Number between 2 and 100)');
  } while (2 > gridSide || gridSide > 100);
  clearGrid();
  drawGrid(gridSide);
});

function clearGrid() {
  gameContainer.innerHTML = '';
}

function drawGrid(grids) {
  let totalGrids = grids * grids;
  let boxSize = gameBoardSize / grids;
  for (let i = 0; i < totalGrids; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.style.width = `${boxSize}px`;
    square.style.height = `${boxSize}px`;
    square.addEventListener('mouseover', changeColor);
    gameContainer.appendChild(square);
  }
}

function changeColor(e) {
  // e.target.className = 'colored';
  // let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // e.target.style.backgroundColor = '#' + randomColor;
  // let rand = Math.floor(Math.random() * 256);
  let randomRGB = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  e.target.style.backgroundColor = randomRGB;
}
