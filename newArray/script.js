// let arr = [1,2,3,45,45,6]
// let max = arr[0]
// for(let i=1; i<=arr.length-1; i++){     //////////largest element
//      if(max < arr[i]){
//             max = arr[i]
//      }
// }
// console.log(max)



// let arr = [1,2,3,45,45,6]

// let max = Number(Math.max(arr[0],arr[1]));
// let min = Number(Math.min(arr[0],arr[1]))

// for(let i=2; i<=arr.length-1; i++){
//      if(max<arr[i]){
//         min = max
//         max = arr[i]     
//      }
//        else if(min<arr[i] && arr[i]<max){
//           min = arr[i]
//      }
// }

// console.log(min)
// console.log(max)




//   ///// /////Lecture20////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Taking array input in js.

// let arr = prompt("ENter")
// let val = arr.split(" ").map(Number);
//  console.log(val)
// clonning an array.  spread operator , with slice(No input), Array.from(), [].concat()



// three sum  (aaj tak dekha bhi nhi bus apne logic se kar liya)

// let arr = [5,4,2,6,3,2,1];
// let target = 6;
// let count = 0;
// function abc(){
//     for(let i=0; i<arr.length; i++){
//         for(let k=i+1; k<arr.length; k++){
//          for(let j=k+1; j<arr.length; j++){
//              if(arr[i] + arr[k] + arr[j] === target){
//                      count++;
//              }  +
//          }
//         }
//      }   
//  console.log((count))    
// }

// abc()


// iss queshtion me ye tha ki sarre elemnts repeat honge ek ko chodd ke usko dundna hai

// let arr = [1,5,2,3,4,10,3,2,1];

// let ans = -1

// for(let i=0; i<arr.length; i++){
//      let newElem = arr[i]
//      for(let j=i+1; j<arr.length; j++){
//             if(newElem === arr[j]){
//                  arr[i] = -1
//                  arr[j] = -1
//             }
//      }

     
// }
// for(let i=0; i<arr.length; i++){
//     if(arr[i] !== -1){
//         console.log(arr[i])
//     }
// }

// console.log(arr)


//second largest number
// let arr = [1,2,3,4,5,8,6,9,9,7]

// let max = Math.max()
// for(let i=0; i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// // console.log(max)


// for(let i=0; i<arr.length; i++){
//     if(arr[i] === max){
//         arr[i] = -Infinity
//     }
// }


// let max1 = Math.max()
// for(let i=0; i<arr.length; i++){
//     if(arr[i] > max1){
//         max1 = arr[i]
//     }
// }
// console.log(max1)

// // console.log(Math.max(-Infinity, 5)) 


//second largest element
// let arr = [1,2,3,45,45,6]

// let max = Number(Math.max(arr[0],arr[1]));
// let min = Number(Math.min(arr[0],arr[1]))

// for(let i=2; i<=arr.length-1; i++){
//      if(max<arr[i]){
//         min = max
//         max = arr[i]     
//      }
//        else if(min<arr[i] && arr[i]<max){
//           min = arr[i]
//      }
// }

// console.log(min)
// console.log(max)


// queshtion me aisa karna hai ki kuch elements hai jo repeat ho rahe hai unmese jo pehela elements hai usko return kar do

// let arr = [1,2,6,1]
// function abc(arr){
    
//     for(let i=0; i<arr.length; i++){
//         let firstElem = arr[i]
//         for(let j=i+1; j<arr.length; j++){
//             if(firstElem === arr[j]){
//                  return arr[j]               
//             }
                
//         } 
        
       
//     }
//     return -1
// }
// console.log(abc(arr)) 


///// 
// lecture21/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // // // //using temp variable
// let a = 10;
// let b = 20;
// let c;

// c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b)



// // // // //using sum
// let a = 10;
// let b = 20;

// a = a + b;
// b = a - b
// a = a - b

// console.log(a) // 20
// console.log(b) // 10



// // // // // // Reverse an array
// let arr = [1,2,3,4,5]
// for(let i=arr.length-1; i>=0; i--){
//         console.log(arr[i])
// }///////// ek ek element nikalke dega


// let arr = [1, 2, 3, 4, 5];
// let reversedArr = [...arr].reverse();
// console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
// console.log(arr); // Original array remains unchanged: [1, 2, 3, 4, 5]
// // // // //ek naye array me destructure karke daal dega


// let arr = [1, 2, 3, 4, 5];
// let reversedArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
// }
// console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
// // // // // ek naye array me push kar diya


// let arr = [1,2,3,4,5,6]
// let i = 0
// let j = arr.length-1
// let temp;

// while(i<j){
//     temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp

//    i++
//    j--
// }
// console.log(arr)
// /// // // // //swap with this inside the same array


// let n = 9
// let k = 4
// let arr = [1,2,3,4,5,6,7,8,9]
// let newArr = []

// for(let i=n-k; i<n; i++){
//      newArr.push(arr[i])
// }
// for(let i=0; i<n-k; i++){
//     newArr.push(arr[i])
// }
// console.log(arr)
// console.log(newArr)




