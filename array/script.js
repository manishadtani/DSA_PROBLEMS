// let arr = [
//     [1,2,3],
//     [5,6,7],
//     [9,10,8],
//     [13,5,29]
// ]


// let rows = 3 , cols = 4

// let arr = Array.from({length:rows},()=>Array(cols))

// for(let i=0; i<=arr.length-1; i++){
//     for(let j=0; j<=arr[i].length-1; j++){
//         arr[i][j] = Number(prompt("enter element"))
//     }
// }
//     console.log(arr)

// let rows = Number(prompt("enter rows"))
// let arr = new Array(rows)
// let left = 0
// let right = 0

// for(let i=0; i<=arr.length-1; i++){
//     let col = Number(prompt("enter column value"))
//     arr[i] = new Array(col)
// }


// for(let i=0; i<=arr.length-1; i++){
//     for(let j=0; j<=arr[i].length-1; j++){
//         arr[i][j] = Number(prompt("enter element"))
//         if(i === j){
//             left = left + arr[i][j]
//         }
//         else if(i+j == arr.length-1){
//             right = right + arr[i][j]
//         }
//     }
// }
//     console.log(arr)
//     console.log(`${left} sum of left diagonal`)
//     console.log(`${right} sum of right diagonal`)



// let arr = [1,2,34,2,5,5,36,98,267,982];
// let num = arr[arr.length-1]
// let count = 0;
// for(let i=arr.length-1; i>=0; i++){
//     arr[0] = num
//         for(let j=arr.length-1; j>=0; j++){
//            if(num === arr[arr.length-1]) {
//                 count++;
//            }
//         }
// }

// console.log(count)


// let arr = [3,2,3,2,2,2,3,2,6,2,3,2,3]

// let newarr = arr.sort((a,b)=>a-b);
// let pair =  0;

// for(let i=0; i<=newarr.length-1/2; i++){
//      if(arr[i] === arr[i+1]){
//         i = i+2;
//         console.log("true")
//         pair++
//      }
// }
// console.log(pair)


// let arr = [1,2,3,4,2,3,4]
// let pair = 0
// let count = 0
// let newarr = arr.sort((a,b)=>a-b)


// for(let i=0; i<=newarr.length-1; i++){
//      if(arr[i] === arr[i+1]){
//         i = i+2;
//         console.log("true")
//         pair++
//      }
//      else if(arr[i] !== arr[i+1]){
//         i++
//         count ++
//         console.log("False")
//      }

// }

// console.log(pair)
// console.log(count)



// let arr = [3,1,2,2,2,1,3]
// let count = 0
// let k = 2

// for(let i=0; i<=arr.length-1; i++){
//       for(let j=i+1; j<=arr.length-1; j++){
//         if(arr[i] === arr[j]){
//            let mult = i * j
//             if(mult % 2 == 0){
//                 count++
//             } 
//         }
//       }
// }
// console.log(count)







// Basic Qushtion and extra class?//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      






// let value = Number(prompt("Enter value"))
// let val = Number(prompt("enter val"))
// let arr = new Array(value).fill(val)
// console.log(arr)


// let value = Number(prompt("Enter value"))
// let arr = new Array(value)
// let sum = 0
// let mean = 0

// for(let i=0;i<=arr.length-1;i++){
//     arr[i] = Number(prompt("Enter value"))
//     sum += arr[i]
//     mean = sum/2;
// }
// console.log(sum)
// console.log(arr)
// console.log(mean)




// let arr = [12,13,14,15,16,87,56] 
// let max = arr[0]

// for(let i=1; i<=arr.length-1; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(max)




// let arr = [12,13,14,15,16,87,56]

// let greatest = Math.max(arr[0],arr[1]);
// let secondgreatest = Math.max(arr[0], arr[1])

// for(let i=2; i<=arr.length-1; i++){
//         if(arr[i]>greatest){
//            secondgreatest = greatest
//            greatest = arr[i]
//         }
//         else if(arr[i]>secondgreatest && arr[i]!= greatest){
//             secondgreatest = arr[i]
//         }
// }

// console.log(secondgreatest)


// block swap algorithm


// let arr = [ 10 , 20 , 30 , 40 ,50 , 60];

// let elem = 40


// for(let i=0; i<=arr.length-1; i++){
//     if(elem === arr[i]){
//         console.log(`given element is found at this index ${i}`)
//         break;
//     }
// }









// let nums = [0,0,1,1,1,2,2,3,3,4]

// for(let i=0; i<=nums.length-1; i++){
//     for(let j=i; j<=nums.length-1; j++){
//       let Num = nums[j]
//         if(nums[j] !== "_"){
//             for(let k=j; k<=nums.length-1; k++){
//                 if(Num === nums[k+1]){
//                     nums[k+1] = "_"
//                   }
//             }
           
//       }
     
//     }
// }

// console.log(nums)
// let arr1 = []
// let arr2 = []
// let k = 0
// for(let l=0; l<=nums.length-1; l++){
//     if(typeof nums[l] === "number"){
//         arr1.push(nums[l])
//         k++
//     }
//     else if(typeof nums[l] === "string"){
//         arr2.push(nums[l])
//     }
   
// }
// console.log(arr1)
// console.log(arr2)
// console.log(k)  









































// let arr1 = [1,2,3,4]
// let arr2 = [1,3,5]
// let arr3 = new Array(arr1.length + arr2.length)

// let i=0
// let j=0
// let k=0

// while(i<arr1.length && j<arr2.length){
//         if(arr1[i]<=arr2[j]){
//            arr1[k] = arr1[i]
//             i++
//             k++
//         }
//         else{
//             arr1[k++] = arr1[i++]
//         }
// }

// while(i<arr1.length){
//     arr1[k++] = arr1[i++]
// }
// while(j<arr2.length){
//     arr2[k++] = arr2[j++]
// }

// console.log(arr3)


// let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// let combine = ""
// for(let i=0; i<digits.length; i++){
//     combine += digits[i]
// } 
// console.log(combine)
// let val =  BigInt(combine)
// console.log(val)
//      val = val + 1n
//      console.log(val)
//     let result = Array.from(String(val), Number)

// console.log(result)











// let nums = [1,2,2,4]



// for(let i=0; i<nums.length; i++){
//     let correct = nums[i] - 1
//     if(nums[i] < nums.length && nums[i] > 0 && nums[i] !== i){
        
//     }
   
// }




let arr = [1,4,3,6,2,21,8,17,43]
let target = 21
let firstIndex = 0 ;
let lastIndex = arr.length-1
let mid = Math.floor(firstIndex + lastIndex/2)
console.log(mid)
for(let i=0; i<arr.length; i++){
        if(arr[i] == mid){
             console.log(mid) ;
        }
        else if(arr[i] < arr[mid]){
            lastIndex = mid - 1
        }
        else if(arr[i] > arr[mid]){
            firstIndex = mid + 1
        }
        else{
            console.log(-1)
        }
        
}