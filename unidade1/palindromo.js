const palavraPalindromo = function (palavra) {
    const palavraSeparada = palavra.split("");
    let palavraReversa = palavraSeparada.reverse("");
    palavraReversa = palavraReversa.join("");

    if (palavra != palavraReversa) {
        console.log(`A palavra: ${palavra} não é um palíndromo!`);
    } else {
        console.log(`A palavra: ${palavra} é um palíndromo!`);
    }
}

palavraPalindromo("Radar".toLowerCase());