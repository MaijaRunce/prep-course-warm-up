export {};

/**
 * So far you've been working with numeric and textual data using JS data types - numbers
 * and strings. But there are many more data types in JS. One of them is arrays.
 * Here are a few resources that might help to better understand what arrays are for:
 *  - https://www.w3schools.com/js/js_arrays.asp
 *  - https://javascript.info/array
 */
const stringToArray = (fullName: string[]) => {
    if (fullName.length < 1) {
        return null
    }

    const formattedArray: string[] = []

    fullName.map((n) => formattedArray.push(...n.split(" ")))

    return formattedArray
}

console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe']
console.log(stringToArray(["John Doe", "Maija Punce"])); // Expected output: ['John', 'Doe', 'Maija', 'Punce']
console.log(stringToArray(["John Doe", "Maija Dunce"])); // Expected output: ['John', 'Doe', 'Maija', 'Dunce']


//Destructuring example

const boys = ["boy1", "boy2", "boy3"]
const girls = ["girls1", "girls2", "girls3"]
const school = [...boys, ...girls]

console.log(school)