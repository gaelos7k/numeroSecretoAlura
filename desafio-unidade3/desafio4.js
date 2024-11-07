//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numero = parseInt(prompt("Insira um número para a contagem progressiva"));
let i = 0;
while (i <= numero) {
    console.log(`Contagem progressiva de 0 até ${numero} é ${i}`);
    i++;
}