const grid = document.querySelector('.grid');

function changeColor() {
  const cells = document.getElementsByClassName('cell');
  Array.from(cells).forEach((cell) => {
    cell.addEventListener('mouseenter', e => {
      e.target.classList.add("hovered");
    });
  });
}

function removeGrid(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function drawGrid(size) {
  for (let row = 0; row < size; row++) {
    const divRow = document.createElement('div');
    divRow.innerHTML = "";
    divRow.classList = "row";
    grid.appendChild(divRow);
    for (let column = 0; column < size; column++) {
      const divColumn = document.createElement('div');
      divColumn.classList = "cell";
      divRow.appendChild(divColumn);
    }
  }
  changeColor();
}

function getGridSize() {
  sideLength = prompt("How many boxes should each side have? (between 1 and 100)", 16);
 if (sideLength === null) {
  return;
} else if (sideLength < 1 || sideLength > 100) {
    getGridSize();
  }
  removeGrid(grid);
  drawGrid(sideLength);
}


function newGrid() {
  const sizeBtn = document.querySelector('.size');
  sizeBtn.addEventListener('click', getGridSize);
}

function playGame() {
  drawGrid(16);
  newGrid();
}

playGame();
