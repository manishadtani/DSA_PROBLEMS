// reverse a string
// let str = "hello"
// let newstr = ""

// for(let i=str.length-1;i>=0; i--){
//    newstr = newstr + str[i]
// }

// console.log(newstr)



// check if a string is palindrome
// let str= "madam"
// let newstr = ""
// for(let i=str.length-1; i>=0; i--){
//     newstr = newstr + str[i]
// }

// if(newstr === str) console.log("plaindrom")
// else console.log("Not palindrome")


// Count Vowels and Consonants in a String

// let str = "maneeeiocsish";
// let vowels = "aeiou"
// let count = 0;
// // console.log(str.includes("a"))
// for(let i=0;i<=str.length-1; i++){
//     console.log(str.charAt(i))
//     if(str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u" ) {
//         count++;
    
//     }


// }
// console.log(count)



// let str = "maneeeiocsish";
// let count = 0
// let vowels = "aeiou"

// for(let i=0; i<=str.length-1; i++){

//     if(vowels.includes(str[i])){
//         count++;
//     }
// }

// console.log(count)




// moderate

// let str = "heeelllllo"
// let char = "le";
// let count = 0;

// for(let i=0; i<=str.length-1;i++){
//     for(let j=0; j<char.length; j++){
//         if(str[i] === char[j])count++
//         // console.log(char[j])
//     }
//     // console.log(str[i])

// }

// console.log(count)



// Check if Two Strings are Anagrams

// let str1 = "listen"
// let str2 = "silent"
// // console.log(str1)

//     str1 = str1.split("").sort().join("")
//     str2 = str2.split("").sort().join("")


//     if(str1 === str2) console.log("Same hai")


let str1 = "listen"
let str2 = "silent"


for(let i=0; i<=str1.length-1; i++){
    for(let j=0; j<=str2.length-1; j){
        if(str1[i] === str2[j]){
            console.log(`${str2[i]} hai`)
        }else{
            console.log(`${str2[i]} nhi hai`)
        }
    }
}

if(str1 === str2){
    console.log("same")
}else{
    console.log("Not same")
}

