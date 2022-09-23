const numberBet = (number, bettedNumber) => number === bettedNumber;

const resultado = (bettedNumber, callBack) => {
    const number = Math.floor((Math.random() * 5))+1;
    console.log(number);
    return callBack (bettedNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
}
console.log(resultado(2, numberBet));


