function biggerOf3(num1, num2, num3) {
    if (num1 > num2 && num1 > num3){
        return num1 + ' é o maior numero!';
    } else if (num2 > num1 && num2 > num3){
        return num2 + ' é o maior numero!';
    }
       return num3 + ' é o maior numero!';
}

console.log(biggerOf3(223 ,133 ,43));