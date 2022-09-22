function oneOdd(number1, number2, number3){
    if (number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0){
        return true;
    }
        return false;
}   

    console.log('Pelo menos um numero é impar?')
    console.log(oneOdd(20, 22, 26));