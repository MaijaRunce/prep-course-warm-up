export {};

/**
 * Complete the function to check if passed argument satisfies the following:
 *
 *  - is a number
 *  - is an integer (not a float)
 *  - is not equal to any of the numbers in the array `excludedNums`
 */

const excludedNums = [6, 14, 91, 111];

// You are allowed to edit only this function
function validate(value?: number|string): boolean {
  if (isNaN(Number(value))){
    return  false
  }

  if (!Number.isInteger(value)){
    return  false
  }
  
  return !excludedNums.some((n) => n === value)
 
}

console.log(validate(6));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-91));
console.log(validate("16ff"));

/* 
  Expected output:
  
    false
    false
    true
    true
    false
*/
