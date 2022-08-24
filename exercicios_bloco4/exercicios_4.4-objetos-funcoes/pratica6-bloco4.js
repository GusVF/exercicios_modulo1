function chessPiece(piece){
    switch (piece.toLowerCase()) {
        case 'rei':
          return('Rei-> Uma casa apenas para qualquer direção.');
          break;
        case 'bispo':
          return('Bispo-> Diagonal.');
          break;
        case 'rainha':
          return('Rainha-> Diagonal, horizontal e vertical.');
          break;
        case 'cavalo':
          return('Cavalo -> "L" pode pular sobre as peças.');
          break;
        case 'torre':
          return('Torre -> Horizontal e vertical.');
          break;
        case 'peão':
          return("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
          break;
        default:
          return('Erro, peça inválida!');
          break;
}
}

console.log(chess('xablau'));