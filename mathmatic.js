let target = 100;

for (let i = 0; i < 100; i++) {
    console.log("Number:", i);
}

let x = 10;
if (x < 10) {
    console.log("O valor de X é menor que 10");
} else {
    console.log("O valor de X é maior ou igual a 10");
}

let idade = 18;
let licensa = true;
if (idade >= 18 && licensa === true) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}

let temperatura = 5;
let chovendo = false;
if (temperatura <= 10 || chovendo === true) {
    console.log("Hoje é um ótimo dia para ficar em casa jogando. 😁")
} else {
    console.log("Oh my god! Terei que trabalhar. 😞")
}

let temperature = 25;
if (temperature > 30) {
    console.log("Hoje está muito calor! Terei que ir trabalhar para aproveitar o ar Condicionado! :/");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("Hoje ta gostosin, dia de jogar xD.");
} else {
    console.log("Hoje está muito frio. Terei que ficar em casa e jogar. :/");
}