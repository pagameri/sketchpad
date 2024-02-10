const gameContainer = document.querySelector('#game-container');

for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.style.cssText = 'width: 20px; height: 20px; border: 1px solid black';
  gameContainer.appendChild(square);
}
