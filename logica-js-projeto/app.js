let nome = prompt("Por favor digite seu nome.")//adicionei para maior interessão com o usuário.
alert(`Olá ${nome}, boas vindas ao meu jogo do número secreto.`);//adicionei para maior interessão com o usuário.
let tamanhoNumeroSecreto = 1000;//adicionei para quando eu alterar o numero secreto, mudar no alert do chute e na multiplação do Math.random;
let numeroSecreto = parseInt(Math.random() * tamanhoNumeroSecreto + 1);
console.log(numeroSecreto);

let chute; // = parseInt(prompt("Escolha um número de 1 a 10")); Desconsiderado no momento de implementar o while
//console.log(`O Chute é: ${chute}`); EXERCICIO para teste no console - registro
//console.log(numeroSecreto === chute); EXERCICIO para teste no console - true(boolean)
let tentativas = 1;
while (chute != numeroSecreto)  //while= enquanto. abaixo está a estrutura de repetição.
{
    chute = prompt(`Escolha um número de 1 a ${tamanhoNumeroSecreto}`);// ${tamanhoNumeroSecreto} adicionada para aletrar junto com o n.s
    if (chute == numeroSecreto) {
        break;//para o while(); e o que está lá fora das chaves acontece.
        //console.log(`O número secreto é: ${numeroSecreto}`); EXERCICIO para teste no console - registro
    } else {
        if (chute > numeroSecreto)
            alert(`Você errou! O número ${chute} é maior que o número secreto.`);
        else {
            alert(`Você errou! O número ${chute} é menor que o número secreto.`);
        }
        //console.log(`Valor do número secreto: ${numeroSecreto}`); EXERCICIO para teste no console - registro
        //tentativas = tentativas + 1 mesma coisa que a linha de baixo 
        tentativas++; //++ para atribuir 1
    }

}
let palavraTentativa = tentativas > 1 ? "tentativas." : "tentativa." //operador ternário(?xxx:xxx). Veja que a baixo teria uma estrutra maior que foi substituida
alert(`Isso aí! Você descobriu o número secreto. (${numeroSecreto}) com ${tentativas} ${palavraTentativa}`);
/*if (tentativas > 1) {
    alert(`Isso aí! Você descobriu o número secreto. (${numeroSecreto}) com ${tentativas} tentativas.`);
} else {
    alert(`Isso aí! Você descobriu o número secreto. (${numeroSecreto}) com ${tentativas} tentativa.`);
}*/


/* VERIFICAR SE O USUÁRIO INSERIU STRING E FALAR PARA ELE COLOCAR UM NÚMERO*/