

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
