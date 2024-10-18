// const createCounter = () => {
//     let count = 0;

//     return () => {
//         return console.log(++count);
//     };
// }

// const counter1 = createCounter()
// const counter2 = createCounter()

// counter1()
// counter1()
// counter1()

// counter2()
// counter2()
// counter2()

// createCounter()

// counter1()
// counter2()

// ------------------------------------------------------

// const pow = (x, n) => {
//     if(n === 1) {
//         return x
//     } else {
//         return x * pow(x, n - 1)
//     }
// }
// console.log(pow(2, 3))
// ------------------------------------------------------

// const factorial = (x) => {
//     if (x === 1) {
//         return x
//     } else {
//         return x * factorial(x - 1)
//     }
// }
// console.log(factorial(3))