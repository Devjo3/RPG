document.getElementById('rollBtn').addEventListener('click', rollDice);

function rollDice() {
  var dice = document.getElementById('dice');
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.innerHTML = `<img src="face${randomNumber}.jpg" class="d-block w-50 img-fluid mt-3" alt="Face do Dado">`;
}
