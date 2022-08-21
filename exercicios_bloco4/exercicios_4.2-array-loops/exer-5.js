let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let indexMaior = 0;

for(let i = 0; i < numbers.length; i += 1){
   if(numbers[i] > indexMaior){
    indexMaior = numbers[i]
   }
}

console.log(indexMaior);