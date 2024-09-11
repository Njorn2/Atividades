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