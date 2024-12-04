// FAZER UM JODO DE ADIVINHAÇÃO, ONDE O SISTEMA DÁ DICAS PARA O USUÁRIO SE O CHUTE DELE FOI MAIOR OU MENOR QUE O NÚMERO SORTEADO.
alert('Boas vindas ao meu jogo de adivinhação');
const NOME = prompt('Insira seu nome por gentileza.');
alert(`${NOME}, espero que se divirta!`);

const DIFICULDADE = 100;
const NUMERO = parseInt(Math.random() * DIFICULDADE + 1);
console.log(`Para fins de teste o número secreto é ${NUMERO}.`);

let chute;
let tentativas = 1;

while (chute != NUMERO) {
    chute = prompt(`${NOME} escolha um número entre 1 e ${DIFICULDADE}.`);
    if (chute == NUMERO) {
        break;

    } else {
        chute > NUMERO ? alert(`${chute} é maior que o número secreto.`) : alert(`${chute} é menor que o número secreto.`);

        tentativas++;
    }
}
const palavraTentativa = tentativas > 1 ? "tentativas!" : "tentativa!";
alert(`Parabens você acertou com ${tentativas} ${palavraTentativa}. E o número secreto é ${NUMERO}.`);