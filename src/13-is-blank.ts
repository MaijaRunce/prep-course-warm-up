export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */

function isBlank(name: string | null ){
    if (name && name.length > 0) {
        if(!name.trim()){ 
            return true
        }
        return false
    }

    return true
}

console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false