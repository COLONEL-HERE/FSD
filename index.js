//By this we can enclose the entire function into a variable.
let isEven = function (num) {
    return num % 2 === 0;    
}

// console.log(isEven(0));
//If we don't write return, then its



// console.log(typeof(0.0));
// console.log(typeof(0));
// console.log(typeof('0'));

let result = [2,4,6].every(e => {e%2 == 0}); //every is a keyword and it checks this condition on every element on the function.
console.log(result);