
let valorCusto = 62;
let valorVenda = 100;
let imposto = valorCusto * 0.2;

let custoReal = valorCusto + imposto;
let lucroPorItem = valorVenda - custoReal;

let lucroTotal = lucroPorItem * 1000;

if (valorCusto <= 0 || valorVenda <= 0) {
    console.log("Erro em um dos valores.");
} else {
    console.log(lucroTotal);
}
