// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// const expectedResult = 20;

function containsA() {
  let listOfAs = 0;
  names.forEach((name) => {
    const spliting = name.split('');
      listOfAs += spliting.reduce((acc, curr) => {
        if(curr === 'a' || curr === 'A') {
          return acc + 1;
        }
        return acc;
      }, 0);
  });
  return listOfAs;
}
console.log(containsA());
// console.log(containsA(names));
