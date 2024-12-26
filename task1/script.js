// 1
// Write a program that prompts the user to input the 
// following details:
// Name: A simple string for the user's name.:
// Age: An integer for the user's age.
// Favorite Color: A string for the user's favorite color.
// City: A string for the city where the user lives.
// then output a personalized message in the following format:
// Enter your name: Alice

// Enter your age: 30

// Enter your favorite color: Blue

// Enter your city: New York

// Sample Input
// Hello Alice! You are 30 years old, your favorite color is Blue, and 
// you live in New York.


// let username = prompt("Enter your User name");

// let age = prompt("Enter your Age")

// let favColor = prompt("Enter your Fav color")

// let city = prompt("Enter your City")



// console.log(`Hello ${username}! You are ${age} years old, your favorite color is ${favColor}, and 
//  you live in ${city}.`)



// 2
// Write a program that takes minutes as input, and 
// display the total number of hours a minutes . 
// Enter the number of minutes : 150
// Sample Input
// Total hours: 2 hours and 30 minute


// let min = prompt("Enter your number in minutes")  


//  function convert(minutes) {
//     const hours = Math.floor(minutes / 60); 
//     const remainingMinutes = minutes % 60; 
  
//     console.log(`Total hours: ${hours} hours and ${remainingMinutes} minutes`);
//   }
  
//   convert(min);
  


// 3
// Create a program that takes a student's score as 
// input and assigns a letter grade (A, B, C, D, or F) 
// based on a grading scale. 
// Enter the score : 90
// Sample Input
// A
// Sample Output
// S h e r y i a n s c o d i n g s c h o o l
// 90 - 100 : A
// 75 - 90 : B 
// 60 - 75 : C
// 50 - 60 : D
// 35 - 50 : E 
// less than 35 : fail


// let score = prompt("Enter your score")  
// // Function to determine the grade based on the score
// function assignGrade(score) {
//     if (score >= 90 && score <= 100) {
//       console.log('A') 
//     } else if (score >= 75 && score < 90) {
//       console.log('B') 
//     } else if (score >= 60 && score < 75) {
//       console.log('C') 
//     } else if (score >= 50 && score < 60) {
//       console.log('D') 
//     } else if (score >= 35 && score < 50) {
//       console.log('E') 
//     } else if (score < 35) {
//       console.log('Fail') 
//     } else {
//       console.log('Invalid Score')
//     }
//   }
  
  

  
//   console.log("Sheriyans Coding School");
//   const grade = assignGrade(score);
//   console.log(`Score: ${score}`);

  
//   4
// Make a Calculator. Take 2 numbers (a & b) from the 
// user and an operation as follows :
// Enter first number : 12

// Enter second number : 8

// Enter an operation: +
// Sample Input
// 20
// Sample Output
// + (Addition) a + b
// -(Subtraction) a – b
// * (Multiplication) a * b
//  / (Division) a / b
// % (Modulo or remainder) a % b






// let Number1 = Number(prompt("Enter your Number"))  
// let Number2 = Number(prompt("Enter your Number"))  
// let operation = prompt("Enter operation")  
// function calculator(a, b, operation) {
//     switch (operation) {
//       case '+':
//         console.log( a + b);
//         break;
//       case '-':
//         console.log(a - b) ;
//         break;
//       case '*':
//         console.log( a * b);
//         break;
//       case '/':
//         if (b !== 0) {
//           console.log(a / b) ;
//         } else {
//           console.log('Error: Division by zero') ;
//         }
//         break;
//       case '%':
//         if (b !== 0) {
//           console.log(a % b) ;
//         } else {
//           console.log('Error: Division by zero') ;
//         }
//         break;
//       default:
//         console.log('Invalid operation') ;
//     }
//   }
  
 
  
//   const result = calculator(Number1, Number2, operation);

//   console.log(result);

// let input = Number(prompt("enter your input"))
// function fizzBuzz(n) {

//     if (n % 3 === 0 && n % 5 === 0) {
//       console.log("FizzBuzz") ;
//     } else if (n % 3 === 0) {
//       console.log("Fizz") ;
//     } else if (n % 5 === 0) {
//       console.log("Buzz") ;
//     } else {
//       console.log(n) ; 
//     }
//   }
  
//   const result = fizzBuzz(input);
  

//   console.log(result);
  


// 6
// Write a program to generate and print the first N 
// terms of the Fibonacci series


// function generateFibonacci(n) {
//     if (n <= 0) {
//       console.log("Please enter a positive number greater than 0.");
//       return;
//     }
  
//     let fibSeries = [];
//     let a = 0, b = 1;
  
//     for (let i = 0; i < n; i++) {
//       fibSeries.push(a);
//       let nextTerm = a + b;
//       a = b;
//       b = nextTerm;
//     }
  
//     console.log(`The first ${n} terms of the Fibonacci series are:`);
//     console.log(fibSeries.join(", "));
//   }
  
 
//   const n = 10;
//   generateFibonacci(n);
  