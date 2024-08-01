// Declaração de variáveis
let num1 = 5;
let num2 = 10;

// Função para somar dois números
function soma(a, c) {
    return a + c;
}

// Chamando a função soma e armazenando o resultado
let resultado = soma(num1, num2);

// Exibindo o resultado no console
console.log("O resultado da soma é: " + resultado);



// Usando um loop para iterar números de 1 a 5
for (let i = 1; i <= 5; i++) {
    // Condicional para verificar se o número é par ou ímpar
    if (i % 2 === 0) {
        console.log(i + " é par");
    } else {
        console.log(i + " é ímpar");
    }
}
  

// Manipulação básica do DOM (exibindo uma mensagem em um elemento HTML com id="mensagem")
document.getElementById("mensagem").innerText = "Olá, este é um texto inserido via JavaScript!";
