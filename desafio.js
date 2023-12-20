
// Definindo as variáveis
let precoEtanol = 4.19; // preço do etanol
let precoGasolina = 5.30; // preço da gasolina
let tipoCombustivel = "etanol"; // tipo de combustível no carro
let gastoMedio = 0.09; // gasto médio de combustível do carro por KM
let distanciaViagem = 150; // distância da viagem em KM

// Calculando o valor da viagem
let valorViagem;
if (tipoCombustivel == "etanol") {
    valorViagem = precoEtanol * gastoMedio * distanciaViagem;
} else if (tipoCombustivel == "gasolina") {
    valorViagem = precoGasolina * gastoMedio * distanciaViagem;
}

// Imprimindo o valor da viagem
console.log("O valor gasto para realizar esta viagem será: R$" + valorViagem.toFixed(2));
```

