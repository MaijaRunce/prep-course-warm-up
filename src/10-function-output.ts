export {};

function sV2 (w1:string, w2:string) {
  return `${w1} ${w2}`;
}
const result = sV2 ("hello", "world"); // concatenate two strings - 'hello', 'world', using the function above
console.log(result); // Expected output: "hello world"
