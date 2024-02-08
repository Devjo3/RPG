document.getElementById('rollBtn8').addEventListener('click', rollDice8);

function rollDice8() {
  var dice = document.getElementById('dice8');
  var randomNumber = Math.floor(Math.random() * 8) + 1;
  dice.innerHTML = `<img src="d8 face${randomNumber}.jpg" class="d-block w-50 img-fluid mt-3" alt="Face do Dado">`;
  
  // Mostrar o resultado em um popup
  alert(`Resultado do dado: ${randomNumber}`);
}
