function encontrarMaiorEMenor(num1, num2, num3) {
    let maior = num1;
    let menor = num1;

    if (num2 > maior) {
        maior = num2;
    }
    if (num3 > maior) {
        maior = num3;
    }

    if (num2 < menor) {
        menor = num2;
    }
    if (num3 < menor) {
        menor = num3;
    }

    return { maior, menor };
}

const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));
const num3 = parseFloat(prompt("Digite o terceiro número: "));

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    const resultado = encontrarMaiorEMenor(num1, num2, num3);
    console.log(`O maior número é ${resultado.maior}.`);
    console.log(`O menor número é ${resultado.menor}.`);
} else {
    console.log("Por favor, digite números válidos.");
}