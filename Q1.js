function verificarDivisibilidade(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

const numero = parseInt(prompt("Digite um número inteiro:"));

if (!isNaN(numero)) {
    if (verificarDivisibilidade(numero)) {
        console.log(`${numero} é divisível por 3 e por 5.`);
    } else {
        console.log(`${numero} não é divisível por 3 e por 5.`);
    }
} else {
    console.log("Por favor, digite um número inteiro válido.");
}