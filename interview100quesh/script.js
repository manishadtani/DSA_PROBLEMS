// map ke queshtions

// const arr = [1, 2, 2, 3, 3, 3, 4];

// let map = new Map()

// for(let i=0; i<arr.length; i++){
//     let val = arr[i]

//     if(map.has(val)){
//         map.set(val ,map.get(val) + 1)
//     }
//     else{
//         map.set(val, i)
//     }
// }

// console.log(map)

const str = "aabccbd";

let map = new Map()

for(let i=0; i<str.length; i++){
     let val = str[i]

     if(map.has(val)){
        map.set(val, map.get(val) + 1)

     }else{
        map.set(val,1)
     }

}

for(let i=0; i<str.length; i++){
    if(map.get(str[i]) === 1){
        console.log(str[i])
        break;
    }
}

console.log(map)






































//1. Simple Array Sum
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];   // first method
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//      sum += arr[i]
// }
// console.log(sum)


// let sum = arr.reduce((acc, curr)=> acc + curr, 0)   // second method
// console.log(sum)





// //2. Birthday Cake Candles
// let candles = [1, 4, 1, 4, 3, 3, 4];  
// // Tallest candle = 4  
// // Number of candles with height 4 = 2  
// // Output: 2

// let firstElem = candles[0]
// for(let i=1; i<candles.length; i++){
//       if(candles[i] >= firstElem){
//          firstElem = candles[i]
//       }
      
// }
// let tallCandle = 0
// for(let i=0; i<candles.length; i++){
//     if(candles[i] === firstElem){
//         tallCandle++




// let arr = [7, 1, 3, 4, 1, 7]

//     }
// }
// console.log(tallCandle)
// console.log(firstElem)



//3. Mini-Max Sum

// Sum of all elements ko find karo.
// Sabse bada element ko remove karke minimum sum nikalo.
// Sabse chhota element ko remove karke maximum sum nikalo.

// let arr = [2, 1, 3, 9, 8]

// let totalSum = arr[0];
// let maxElem = arr[0];
// let minElem = arr[0];

// for(let i=1; i<arr.length; i++){
//     totalSum += arr[i]

//     if(maxElem < arr[i]){
//         maxElem = arr[i]
//     }

//     if(minElem > arr[i]){
//         minElem = arr[i]
//     }

// }

// let minimunSum = totalSum - maxElem
// let maximumSum = totalSum - minElem
// console.log(minimunSum)
// console.log(maximumSum)

// console.log(minElem)

// console.log(maxElem)

// console.log(totalSum)





// let arr = [
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12]
//   ];
//   // Primary diagonal = 11 + 5 + -12 = 4
//   // Secondary diagonal = 4 + 5 + 10 = 19
//   // Difference = |4 - 19| = 15
// let primarySum = 0;
// let secondarySum = 0;
//   for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(i == j){
//             primarySum += arr[i][j]
//         }
//         if(i + j == arr.length-1){
//             secondarySum += arr[i][j]
//         }
//     }
//   }

//   let Difference = Math.abs(primarySum - secondarySum)
//   console.log(Difference)
//   console.log(primarySum)

//   console.log(secondarySum)




// let steps = "UDDDUDUU";
// let valley = 0
// let sea = 0

// for(let i=0; i<steps.length; i++){
//     if(steps[i] == 'U'){
//         sea += 1

//         if(sea === 0) {
//             valley++;  
//         }
//     }
//     else if(steps[i] == "D"){
//         sea -= 1
//     }

// }
// console.log(valley)

////////////////////////////////////////////////////////////////////////////////////////////////////////

// let arr = [1, 2, 3, 4, 3, 2, 1]

// let uniqueElem = null

// for(let i=0; i<arr.length; i++){
//   let count = 0;
//   for(let j=0; j<arr.length; j++){
//     if(arr[i] === arr[j]){
//       count++;
//     }
//   }

//   if(count === 1){
//     uniqueElem = arr[i];
//     break;

//   }
// }

// console.log(uniqueElem)


//////////
// let arr = [1, 2, 3, 4, 3, 2, 1];
// let result = 0;
// for (let num of arr) {
//   result ^= num;
// }
// console.log(result); // Output: 4


 ////////////
// let arr = [1, 2, 3, 4, 3, 2, 1];

// let unique = new Set();

// for(let num of arr){
//     if(unique.has(num)){
//       unique.delete(num)
//     }else{
//       unique.add(num)
//     }
// }

// for (let val of unique){
//   console.log(val)
// }

///////////////////////////////////////////////////////////////////////////////////////////////////


// let arr = [1,2,2,3,3,3,3] 

// let freqMap = new Map()

// for(let num of arr){
//   freqMap[num] = (freqMap[num] || 0) + 1;
// }

// let maxFreq = Math.max(...Object.values(freqMap))

// let deletion = arr.length - maxFreq
// console.log(deletion)




// let arr = [7, 1, 3, 1, 2, 7]

// let map = new Map()
// let minDist = Infinity

// for(let i=0; i<arr.length; i++){
//       let val = arr[i]

//       if(map.has(val)){
//           let prevIndex = map.get(val)
//           let dist = i - prevIndex;
//           minDist = Math.min(minDist, dist)
//       }
//       map.set(val, i)
// }
// console.log(minDist)


