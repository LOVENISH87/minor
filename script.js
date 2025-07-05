function calculatePower() {
  const x = parseFloat(document.getElementById('base').value);
  const n = parseInt(document.getElementById('exponent').value);
  const resultBox = document.getElementById('result');

  // Validating input
  if (isNaN(x) || isNaN(n)) {
    resultBox.textContent = 'Please enter valid numbers.';
    resultBox.style.color = '#e74c3c';
    return;
  }

  if (x === 0 && n <= 0) {
    resultBox.textContent = 'Undefined (0 cannot be raised to 0 or negative powers)';
    resultBox.style.color = '#e74c3c';
    return;
  }

  const result = power(x, n);
  resultBox.textContent = `Result: ${result}`;
  resultBox.style.color = '#2980b9';
}

function power(x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / power(x, -n);
  if (n % 2 === 0) {
    const half = power(x, n / 2);
    return half * half;
  } else {
    return x * power(x, n - 1);
  }
}
