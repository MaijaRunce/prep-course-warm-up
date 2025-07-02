export {};

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const sum = (a: number, b: number, c: number): number => {
  return a + b + c;
};

const multiply = (a: number, b: number, c: number) => {
  return a * b * c;
};

function power(a: number, b: number): number {
  return Math.pow(a, b);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum(...([1, 2, 3] as const))); // Expected output: 6
console.log(multiply(...([1, 2, 3] as const))); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
