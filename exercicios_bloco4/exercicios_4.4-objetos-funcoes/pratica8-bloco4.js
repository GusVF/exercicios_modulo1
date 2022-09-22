function oneEven(number1, number2, number3){
    if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0){
        return true;
    }
        return false;
}   

    console.log('Pelo menos um numero é par?')
    console.log(oneEven(20, 21, 25));