// let arr = [10,2,30,4,5,6,7]
// let maxSum = 0 , windowSum = 0;
// let k = 2

// for(let i=0; i<k; i++){
//         windowSum += arr[i]
// }
// maxSum = windowSum

// for(let i=k; i<arr.length; i++){
//     windowSum += arr[i] - arr[i-k]
//     maxSum = Math.max(maxSum, windowSum)
// }
// console.log(maxSum)


// let arr = [10,2,30,4,5,6,7]
//     let i = 0, sum = 0, minLen = Infinity , target = 7;

//     for (let j = 0; j < arr.length; j++) {
//         sum += arr[j]; // expand window by including arr[j]

//         while (sum >= target) {
//             minLen = Math.min(minLen, j - i + 1); // check and store min length
//             sum -= arr[i]; // shrink window from left
//             i++;
//         }
//     }


//     console.log(minLen === Infinity ? 0 : minLen); 






// Example:
// Input: arr = [1,3,5,7,9], target = 5
// Output: 2

// let arr = [1,3,5,7,9], target = 5

// let low = 0, high = arr.length-1

// while(low <= high){

//     let mid = Math.floor((low + high) / 2)

//     if(arr[mid] === target){
//         console.log(mid)
//         break;
//     }else if(arr[mid] < target){
//         low = mid + 1
//     }
//     else{
//         high = mid - 1
//     }

// }



// let arr = [1, 2, 2, 2, 3, 4, 5], target = 2;


// let low = 0
// let high = arr.length - 1
// let ans = -1

// while (low <= high) {

//     let mid = Math.floor((low + high) / 2)

//     if (arr[mid] === target) {
//         ans = mid
//         high = mid - 1
//     } else if (arr[mid] < target) {
//         low = mid + 1
//     }
//     else {
//         high = mid - 1
//     }
// }




// let str = "Hello bhai Kaise ho a"

// for(let i=0; i<str.length-1; i++){
//     let firstLetter = arr[0]
//      if(arr[i])
// }




// Map.set(ch + Map.get(ch)+1)
// Map.set(ch, 1)



















