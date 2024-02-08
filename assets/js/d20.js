document.getElementById('rollBtn20').addEventListener('click', rollDice20);

function rollDice20() {
  var dice = document.getElementById('dice20');
  var randomNumber = Math.floor(Math.random() * 20) + 1;
  var imageUrl = `d20 face${randomNumber}.jpg`;
  dice.innerHTML = `<img src="${imageUrl}" class="d-block w-50 img-fluid mt-3" alt="Face do Dado">`;

  // Mostrar o resultado em um popup
  alert(`Resultado do dado: ${randomNumber}`);
}
