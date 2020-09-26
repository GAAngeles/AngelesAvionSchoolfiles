//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = "Hello World" ;

//create a number variable, it an be any number
const newNum = 14;

//create a boolean variable
const newBool = true;

//solve the following math problem
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40;

//Solve the following math problem:
const newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

//Example 1:
function returnString(str) {
  //simply return the string provided: str
return str;
}

function add(a, b) {
  // x and y are numbers
  // add x and y together and return the value
  // code here
  const sum = a + b;
  return sum;
}

//console.log(add(10, 4))

function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  const difference = x - y;
  return difference;
}

//console.log(subtract(18, 4))

function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  const product = x * y;
  return product;
}

console.log(multiply(7, 2))

function divide(x, y) {
  // divide x by y and return the value
  // code here
  const quotient = x / y;
  return quotient;
}

console.log(divide(28, 2))

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // code here
  return x === y;
}
console.log(areEqual(14, 14))

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  if (str1.length == str2.length) {
    return true
  } else {
    return false
  }
  
}

console.log(areSameLength("dog", "cat"))

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here
 const lessThanNinety = num < 90;{
  if (num < 90) {
    return true
  } else {
    return false
  }
 }
}

console.log(lessThanNinety(60))

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
 const greaterThanFifty = num > 50;{
  if (num > 50) {
    return true
  } else {
    return false
  }
}}

console.log(greaterThanFifty(49))

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
 const remainder = x % y;
 return remainder
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
if (num % 2 == 0) {
  return true
} else {
  return false
}
}

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // code here
if (num % 2 != 0) {
  return true
} else {
  return false
}
}

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
const square = Math.pow(num,2);
return square;
}

function cube(num) {
  // cube num and return the new value
  // code here
 const cube = Math.pow(num,3);
  return cube;
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
 const raiseToPower = Math.pow(num,exponent);
  return raiseToPower;
}

function roundNumber(num) {
  // round num and return it
  // code here
 const  roundNumber = Math.round(num);
  return roundNumber;
}

function roundUp(num) {
  // round num up and return it
  // code here
  const roundUp = Math.ceil(num);
  return roundUp;
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
 console.log(newString + '!');
}
addExclamationPoint('hello')

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Avion', 'School' -> 'Avion School'
  // code here
console.log(firstName + ' ' + lastName);
}

const firstName = 'Avion'
const lastName = 'School'


function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
console.log('Hello' + name + ' ' + '!');
}
const name = Gab

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  const product = length * width;
  return product;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  const product = base * height;
  return product;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};