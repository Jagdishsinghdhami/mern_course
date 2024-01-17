// console.log("Js Foundation course");
// let a = 1;
// a = 2;

// console.log(a);

// let firstName = "jagdish singh";
// let age = 24;
// let isMarried = true;

// if else statements

// if (isMarried) {
//   console.log(firstName + "is married ");
// } else {
//   console.log(firstName + " is not married");
// }

// Ternary operator
// isMarried
//   ? console.log(firstName + " is married ")
//   : console.log(firstName + " is not married");

// for loop : adding numbers
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// write a program prints all even numbers in array

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// const ages = [21, 22, 23, 24, 25, 26, 27];

// let evenAge = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] % 2 === 0) {
//     evenAge.push(ages[i]);
//   }
// }
// console.log(evenAge);

// Bigest number in array

//

// const personArray = ["Jagdish", "manoj", "priya"];
// const genderArray = ["male", "male", "female"];

// for (let i = 0; i < personArray.length; i++) {
//   if (genderArray[i] == "male") {
//     console.log(personArray[i]);
//   }
// }

// Objects

// const person = {
//   firstName: "jagdish",
//   age: 24,
// };
// console.log(person["firstName"]);

// array of objects :

// const allUsers = [
//   {
//     firstName: "Jagdish",
//     gender: male,
//   },
//   {
//     firstName: "Raman",
//     gender: male,
//   },
//   {
//     firstName: "priya",
//     gender: female,
//   },
// ];

// for (let i = 0; i < allUsers.length; i++) {
//   if (allUsers[i]["gender"] == "male") {
//     console.log(allUsers[i]["firstName"]);
//   }
// }

// functions :

// function sum(a, b) {
//   // do things with input and return the output
//   return a + b;
// }

// const value = sum(2, 3);
// console.log(value);

// function sum(num1, num2) {
//   let result = num1 + num2;
//   displayResult(result);
// }
// function displayResult(data) {
//   console.log("result of the sum is => ", data);
// }
// function displayResultPassive(data) {
//   console.log("sum's result is " + data);
// }

// const ans = sum(12, 23);
// console.log(ans);

// function

// function calculateAirtmetic(a, b, airthmeticFinalFunction) {
//   const ans = airthmeticFinalFunction(a, b);
//   return ans;
// }
// function sum(a, b) {
//   return a + b;
// }
// const value = calculateAirtmetic(2, 3, sum);
// console.log(value);

// setTimeout

// function greet() {
//   console.log("Hello world this is settimeout function");
// }

// setTimeout(greet, 1000);

// setInterval

// function greet() {
//   console.log("Hello world this is settimeout function");
// }

// setInterval(greet, 1000);

// find Largest Numbers

function findLargestNum(numbers) {
  let biggestElement = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggestElement) {
      biggestElement = numbers[i];
    }
  }
  return biggestElement;
}

console.log(findLargestNum([1, 2, 3, 4, 5, 9, 5, 6, 7]));
