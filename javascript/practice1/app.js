// 1. what are the possible ways too create objects in javascript.

// 1. Object literal syntax : set of name value pairs

// var object = {
//   name:"Jagdish singh",
//   age:34
// }

// 2. Object constructor

// var object = new Object()

// 3. Object create method

// var object = Object.create(null);

// 4. function constructor :

// function Person(name) {
//   this.name = name;
//   this.age = 21;
// }
// var object = new Person("jagdish singh");

// console.log(object);

// 5. es6 class syntax
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// var object = new Person("jagdish singh");
// console.log(object);

// Call , apply, Bind

//  call : the call() methods invokes a function with a given this value and arguments provided one bye one

// const employee1 = {
//   firstName: "Jagdish",
//   lastName: "dhami",
// };

// const employee2 = {
//   firstName: "Jazz",
//   lastName: "singh",
// };

// function invite(greeting1, greeting2) {
//   console.log(`${greeting1} ${this.firstName} ${this.lastName} ${greeting2}`);
// }

// console.log(invite.call(employee1, "Hello", "How are you?"));

// apply : invokes the function with a given this value and allows you to pass in arguments in array

// const employee1 = {
//   firstName: "Jagdish",
//   lastName: "dhami",
// };

// const employee2 = {
//   firstName: "Jazz",
//   lastName: "singh",
// };

// function invite(greeting1, greeting2) {
//   console.log(`${greeting1} ${this.firstName} ${this.lastName} ${greeting2}`);
// }

// console.log(invite.apply(employee2, ["Hello", "How are you?"]));

// bind : bind returns a new function allowing you to pass any numbers of an arguments

// const employee1 = {
//   firstName: "Jagdish",
//   lastName: "singh",
// };

// const employee2 = {
//   firstName: "Jazz",
//   lastName: "dhami",
// };

// function invite(greeting1, greeting2) {
//   console.log(`${greeting1} ${this.firstName} ${this.lastName} ${greeting2}`);
// }

// const inviteEmployee1 = invite.bind(employee1);
// const inviteEmployee2 = invite.bind(employee2);

// console.log(inviteEmployee1("hiii", "whatsapp rey"));

// array.slice methods

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let arrSlice1 = arr.slice(0, 5);
// let arrSlice2 = arr.slice(2, 9);
// let arrSlice3 = arr.slice(4);

// console.log(arrSlice1);
// console.log(arrSlice2);
// console.log(arrSlice3);

// array.splice methods

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let arrSplice1 = arr.splice(0, 2);
// let arrSplice2 = arr.splice(3);
// let arrSplice3 = arr.splice(2, 1, "a", "b", "c", "d");

// console.log(arrSplice1);
// console.log(arr);
// console.log(arrSplice2);
// console.log(arr);
// console.log(arrSplice3);
// console.log(arr);

// first class functions : In javascript, functions are first class objects. firstclass function means when functionin that language are treated like any other varible.
// const handler = () => console.log("This is a click handler functions");
// document.addEventListener("click", handler());

// first order function : a first ordder function is a function that doesn't accept another function as an arguments and doesn't return a function as its return value

// const firstOrder = () => console.log("I am a first order function");
// firstOrder();

// heigher order function : a heigher order function  isa  function that accepts another function as an arguments or returns a function as a return value or both

// const heighrOrderFunc = () => console.log("Hello, I am a first Order Function");

// const heighrOrder = (returnFirstOrderFunction) => returnFirstOrderFunction();

// heighrOrder(heighrOrderFunc);

// hoisting in javascript

// var message;
// console.log(message);
// message = "the variable has been hoisted";

// classes in ES6

// class Bike {
//   constructor(color, model) {
//     this.color = color;
//     this.model = model;
//   }
//   getDetails() {
//     return `${this.model} bike has ${this.color}  color`;
//   }
// }

// const newBike = new Bike("red", "metyor");

// console.log(newBike.getDetails());

//  closure in javascript

// function welcome(name) {
//   var greetingInfo = function (message) {
//     console.log(message + " " + name);
//   };
//   return greetingInfo;
// }
// var myFunction = welcome("jagdish");
// myFunction("welcome");
// myFunction("mr.");

// Greatest number in function

// function heighesNum(...numbers) {
//   let BigNum = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (BigNum < numbers[i]) {
//       BigNum = numbers[i];
//     } else {
//       BigNum;
//     }
//   }
//   return BigNum;
// }

// console.log(heighesNum(4, 5, 7, 8, 35, 3, 5, 87, 6, 2));

// Greatest number in function in array

// function heighestNum(number) {
//   let BigNum = number[0];
//   for (let i = 0; i < number.length; i++) {
//     BigNum < number[i] ? (BigNum = number[i]) : BigNum;
//   }
//   return BigNum;
// }

// console.log(heighestNum([2, 5, 64, 3, 64, 3, 513, 224, 6, 4]));

// How to remove duplicate numbers in function without using set function

// function duplicateNum(...numbers) {
//   const removeDuplNum = numbers.filter((val, index, arr) => {
//     return arr.indexOf(val) == index;
//   });
//   return removeDuplNum;
// }

// console.log(
//   duplicateNum(1, 2, 3, 43, 2, 2, 5, 7, 87, 6, 5, 47, 87, 6, 5, 9, 8, 7, 6)
// );

// how many times duplicate number is given

// function duplicateNum(...numbers) {
//   let counts = {};
//   // count occurence in each number
//   numbers.forEach((num) => {
//     counts[num] = (counts[num] || 0) + 1;
//   });
//   return counts;

// }

// function duplicateNum(...numbers) {
//   let counts = {};
//   // count occurence in each number
//   numbers.forEach((num) => {
//     counts[num] = (counts[num] || 0) + 1;
//   });
//   // filter unique numbers

//   const uniqueNumbers = Object.keys(counts).map(Number);

//   // Create an array of objects with number and count properties
//   const result = uniqueNumbers.map((num) => ({
//     number: num,
//     count: counts[num],
//   }));

//   return result;
// }

// console.log(
//   duplicateNum(1, 2, 3, 43, 2, 2, 5, 7, 87, 6, 5, 47, 87, 6, 5, 9, 8, 7, 6)
// );

// Promise

// const promise = new Promise(function(resolve, reject){

// })
const promise = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve("I'm a Promise!");
    }, 5000);
  },
  (reject) => {}
);

promise.then((value) => console.log(value));
