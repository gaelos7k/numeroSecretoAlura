//Interação com usuário.
const nameOfPlayer = prompt('Bem vindo, insira seu nome por favor.');
//Parâmetros do jogo.
const gameDificult = 50;
const secretNumber = parseInt(Math.random() * gameDificult + 1);
//Teste.
console.log(`Para fins de teste o número secreto é o ${secretNumber}`);
//Declaração de variáveis.
let kick;
let tentativas = 1;
//Condição do loop.
while (kick != secretNumber) {
    kick = parseInt(prompt(`${nameOfPlayer} escolha um número de 1 a ${gameDificult}`));
    if (kick == secretNumber) {
        break;
    } else {
        secretNumber > kick ? alert(`O número secreto é maior que ${kick}.`) : alert(`O número secreto é menor que ${kick}.`);
    }

    tentativas++;
}
//Finalização do programa.
let wordTentativas = tentativas == 1 ? 'tentativa!' : 'tentativas!';
alert(`Parábens, você acertou! E com ${tentativas} ${wordTentativas}`);