let score1 = 0;
let score2 = 0;

function updateDisplay() {
  document.getElementById('score1').textContent = score1;
  document.getElementById('score2').textContent = score2;
}

function addScore(player) {
  if (player === 1) score1++;
  else if (player === 2) score2++;
  updateDisplay();
}
