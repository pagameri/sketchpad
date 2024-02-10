const gameContainer = document.querySelector('#game-container');

for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.style.cssText = 'width: 20px; height: 20px; border: 1px solid black';
  square.addEventListener('mouseenter', changeColor);
  gameContainer.appendChild(square);
}

function changeColor(e) {
  // e.target.className = 'colored';
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  e.target.style.backgroundColor = '#' + randomColor;
}
