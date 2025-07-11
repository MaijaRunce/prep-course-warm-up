export {};

/**
 * Write function first5 which returns first five elements from the array
 */
// const first5 = (array:number[])=> {
//      array.slice(1, 5)
// }
// function first5 (array: number[]){
//     array.slice(1, 5)
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]; // You are NOT allowed to edit this line
const first5Numbers = first5(numbers); // You are NOT allowed to edit this line

function first5(array: number[]) {
  return array.slice(0, 5);
}

console.log(first5Numbers); // Expected result: [1, 2, 3, 4, 5]
