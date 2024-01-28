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
// const promise = new Promise(
//   (resolve) => {
//     setTimeout(() => {
//       resolve("I'm a Promise!");
//     }, 5000);
//   },
//   (reject) => {}
// );

// promise.then((value) => console.log(value));

// callback function :

// a callback function is a function passed into another function as an arguments . this fnction is invoked into the outer function to complete an action .

// function callbackFunc(name) {
//   console.log("Hello " + name);
// }

// function outerFunction(callback) {
//   let name = prompt("Enter your name");
//   callback(name);
// }
// outerFunction(callbackFunc);

// function doAsyncOperation(data, callback) {
//   console.log("performing asyn operation with callback data " + data);

//   setTimeout(() => {
//     callback("operation complete in 2 seconds");
//   }, 2000);
// }

// function handleComption(message) {
//   console.log("callback " + message);
// }

// doAsyncOperation("some data", handleComption);

// promise chaining

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     console.log(result); // 1
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result); // 2
//     return result * 3;
//   })
//   .then(function (result) {
//     console.log(result); // 6
//     return result * 4;
//   });

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(3), 1000);
// })
//   .then(function (result) {
//     console.log(result);
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result);
//     return result * 3;
//   })
//   .then(function (result) {
//     console.log(result);
//     return result * 4;
//   });

// const Promise1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("promise 1 is resolved");
//   }, 1000);
// });

// const Promise2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("promise 2 is resolved");
//   }, 2000);
// });

// const Promise3 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("promise 3 is resolved");
//   }, 2000);
// });

// Promise.all([Promise1, Promise2, Promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.log(`Error in promises ${error}`));

// console.log(!isNaN("hiii"));
// console.log(!isNaN("1000"));
// console.log(!isNaN(100));
// console.log(!isNaN(true));
// console.log(!isNaN(false));

// var mainInndex = "Hello jagdish singh dhami";
// // console.log(mainInndex.includes("Hello"));
// console.log(mainInndex.indexOf("jagd") !== -1);

// var object = {
//   key1: "Jagdish singh",
//   key2: "Ashok singh",
//   key3: "jazz dhami",
// };
// for (var key in object) {
//   // console.log(key);
//   // console.log(object[key]);
//   if (object.hasOwnProperty(key)) {
//     console.log(key + " " + object[key]);
//   }
// }

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, "5");
// var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + "/" + dd + "/" + yyyy;
// document.write(today);

// first letter as a uppercase in function

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// console.log(capitalizeFirstLetter("jagdish singh"));

// Date and Time in javascript

// const newDate = new Date();
// console.log(newDate);
// const dd = String(newDate.getDate()).padStart(2, "0");
// const mm = String(newDate.getMonth() + 1).padStart(2, "0");
// const yy = String(newDate.getFullYear());
// console.log(dd);

// console.log(dd + " / " + mm + " / " + yy);

// var object = {
//   key1: "Jagdish singh",
//   key2: "jazz dhami",
// };
// object.key3 = "ashok singh";
// object["key4"] = "new object";
// console.log(object);

// var str =
//   "This is a \
// very lengthy \
// sentence!";

// console.log(str);

// for (i = 0; i < 10; i++) {
//   var text = "";
//   if (i === 5) {
//     continue;
//   }
//   text += "Number: " + i + "<br>";
//   console.log(text);
// }

// table of 19

// for (let i = 17; i <= 19; i++) {
//   for (j = 1; j <= 10; j++) {
//     console.log(i + " * " + j + " = " + i * j);
//   }
// }

// async await

// const p = new Promise(function (resolve, reject) {
//   resolve("promise has been solved");
// });

// async function handlePromise() {
//   const val = await p;
//   console.log(val);
// }
// handlePromise();

// Heigher order function

// const radius = [3, 1, 2, 4, 5];

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const calculateArea = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

// console.log(calculateArea(radius, area));

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// function evenNumber(number) {
//   if (number % 2 == 0) {
//     console.log("this  is even number");
//   } else {
//     console.log("this is odd number");
//   }
// }

// let number = prompt("kindly update number");
// evenNumber(number);

// map filter arrow function

// const arrMap = [1, 2, 3, 4, 5];
// without map function double the array

// const double = [];
// for (let i = 0; i < arrMap.length; i++) {
//   double.push(arrMap[i] * 2);
// }

// console.log(double);

// const doubleValue = arrMap.map((val) => {
//   return val * 2;
// });
// console.log("double value ", doubleValue);
// console.log("arrMap ", arrMap);

// filter methods

// const arrFilter = ["jagdish", "singh", "dhami"];

// const filterMethod = arrFilter.filter((val) => {
//   if (val.includes("jags")) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(arrFilter);
// console.log(filterMethod);

// function randomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomInteger(5, 100));

// const user = {
//   name: "jagdish singh",
//   age: 24,
//   gender: "male",
// };
// console.log(Object.entries(user));

// create an objet with prototype

// let User = {
//   name: "Jagdish singh",
//   printInfo: function () {
//     console.log(`Hello my name is ${this.name}`);
//   },
// };

// const admin = Object.create(User);
// admin.name = "jazz dhamii";
// admin.printInfo();
// User.printInfo();
// console.log(User);
// console.log(admin);

// encode url

// var uri = "https://mozilla.org/?x=jkghghhj";
// var encoded = encodeURI(uri);
// console.log(encoded); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B

// const newObject = {};

// Object.defineProperty(newObject, "newProperty", {
//   value: 100,
//   writable: false,
// });
// newObject.newProperty = 200;
// console.log(newObject.newProperty);

// class Employee {
//   constructor() {
//     this.name = "Jagdish singh";
//   }
// }
// var employeeObject = new Employee();

// console.log(employeeObject.name);
// console.log(Employee.name);

// function func1() {
//   console.log("This is a first definition");
// }
// function func1() {
//   console.log("This is a second definition");
// }
// func1();

// console.log(`This is string sentence
// 'This is string sentence 2`);

// let arr = [1, 2, 3, 4, 5, -6, 7];
// arr.length = 0;
// console.log(arr);

// function verifyAnagrams(word1) {
//   return word1.split("").sort();
// }
// console.log(verifyAnagrams("ate"));

// let cities = ["Singapore", "Delhi", "London"];
// cities.length = 0; // cities becomes []
// console.log(cities);

function factorial(n, acc = 1) {
  if (n === 0) {
    return acc;
  }
  return factorial(n - 1, n * acc);
}
console.log(factorial(5)); //120
