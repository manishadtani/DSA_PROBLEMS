// let arr = [4,6,3,2,3,4,5,6,7,8,9,5,8,2,1]
// let target = 7
// let count = 0

// for(let i=0; i<=arr.length-1; i++){
//     let firstElem = arr[i] //4
//      for(let j=i+1; j<=arr.length-1; j++){
//         if(firstElem + arr[j] === target){            // two sum queshtion
//                 count++
//         }   
//      }
// }
// console.log(count)





// let arr = [4,6,3,2,3,4,5];
// let target = 7
// let count = 0

// for(let i=0; i<arr.length; i++){
//     let firstElem = arr[i]
//     for(let j=i+1; j<arr.length; j++){
//          let secondElem = arr[j]
//         for(let k=j+1; k<arr.length; k++){
//             let thirdElem = arr[j]
//             if(firstElem + secondElem + thirdElem === target){            // triplet sum queshtion
//                 count++
//             }
//         }
//     }
// }
// console.log(count)


let arr = [1,2,3,4,3,2,1]

for(let i=0; i<arr.length; i++){
    let firstElem = arr[i]
     for(let j=i+1; j<arr.length; j++){
          if(firstElem == arr[j]){
              arr[j] = -1
              arr[i] = -1
          }
     }
}

if(arr[i] !== -1) console.log(arr[i])