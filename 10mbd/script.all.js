// find the largest elemet in an array
// let arr = [1,2,3,7,5,2]

// let max = arr[0]
// for(let i=1; i<arr.length; i++){
//         if(max < arr[i]){
//             max = arr[i]
//         }
//     }
// console.log(max)


// let max = Math.max(...arr)
// console.log(max)

var data = 'charan'
// var data = 'charan32'


// Find the second largest element in an array.
// let arr = [1,2,3,7,5,2]

// let firstMax = arr[0]
// let secondMax = arr[1]

// for(let i=2; i<arr.length-1; i++){
//         if(firstMax < arr[i]){
//             firstMax = arr[i]
//         }
//     }
//     console.log(firstMax)


// function RegularFunc() {
//   console.log("RegularFunc this:", this);
// }

// const ArrowFunc = () => {
//   console.log("ArrowFunc this:", this);
// };

// const obj = {
//   name: "Manish",
//   regular: RegularFunc,
//   arrow: ArrowFunc
// };

// obj.regular(); // `this` refers to obj
// obj.arrow();   // `this` refers to window or undefined (in strict mode)

// console.log(greet)

// var greet = function () {
//     console.log("Hello!");
//   };
  

// let name1 = "manish";
// let name2 = "manish";


// const obj1 = {name:"Rahul"};
// const obj2 = obj1;
// const obj3 = {name:"Rahul"}

  



















// 1.    
// Accept value from user and assign to array
//  let arr = [];
// let n = prompt("Enter Number of Elements")
// for(let i=0; i< n ; i++){
//     arr.push(prompt(`Enter the value of element ${ i + 1}:`))
// }
// console.log(arr)



// 2.
// Sum of Array’s Element
// let arr = [10, 20, 30];
// let sum = 0
// for(let i=0; i<=arr.length-1; i++){
//     sum += arr[i]
// }
// console.log(sum)



// 3.
// Max Element from Array
// let arr = [10, 50, 20];
// let firstElem = arr[0]
// for(let i=0; i<=arr.length-1; i++){
//      if(arr[i] > firstElem){
//         firstElem = arr[i]
//      }
// }
// console.log(firstElem)


// 4.
// Second Max Element from Array
// let arr = [10, 50, 60, 20, 30];
// let max = Math.max(arr[0], arr[1])
// let secMax = Math.min(arr[0], arr[1])

// for(let i=2; i<=arr.length-1; i++){
//         if(arr[i] > max){
//             secMax = max
//             max = arr[i]
//         }
// }
// console.log(secMax)


// 5.
// Reverse the Array
// let arr = [1, 2, 3, 4, 5];
// let start = 0
// let end = arr.length-1

// while(start < end){
//     let temp;

//     temp = arr[end]
//     arr[end] = arr[start]
//     arr[start] = temp


//     start++;
//     end--;

// }
// console.log(arr)



// 6.
// // . All Zeroes to Left and Ones to Right
// let arr = [1, 0, 1, 0, 1, 0];
// let start = 0
// let end = arr.length-1

// while(start < end){
//     if(arr[start] === 1 && arr[end] === 0){
//         let temp;
//         temp = arr[end]
//         arr[end] = arr[start]
//         arr[start] = temp
//         start++
//         end--
//     }  else {
//         if (arr[start] === 0) start++;
//         if (arr[end] === 1) end--;
//       }
// }
// console.log(arr)




// 7.
// Array Left Rotation by 1
// let arr = [1, 2, 3, 4, 5];

// let firstElem = arr[0]

// for(let i=0; i<arr.length; i++){
//     arr[i] = arr[i+1]
// }

// arr[arr.length-1] = firstElem

// console.log(arr)


// 8.
// rotate the array to the left by K positions.
// let arr = [1, 2, 3, 4, 5];
// let k = 2;

// for(    )




// 9.
// Linear Search (Optimized for small data)
// let arr = [10, 20, 30, 40, 50];

// let target = 3
// let findedindex = -1


// for(let i=0;i<arr.length; i++){
//     if(arr[i] == target){
//         findedindex = i
//     }
// }
// console.log(findedindex)




































































// tricky queshtions

// console.log(typeof a); // cannot acces variable 'a' before initialization
// let a = 5;

// let a = 10

// function test() {
//     let a = 15;
//     console.log(a)
// }
// test()
// console.log(a)

  
// function run() {
//     console.log(a); // ?
//     let a = 5;
//   }
//   run();
  





