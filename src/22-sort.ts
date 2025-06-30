export {};

const letters = ["a", "n", "c", "e", "z", "f"];
let sortedLetters = letters.sort((a, b) => a > b ? 1:-1)
; // You are allowed to change only this line

console.log(sortedLetters); // Expected output: [ 'a', 'c', 'e', 'f', 'n', 'z' ]
