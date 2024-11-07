/* Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
Caso contrário, mostre "Boa semana!".*/
let dia = prompt("Qual dia da semana estamos?");
if (dia === "Sábado".toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) { 
    /* Depois da string "Sábado" tem alguns métodos para identificar o que o usuário digitou
    sem considerar a case sensitive de maiúsculas e a acentuação. .toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""*/
    alert("Bom final de semana!");
} else if (dia === "Domingo".toLowerCase()) {
    alert("Bom final de semana!");
} else {
    alert("Boa semana!");
};