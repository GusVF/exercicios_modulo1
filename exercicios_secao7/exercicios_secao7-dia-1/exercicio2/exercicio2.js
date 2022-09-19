// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.
// longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const PickBigWord = (longestWord) => {
  const wordArray = longestWord.split(' ');
  let longWord = '';
  for (let i = 0; i < wordArray.length; i += 1) {
  if (wordArray[i].length > longWord.length) {
    longWord = wordArray[i];
    }
  }
  console.log(longWord);
}

PickBigWord('Antônio foi ao banheiro e não sabemos o que aconteceu');
