document.getElementById('flipBtn').addEventListener('click', flipCoin);

function flipCoin() {
  var coin = document.getElementById('coin');
  var randomNumber = Math.random();
  var result;

  // Se o número aleatório for inferior a 0.5, é cara, senão, coroa
  if (randomNumber < 0.5) {
    result = 'cara';
  } else {
    result = 'coroa';
  }

  // Atualiza a imagem da moeda para mostrar o resultado
  coin.innerHTML = `<img src="${result}.jpg" class="d-block w-50 img-fluid mt-3" alt="${result}">`;
}
