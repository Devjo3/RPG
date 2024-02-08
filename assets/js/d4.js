document.getElementById('rollBtn4').addEventListener('click', rollDice4);

function rollDice4() {
  var dice = document.getElementById('dice4');
  var randomNumber = Math.floor(Math.random() * 4) + 1;
  dice.innerHTML = `<img src="d4 face${randomNumber}.jpg" class="d-block w-50 img-fluid mt-3" alt="Face do Dado">`;
  
  // Mostrar o resultado em um popup
  alert(`Resultado do dado: ${randomNumber}`);
}
