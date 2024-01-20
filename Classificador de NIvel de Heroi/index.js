function classificarNivelHeroi(nome, pontuacaoXP) {
    var nivel;

    if (pontuacaoXP < 1000) {
        nivel = "Ferro";
    } else if (pontuacaoXP >= 1001 && pontuacaoXP <= 2000) {
        nivel = "Bronze";
    } else if (pontuacaoXP >= 2001 && pontuacaoXP <= 5000) {
        nivel = "Prata Ouro";
    } else if (pontuacaoXP >= 5001 && pontuacaoXP <= 8000) {
        nivel = "Platina Diamante";
    } else if (pontuacaoXP >= 8001 && pontuacaoXP <= 9000) {
        nivel = "Ascendente";
    } else if (pontuacaoXP >= 9001 && pontuacaoXP <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    return nome + " possui " + pontuacaoXP + " pontos de XP e é um herói de nível " + nivel + ".";
}

// Resultados da aplicação
var nomeHeroi = "Batman";
var pontuacaoXP = 10001;
var resultado = classificarNivelHeroi(nomeHeroi, pontuacaoXP);
console.log(resultado);
