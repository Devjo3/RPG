document.getElementById('rollBtn').addEventListener('click', rollDice);

function rollDice() {
  var dice = document.getElementById('dice');
  var randomNumber = Math.floor(Math.random() * 6) + 1;

  // Adiciona a classe de animação de rotação
  dice.classList.add('rotate');

  // Aguarde o tempo da animação e então remova a classe de animação
  setTimeout(function() {
    dice.classList.remove('rotate');
    // Atualiza a imagem do dado após a animação
    dice.innerHTML = `<img src="face${randomNumber}.jpg" class="d-block w-50 img-fluid mt-3" alt="dado 6">`;
  }, 1000); // 1000 milissegundos (1 segundo)
}
