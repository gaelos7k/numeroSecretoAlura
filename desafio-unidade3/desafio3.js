//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numero = parseInt(prompt("Insira um número para a contagem regressiva"));
let numeroEstatico = numero;
while (numero >= 0) {
    console.log(`Contagem regressiva de ${numeroEstatico} é: ${numero}`);
    numero--;
}
//indo pelo caminho mais díficil kkkkk