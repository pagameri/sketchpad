const grid = document.querySelector('.grid');
const cells = document.getElementsByClassName('cell');
const sizeBtn = document.querySelector('button');
const side = 16;

// console.log(cells);

for (let row = 0; row < side; row++) {
  const divRow = document.createElement('div');
  divRow.innerHTML = "";
  divRow.classList = "row";
  grid.appendChild(divRow);
  for (let column = 0; column < side; column++) {
    const divColumn = document.createElement('div');
    divColumn.classList = "cell";
    divRow.appendChild(divColumn);
  }
}

function colorBox(e) {
  console.log(e.target);
  // e.target.style.backgroundColor = "blue"; // Option 1
  e.target.classList.add("hovered"); // Option 2
}

Array.from(cells).forEach((cell) => {
  cell.addEventListener('mouseenter', colorBox);
  });
