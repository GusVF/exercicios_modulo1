const anguloA = 160;
const anguloB = 60;
const anguloC = 60;
const triangulo = anguloA + anguloB + anguloC;
const angulosPositvos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosPositvos) {
    if(triangulo === 180){
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log('Digite apenas numeros positivos.')
}
    