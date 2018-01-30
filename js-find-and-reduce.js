//Array.find
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let find = numbers.find(n => n == 5);

find
// => 5

//Array.reduce
let array = [1, 2, 3, 4];
let reducer = (accumulator, currentValue) => accumulator + currentValue;

array.reduce(reducer);
// => 10
