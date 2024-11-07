/*Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. 
Use if-else para imprimir a respectiva mensagem.*/
const numero = prompt('Insira um valor.');
if (numero > 0) {
    console.log('O número é positivo.');
} else if (numero == 0) {
    console.log('O número é 0');
} else {
    console.log('O número é negativo.');
}