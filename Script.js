const player = document.getElementById("player");
const goal = document.getElementById("goal");

let playerPosition = { x: 0, y: 0 };

// Movimenta o jogador
function movePlayer(event) {
  const step = 10;

  switch (event.key) {
    case "ArrowUp":
      if (playerPosition.y > 0) playerPosition.y -= step;
      break;
    case "ArrowDown":
      if (playerPosition.y < 370) playerPosition.y += step;
      break;
    case "ArrowLeft":
      if (playerPosition.x > 0) playerPosition.x -= step;
      break;
    case "ArrowRight":
      if (playerPosition.x < 370) playerPosition.x += step;
      break;
  }

  player.style.transform = `translate(${playerPosition.x}px, ${playerPosition.y}px)`;

  checkWin();
}

// Verifica se o jogador alcançou o objetivo
function checkWin() {
  const distanceX = Math.abs(playerPosition.x - 350);
  const distanceY = Math.abs(playerPosition.y - 350);

  if (distanceX < 20 && distanceY < 20) {
    alert("Parabéns! Você venceu!");
    resetGame();
  }
}

// Reseta o jogo
function resetGame() {
  playerPosition = { x: 0, y: 0 };
  player.style.transform = `translate(0, 0)`;
}

window.addEventListener("keydown", movePlayer);
