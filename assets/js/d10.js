document.getElementById('rollBtn10').addEventListener('click', rollDice10);

function rollDice10() {
  var dice = document.getElementById('dice10');
  var randomNumber = Math.floor(Math.random() * 10) + 1;
  dice.innerHTML = `<img src="d10 face${randomNumber}.jpg" class="d-block w-50 img-fluid mt-3" alt="Face do Dado">`;
  
  // Mostrar o resultado em um popup
  alert(`Resultado do dado: ${randomNumber}`);
}
