const factorial = (n) => {
  let result = n;
  for (let i = result-1; i >= 1; i -= 1) {
    result *= i;
  }
  console.log(`Esse é o fatorial ${result}`);
}
factorial(6);

// Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase “Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!”.
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.
