let pecaXadrez = 'Mario';

switch (pecaXadrez.toLowerCase()) {
  case 'rei':
    console.log("Rei -> qualquer direcao, uma casa por vez.");
    break;
  case 'dama':  
    console.log("Dama -> qualquer direcao, quantas casas quiser.");
    break;
  case 'torre':
    console.log("Torre -> vertical e horizontal, quantas casas quiser.");
    break;
  case 'bispo':
    console.log("Bispo -> diagonal.");
    break;
  case 'cavalo':
    console.log("Cavalo -> move em 'L'.");
    break;
  case 'peao':
    console.log("Peao -> move uma casa para a frente.");
    break;
  default:
    console.log("Erro, peca invalida.");         
}