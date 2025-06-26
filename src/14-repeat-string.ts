export {};

// function repeatStringBasicFunction(str: string, num: number) {
//   return str.repeat(num);
// };

const repeatStringArrowFunction = (str: string, num: number) => {
  return str.repeat(num);
};

console.log(repeatStringBasicFunction("a", 4)); // Expected output: 'aaaa'
console.log(repeatStringArrowFunction("b", 5)); // Expected output: 'bbbbb'
