// Traversing sarre elements ko access karna 

// let data = [10,20,30,40,50];

// for (let i=0; i<data.length; i++){
//     document.write(`Array ${i} is ${data[i]} <br>`)
// }


// let i = 0
// while(i<=data.length-1){
//     console.log(data[i])
//     i++
// }


// let i = 0
// data.forEach(element => {
//     console.log(element)
// });


// let i = 0;
// data.map((elem)=> console.log(elem))










// Accessing -> specific element ko specificaly check karna 

// let data = [10,20,30,40,50];

// console.log(data[3])

// console.log(data.at(-1)) from last element

// console.log(data[data.length-1])  from last element

// console.log(data.find((elem)=>elem>10));

// console.log(data.filter((elem)=>elem>10))

// let [first, ...second] = data;
// console.log(first)                      destructuring
// console.log(second)




// easy five queshtions


// let arr = [10, 20, 30, 40];
// Ek array [5, 10, 15, 20] hai. Traversing ka use karke sabhi elements ko console pe print karo.

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }


// Ek array [2, 4, 6, 8] ke end me 10 insert karo.

// console.log(arr.splice(arr.length,0,10))
// console.log(arr)

// console.log(arr.push(10))
// console.log(arr)

// Ek array [10, 20, 30, 40] ke first element ko remove karo aur updated array print karo.

// console.log(arr.shift())
// console.log(arr)


// Ek array [1, 2, 3, 4, 5] ka last element access karo aur usse console pe print karo.
// console.log(arr[arr.length-1])


// Ek array [10, 20, 30, 40, 50] ke third position (index 2) par 25 insert karo.

// arr.splice(2,0,25)
// console.log(arr)

// let newarr = [...arr.slice(0,2),25, ...arr.slice(2)]
// console.log(newarr)




// intermediate 

// let arr = [1, 2, 3, 4, 5]
// Ek array [1, 2, 3, 4, 5] ke har element ka square nikal kar naye array me store karo.
// let newarr = arr.map((elem)=>elem*elem)
// console.log(newarr)


// Ek array [10, 20, 30, 40, 50] ka second element remove karo aur baaki elements ko traverse karke print karo.

// arr.splice(1,1)
// console.log(arr)
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// for(let i=0; i<arr.length; i++){
//     if(i===1){
//         continue
//     }else{
//         console.log(arr[i])
//     }
// }


// Ek array [5, 10, 15, 20] ke last 2 elements ko remove karo aur updated array print karo.

// arr.length = arr.length - 2
// console.log(arr)



// Ek array [1, 2, 3, 4, 5] me har even number ko 0 se replace karo aur updated array print karo.
// let i = 0
// let newarr = arr.map((elem)=>{
//     if(elem%2 === 0){
//         return 0
//     }else{
//        return elem
//     }
// })
// console.log(newarr)

// Ek array [1, 2, 3, 4, 5] me har odd number ko 0 se replace karo aur updated array print karo.
// let i = 0
// let newarr = arr.map((elem)=>{
//     if(elem%2 !== 0){
//         return 0
//     }else{
//         return elem
//     }
// })
// console.log(newarr)



// hard queshtions


// Ek nested array [[1, 2], [3, 4], [5, 6]] ke sabhi elements ko flatten karke ek single array [1, 2, 3, 4, 5, 6] banao.


// let arr = [[1, 2], [3, 4 ],[5, 6]];

// let newarr = arr.flat()
// console.log(newarr)

// let flatArray = [];


// for(let subArray of arr){
//     for(let elem of subArray){
//         console.log(elem)
//         flatArray.push(elem)
//     }
   
// }
// console.log(flatArray)



// Ek array [10, 20, 30, 40, 50] me se har element ko traverse karo aur agar element 30 hai to usse remove kar do, baaki ko print karo.


// let arr = [10, 20, 30, 40, 50];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
//     if(arr[i] === 30){
//         arr.splice(1,1)
//     }else{
//         arr[i]
//     }
// }

// console.log(arr)

// let newarr;
// for(let i=0; i<arr.length; i++){
//     newarr = arr.filter((elem) => elem !== 30)
  
// }
// console.log(newarr)



// Ek array [1, 2, 3, 4, 5, 6] ke even indexed elements ko double karo aur odd indexed elements ko half karo


// let arr = [1, 2, 3, 4, 5, 6];
// let el 
// for(let i=1; i<arr.length; i++){
//     // console.log(arr[i])

