//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = parseInt(prompt("Digite um número."));
if(numero > 0){
    alert(`O número: ${numero} é positivo.`);
} else { 
    alert(`O número: ${numero} é negativo.`)
}