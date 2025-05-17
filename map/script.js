// let map = new Map()
// let arr = [1,2,3,4,1,2,3,4,10,12,3,2,5,4,1]


// for (let i=0 ; i<=arr.length-1; i++ ){
//     if(map.has(arr[i])){
//         map.set(arr[i], map.get(arr[i]+1))
//     }else{
//             map.set(arr[i], 1);
//     }
// }


// console.log(map)

// let nums = [1,2,3,1]

// for(let i=0; i<=nums.length-1; i++){
//     let firstelem = nums[i]
//     // console.log(firstelem)
//    for(let j=i; j<=nums.length-1; j++){
//        if(firstelem === nums[j+1]){
//                console.log("true")
//        }
//    }
// }


// //insertion in map
// let map = new Map()

// map.set("india",150)
// map.set("france",30)
// // map.set("australia",40)
// map.set("australia",10)


// console.log(map.forEach((pp)=>{
//     console.log(pp)
// }))




// console.log(map.get("india"))
// console.log(map.get("indssss"))



// let arr = [1,2,3,4,5];

// for(let val of arr){
//     console.log(val)
// }










///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj







// 1
// Find the First Non-Repeating Character
// 👉 Given a string, return the first non-repeating character. If all characters repeat, return -1.

// Example:

// Input: "aabbcde"
// Output: "c"


// let str = "aabbcde"

// let map = new Map()

// for(let char of str){
//     map.set(char, (map.get(char) || 0)+1)
    
// }
// for(let char of str){
//     if(map.get(char) === 1){
//         console.log(char)
//                 break
//         }
//     else{
//         console.log(-1)

//     }
// }






// Count Frequency of Elements in an Array
// 👉 Given an array, count the frequency of each element.

// Example:

// Input: [1, 2, 2, 3, 3, 3, 4]
// Output: {1:1, 2:2, 3:3, 4:1}

// let arr = [1,2,3,3,4,2,3,7]
// let map = new Map()

// for(let num of arr){
//       map.set(num, (map.get(num) || 0)+1)
// }

// console.log(Object.fromEntries(map))







// Check if Two Strings are Anagrams
// 👉 Given two strings, check if they are anagrams (contain the same characters in any order).

// Example:

// Input: "listen", "silent"
// output: true

// let str1 = "listen"
// let str2 = "sieeelent"

// function areAnagrams(str1, str2){
//     if(str1.length !== str2.length) return false
//     let map1 = new Map()
//     let map2 = new Map()    
//     for(let char of str1){
//         map1.set(char, (map1.get(char) || 0)+1)
//     }
    
//     for(let char of str2){
//         map2.set(char, (map2.get(char) || 0)+1)
//     }
//     for(let [key, value] of map1){
//         // console.log(key,value)
//         if(map1.get(key) !== value) return false
        
//     }
//     return true
// }
// console.log(areAnagrams("listen","silent"))







// Find the Element That Appears Once
// 👉 Given an array where every element appears twice except for one, find the single unique element.

// Example:

// Input: [4, 3, 2, 4, 1, 3, 2]
// Output: 1


// let arr = [4,3,2,4,3,2]
// function findUnique(){

//     let map = new Map()

//     for(let char of arr){
//         map.set(char, (map.get(char) || 0) + 1)
//     }
    
//     for(let char of arr){
//         if(map.get(char) === 1) return char
//     }
    
//     return Infinity
// }

// console.log(findUnique(arr))









// Find the Intersection of Two Arrays
// 👉 Given two arrays, return the common elements.

// Example:

// Input: arr1 = [1, 2, 3, 4], arr2 = [3, 4, 5, 6]
// Output: [3, 4]