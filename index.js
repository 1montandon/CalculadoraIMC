let resultado = document.getElementById("resultado");
let texto = document.getElementById("texto");
let nome = document.getElementById("nome");
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");

function calcula_imc() {
  let imc = (peso.value / (altura.value * altura.value)).toFixed(2);

  if (imc < 15.99) {
    resultado.innerHTML = `Olá ${nome.value}!</br>
        seu imc é ${imc}, voce está em estado de Magraza Grave!`;

    resultado.id = "resultado-magreza-extrema";
    texto.id = "texto-magreza-extrema";

  } else if (imc <= 16.99) {
    resultado.innerHTML = `Olá ${nome.value}!</br>
        seu imc é ${imc}, voce está em estado de Magreza Moderada!`;

    resultado.id = "resultado-magreza-moderada";
    texto.id = "texto-magreza-moderada";

  } else if (imc <= 18.5) {
    resultado.innerHTML = `Olá ${nome.value}!</br>
        seu imc é ${imc}, voce está em estado de Magreza Leve!`;

    resultado.id = "resultado-magreza-leve";
    texto.id = "texto-magreza-leve";

  } else if (imc <= 24.9) {
    resultado.innerHTML = `Olá ${nome.value}!</br>
        seu imc é ${imc}, voce está saudavel!`;

    resultado.id = "resultado-saudavel";
    texto.id = "texto-saudavel";

  } else if (imc <= 29.9) {
    resultado.innerHTML = `Olá ${nome.value}!</br>
        seu imc é ${imc}, voce está com sobrepeso!`;

    resultado.id = "resultado-sobrepeso";
    texto.id = "texto-sobrepeso";

  } else if (imc <= 34.9) {
    resultado.innerHTML = `Olá ${nome.value}!</br>
        seu imc é ${imc}, voce está com Obesidade Grau 1!`;

    resultado.id = "resultado-obesidade1";
    texto.id = "texto-obesidade1";

  } else if (imc <= 39.9) {
    resultado.innerHTML = `Olá ${nome.value}!</br>
        seu imc é ${imc}, voce está com Obesidade Grau 2 (Severa)!`;

    resultado.id = "resultado-obesidade2";
    texto.id = "texto-obesidade2";

  } else if (imc >= 40) {
    resultado.innerHTML = `Olá ${nome.value}!</br>
        seu imc é ${imc}, voce está com Obesidade Grau 3 (Mórbida)!`;

    resultado.id = "resultado-obesidade3";
    texto.id = "texto-obesidade3";

  }
}

document.getElementById("botao").addEventListener("click", calcula_imc);