//    el = arr.map((elem)=>{
//         if(elem-1%2 === 0 ){
//             return elem*2
//         }else{
//             return elem*1/2
    
//         }
//     })
  
    
// }
// console.log(el)



// Ek array [10, 20, 30, 40, 50, 60] ke last 3 elements ko remove karke baaki array ko reverse karke print karo.


// let arr = [10, 20, 30, 40, 50, 60];



// arr.length = arr.length-3
// console.log(arr)
// let temp = arr[0]

// // let temp = arr[arr.length-1]
// // console.log(temp)
// arr[0] = arr[arr.length-1]
// arr[arr.length-1] = temp

// // console.log(arr)
// let n=1
// for(let i=n; i<arr.length-2; i++){
//     let tempp = arr[n]

//     console.log(arr[arr.length-2])
//     // if(n%2 === 0){
//         arr[n] = arr[arr.length-n-1]
//     arr[arr.length-n-1]= tempp
//     // }
// //     arr[n] = arr[arr.length-n-1]
// //     arr[arr.length-n-1]= tempp
// }
// console.log(arr)
// let tempp = arr[1]
// arr[1] = arr[arr.length-2]
// arr[arr.length-2]= tempp

// console.log(arr)

// for(let i=0; i<=arr.length-1; i++){
//     console.log(arr[arr.length-1])
// }
// console.log(arr)

// for(let i=arr.length-1; i>0; i--){
//        arr[i+1] = arr[i]
// }
// arr[0] = temp
// 

// arr.length= arr.length-1


// console.log(arr)




// let arr = [1, 2, 3, 4, 5, 6,7];

// // Step 1: Reduce the array length by 3
// arr.length = arr.length - 3; // arr = [1, 2, 3, 4]

// // Step 2: Right-rotate the array
// for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1]; // Shift elements to the right
// }
// arr[0] = arr[arr.length - 1]; // Move the last element to the first position

// // Step 3: Reduce the array length by 1
// arr.length = arr.length - 1; // Remove the last element

// console.log(arr); // Final Output



// searching

// let arr = [10,20,30,40,50,60,40];
// let val = 40
// let idx = [];

// for(let i=0; i<=arr.length-1; i++){
//     if(arr[i] === val){
//         idx.push(i)
//         // break;
//     }
    
// }
// console.log(idx)








// number of queshtions

// count total number of even and odd elements in an array.
// let arr = [-1,0,1,2,3,4,5,6,7,8];

// // for(let i=0; i<=arr.length-1;i++){
//         // console.log(arr[i])
//       let newarr = arr.map((elem)=>{
//             if(elem%2 === 0 && elem>1){
//                 // console.log(elem)
//                 //  elem
//                 return elem
//             }else if(elem%2 !== 0 && elem>1){
//                 return elem
//             }
//             // return elem
//         })

//         console.log(newarr)
       
       
// }
// console.log(arr)



// count total number of negative elements in an array.


// let arr = [-1,-2,-3,-4,0,1,2,3,4,5,6,7,8];
// let count = 0;

// for(let i=0; i<=arr.length-1; i++){
//     if(arr[i]>=0){
//         continue
//     }else{
//         count++
//     }
// }
// console.log(count)


// copy all elements from an array to another array.

// let arr = [-1,-2,-3,-4,0,1,2,3,4,5,6,7,8];
// let newarr = [];
// for(let i=0; i<=arr.length-1; i++){
//        newarr.push(i)
// }

// console.log(newarr)


// to insert an element in an array.

// let arr = [0,1,2,3,4,5,6,7,8];
// let idx = 3
// let ele = 10

// for(let i=arr.length-1; i>=0; i--){
//     if(i>=idx)
//         arr[i+1] = arr[i]
//         if(i === idx){
//             arr[i] = ele
//         }
//     }

// console.log(arr)


// to delete an element from an array at specified position.
// let arr = [0,1,2,3,4,5,6,7,8];
// let idx = 4

// for(let i=0; i<arr.length; i++){
//     // console.log(arr[i])
//     if(i>=idx){
//         arr[i-1] = arr[i]
//     }
// }

// arr.length = arr.length-1
// console.log(arr)



// to count frequency of each element in an array.
let arr = [1,2,3,4,5,3,6,3,7,8];
let m = arr[0]
let count = 0;
for(let i=1; i<=arr.length-1; i++){
    if(m !== arr[i]){
        m = arr[i]
    }else{
        
    }
    console.log(m)
}







