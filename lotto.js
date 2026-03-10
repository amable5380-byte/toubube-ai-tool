
function generateLottoNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

function displayLottoNumbers() {
  const lottoNumbers = generateLottoNumbers();
  const lottoNumbersDiv = document.getElementById('lotto-numbers');
  lottoNumbersDiv.innerHTML = '';
  lottoNumbers.forEach(number => {
    const numberSpan = document.createElement('span');
    numberSpan.className = 'lotto-number';
    numberSpan.textContent = number;
    lottoNumbersDiv.appendChild(numberSpan);
  });
}
