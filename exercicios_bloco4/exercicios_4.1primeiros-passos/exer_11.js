// Para o INSS deduzi o imposto multiplicando o salario por .11 .Depois 
//subtrai o INSS do salario. o IR foi deduzido subtraindo o INSS so salario e 
//multiplicando por .275 que e o mesmo que 27.5.% .
// Criei uma variavel 'imposto' com a soma dos impostos e criei uma var
//subtraindo a 'let impostos' do salario.
let salario = 5000;
let inss = salario * .11;
let ir = (salario - inss)* .275;
let impostos = inss + ir;

let salarioLiquido = salario - impostos;
console.log (salarioLiquido);

