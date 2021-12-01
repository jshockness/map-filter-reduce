var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(num) {
  return num * 2;
}
const mapNumbers = numbers.map(double);
console.log(mapNumbers);

//Filter - Create a new array by keeping the items that return true.

function isEven(num) {
  return num % 2 == 0;
}
const filterNumbers = numbers.filter(isEven);
console.log(filterNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

function minus(accumulator, num) {
  return accumulator - num;
}
const reduceNumbers = numbers.reduce(minus);
console.log(reduceNumbers);

//Find - find the first item that matches from an array.

const findNumbers = numbers.find(function (num) {
  return num > 12;
});

console.log(findNumbers);

//FindIndex - find the index of the first item that matches.

const indexNumbers = numbers.findIndex(function (num) {
  return num > 12;
});

console.log(indexNumbers);
