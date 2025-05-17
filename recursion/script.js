// const n = Number(prompt("enter"))


// for(let i=0; i<n; i++){
//     console.log("Hello world")
// }


// function main(n){
//     if(n==0) return
//     console.log(n)
//     main(n-1)
// }

// main(n)



// function main(n){
//     if(n==0) return 
//     main(n-1)
//     console.log(n)
// }

// main(n)

// function Sumnterm(n){
//         if(n==1) return n;
//         return n + Sumnterm(n-1)
// }
// console.log(Sumnterm(n))



// function fact(n){
//         if(n==1) return n;
//         return n * fact(n-1)
// }
// console.log(fact(n))


// function Sumndigit(n){
//         if(n==0) return n;
//         return n%10 + Sumndigit(Math.floor(n/10))
// }
// console.log(Sumndigit(n))


// function Sumndigit(n){
//     if(n==0) return n;
//     return n*10 + Sumndigit(Math.floor (n/10))
// }
// console.log(Sumndigit(n))






//  let a = 20;
//  let b = 32
//  let c = Math.min(a,b)
//  function highest(a,b,c){
//         if(c === 0) return 0  
//         if(a%c == 0 && b%c == 0) return c
//          return highest(a,b,c-1)
//  }

// let a = 10;
// let b = 20;



// function printNumbers(n){
//     if(n === 0) return n
//     printNumbers(n-1)
//     return console.log(n)
// }
// printNumbers(5)


// function printNumbers(n){
//     if(n === 0) return 
//     console.log(n)
//     printNumbers(n-1)
// }
// printNumbers(5)



//agar koi umber 2 se leeke apne sqqr root se divide nhi ho paya , iska matlab vo number aage bhi divide nhi ho payega.


// let n = 4;
// let count = 0;
// for(let i=1; i<=n/2; i++){
//         if(n%i === 0){
//             count++
//         }
// }
//  if(count == 1) console.log("prime number") 
//  else console.log("Not a prime number")


// //  teen condition

// if(n<=1)  return false
// if(n==2) return true
// if(n%2==0) return false
// let n = 30
// let arr = new Array(n + 1).fill(true)
// console.log(arr)

// for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
//     if (arr[i]== true) {
//         for (let j = i*i; j <= n; j+=i) {
//             if (i % j === 0) {
//                 arr[j] = false
//             }
//         }
//     }
// }


// teen condition thi 



// let nums = [2,2,1,1,1,2,2]

// let elements = nums.length
// let repeat = 0;
// // console.log(elements)

// for(let i=0; i<=nums.length-1; i++){
//     let firstElem = nums[i]
//     for(let j=i; j<nums.length-1; j++){
//          if(firstElem === j+1){
//             if(repeat === elements/2){
//                   repeat++
//               }
//          }
//     }
// }

// console.log(repeat)











