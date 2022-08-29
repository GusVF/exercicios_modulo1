function lucroDoProduto(valorCusto, valorVenda) {
let imposto = valorCusto * 0.2;
let custoTotal = valorCusto + imposto;
let lucro = valorVenda - custoTotal;
    
if (valorCusto < 0 || valorVenda < 0 || lucro < 0) {
        console.log("Erro: um dos valores é invalido.");
    } else if (valorCusto > 0 && valorVenda > 0) {
        console.log(lucro);
    }
}

lucroDoProduto(50,150);
