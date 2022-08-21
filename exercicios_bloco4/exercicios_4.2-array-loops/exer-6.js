let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = [];

for ( let i = 0; i < numbers.length; i += 1) {
   if (numbers[i] % 2 !== 0){
      resultado.push(numbers[i]);
   }
}

   if (resultado === 0) {
      console.log("Nehum numero impar encontrado!");
   } else {
      console.log("Os numeros impares sao : " + resultado + '!');
   }


   
   

