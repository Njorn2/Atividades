
let lower = 'a'; // ASCII code 97
let upper = 'A'; // ASCII code 65

console.log(lower.charCodeAt(0)); // Output: 97
console.log(upper.charCodeAt(0)); // Output: 65

console.log("ã".charCodeAt(0)); // Output: 227
console.log("Ã".charCodeAt(0)); // Output: 195

console.log(String.fromCharCode(97)); // Output: 'a'
console.log(String.fromCharCode(65)); // Output: 'A'

console.log(String.fromCharCode(227)); // Output: 'ã'
console.log(String.fromCharCode(195)); // Output: 'Ã'

// Output: abcdefghijklmnopqrstuvxwyz
function alphabet() {
    for (let i = 97; i <= 122; i++) {
        console.log(String.fromCharCode(i));
    }
}

// Output: ABCDEFGHIJKLMNOPQRSTUVXWYZ
function alphabetUpper() {
    for (let i = 65; i <= 90; i++) {
        console.log(String.fromCharCode(i));
    }
}

// Se isUpper é true, imprime: ABCDEFGHIJKLMNOPQRSTUVXWYZ
// Se isUpper é false, imprimee: abcdefghijklmnopqrstuvxwyz
function alphabetOne(isUpper) {
    for (let i = 0; i < 26; i++) {
        if (isUpper) {
            console.log(String.fromCharCode(i + 65));
        } else {
            console.log(String.fromCharCode(i + 97));
        } 
    }
}

// Se numero é 65, imprime: ABCDEFGHIJKLMNOPQRSTUVXWYZ
// Se numero é 97, imprimee: abcdefghijklmnopqrstuvxwyz
// Se numero for qualquer valor diferente de 65 ou 97, imprime: "Valor incorreto"
function alphabetNew(numero) {
    for (let i = 0; i < 26; i++) {
        if (numero === 65 ||numero === 97) {
            console.log(String.fromCharCode(i + numero));
        } else {
            console.log("Valor incorreto")
        }
    }
}

// Output: abcdefghijklmnopqrstuvxwyz
function alphabetString() {
    let alph = ""
    for (let i = 0; i < 26; i++) {
        alph = alph + String.fromCharCode(i  + 97);

    }
    return alph
}
// Output: ABCDEFGHIJKLMNOPQRSTUVXWYZ
function alphabetStringUpper() {
    let alph = ""
    for (let i = 0; i < 26; i++) {
        alph = alph + String.fromCharCode(i  + 65);

    }
    return alph
}
// Output: AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
function alphabetStringUpperLower() {
    let alph = ""
    for (let i = 0; i < 26; i++) {
        alph = alph + String.fromCharCode(i + 65)  
        alph = alph + String.fromCharCode(i + 97);
    }
    return alph
}

// Passa caracteres minusculos para maiusculos
// Eex: Input "aaaaa", Output "AAAAA"
function toUpperCase(palavra) {
    let result = "";
    for (let i = 0; i < palavra.length; i++){
        let codLetra = palavra.charCodeAt(i);
        let letra = "";
        if (codLetra >= 97 && codLetra <= 122){
            letra = String.fromCharCode(codLetra - 32);
        } else {
            letra = String.fromCharCode(codLetra);
        }
        result += letra;
    }
    return result;
}

// Passa caracteres maiusculos para minusculos
// Eex: Input "AAAAA", Output "aaaaa"
function toLowerCase(palavra){
    let result = "";
    for (let i = 0; i < palavra.length; i++) {
        let codLetra = palavra.charCodeAt(i);
        let letra = "";
        if (codLetra >= 65 && codLetra <= 90) {
            letra = String.fromCharCode(codLetra + 32);
        } else {
            letra = String.fromCharCode(codLetra);
        }
        result += letra;
    }
    return result;
}
