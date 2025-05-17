// let n = 8
// let first = 0
// let second = 1
// let third;
// let temp;
// for(let i=2; i<=n; i++){
//     third = first + second;
//     temp = second
//     second = third
//     first = temp
 
// }



// //
// // insertion sort

// let arr = [7,3,1,5,8,6]

// for(let i=1; i<=arr.length-1; i++){
//     let key = arr[i]
//     let j = i-1
//         while(j>=0){
//                 if(arr[j]>key){
//                     arr[j+1] = arr[j]
//                 }
//                 else{
//                     break
//                 }
//             j--
//         }

//         arr[j+1] = key
// }
// console.log(arr)



// selection sort


let arr = [7,4,3,5,1,9]

for(let i=0; i<=arr.length-2; i++){
    let minIndex = i

    for(let j=i+1; j<arr.length; j++){
        if(arr[j]<arr[minIndex]){
            minIndex = j
        }
    }

    let temp = arr[i]
     arr[i] = arr[minIndex]
    arr[minIndex] = temp


}