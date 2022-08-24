function notaEmLetra(nota){
    if(nota >= 90){
        return 'Sua nota é: A';
    }else if (nota >= 80 && nota < 90){
        return 'Sua nota é: B';
    }else if (nota >=70 && nota < 80){
        return 'Sua nota é: C';
    }else if (nota >= 60 && nota < 70){
        return 'Sua nota é: D';
    }else if (nota >=50 && nota < 60){
        return 'Sua nota é: E';
    }
        return 'Sua nota é: F';
}

console.log(notaEmLetra(99));