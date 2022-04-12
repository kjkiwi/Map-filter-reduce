//var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);

// console.log(newNumbers);

//using forEach
// //declare an empty array variable
// var newNumbers = [];
// //declare the double function, pushing the result into newNumbers
// function double(x) {
//   newNumbers.push(x * 2);
// }
// //pass the double function into the forEach loop
// numbers.forEach(double);
// //log it
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
//var numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.filter(function (num) {
//   return num > 10;
// });

// console.log(newNumbers);

//using forEach
// var newNumbers = [];

// numbers.forEach(function (num) {
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// });
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
var numbers = [3, 56, 2, 48, 5];

// //using forEach
// //create a new variable and set it to 0
// var newNumber = 0;
// //pass an anonymous function into numbers.forEach
// numbers.forEach(function (currentNumber) {
//   //on each loop through, the value of newNumber is
//   //replaced by the currentNumber plus whatever newNumber was on the last round
//   newNumber += currentNumber;
// });
// //log the last newNumber
// console.log(newNumber);

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
