const factorial = (n) => {
  let result = n;
  for (let i = result-1; i >= 1; i -= 1) {
    result *= i;
  }
  console.log(`Esse é o fatorial ${result}`);
}
factorial(6);