var jogardor = 1;
var jogador2 = 0;
var placar;

if (jogador > 0) {
    console.log("Jogador 1 marcou ponto");
} else if(jogador2 >0){
    console.log("Jogador 2 marcou ponto");
}else {
    console.log("Ninguem marcou ponto");
}


//if ternario
jogador1 < -1 && jogador2 > -1 ? console.log("os jogadordes são validos"): console.log("jogadores invalidos")

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log("jogador um marcou")
        break;
    case placar = jogador2 > jogador1:
        console.log("jogador dois marcou")
        break;

    default: 
    console.log("error")
        break;
}