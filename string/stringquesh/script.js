// Traversing
// let str = "manish"
// let neelem = ''
// for( let arr of str){
//     neelem = neelem + arr
// }
// console.log(neelem)




// Accessing
// let str = "manish"
// console.log(str.charAt(1))
// console.log(str.slice(0,4))


// Insertion

// let str = "manish"
// let newstr = str.slice(0,3) + 'y' + str.slice(3,6)
// console.log(newstr)



// Deletion
// let str = "manish"
// console.log(str.replace("m",""))




// reverse a string

// let str="manish"
// console.log(Array.from(str).reverse().join(""))

// console.log(str.split("").reverse().join(""))

// let newstr = ''
// for(let i=str.length-1; i>=0; i--){
//         newstr = newstr + str[i]
// }
// console.log(newstr)



// check f a string is palindrom 
// let str = "madamm"
// let isPalindrom = true
// for(let i=0; i<str.length /2 ; i++){
//     if(str[i] !== str[str.length-i-1]){
//        isPalindrom = false;
//     }

    
// }
// if(isPalindrom===true){
//     console.log("palindrom")
// }else{
//     console.log("not palindrom")
// }



// Accept a string str, count & print the number of vowels, consonants, and 
// spaces in it.
// Example 1 : 
// Example 2: 
// Input:
// Input:
// Output:
// Output:
// str = “hello world”
// str = “12345”
// Vowels: 3, Consonants: 7, Spaces: 1
// Vowels: 0, Consonants: 0, Spaces: 0

// let str = "manish  888   adtani"

// let vowelCount = 0;
// let spaceCount = 0;
// let consonants = 0;
// let numberCount = 0;
// str = str.toLowerCase();
// for(let i=0; i<=str.length-1; i++){

//     let newval = str[i]
//     if("aeiou".includes(newval)){
//         vowelCount++
//     }else if(newval === " "){
//         spaceCount++
//     }else if(newval >= 0 && newval <= 9){
//         numberCount++
//     }else if(newval >= "a" && newval <= "z"){
//         consonants++
//     }
    
// }


// console.log(vowelCount)
// console.log(consonants)
// console.log(spaceCount)
// console.log(numberCount)



// let str = "mAnIshaDtaNi"

// str = str.split("")
// for(let i=97; i<=122; i++){
//        let char = String.fromCharCode(i)

//        if(str.includes(char)){
//         str.to
//        }
// }



// let s = "manish"
// let j = "hello Manish"
// console.log(s.toLowerCase())
// console.log(s.toUpperCase())
// console.log(s.concat(" coding"))
// console.log(s.endsWith("ns"))
// console.log(s.startsWith("ns"))
// console.log(s.includes("ma"))
// console.log(s.split(""))
// console.log(s.split("").reverse())
// console.log(s.split("").reverse().join(""))
// console.log(s.substring(2,6))
// console.log(s.substring(4))
// console.log(s.slice(3))
// console.log(s.replace("man","kim"))
// console.log(j.replace("Hello Manish","hey garima"))
// console.log(j.replaceAll("hello","hey"))





// let arr = ["pay", "attire","practice","attend"];

// for(let i=0; i<=arr.length-1;i++){
//     if(arr[i].startsWith("at")){
//         console.log("Haa aa raha hai")
//     }
// }




// let sentence = "Hello bhai kaise ho"
// let sent = sentence.split(" ")

// for(let i=0; i<=sent.length-1; i++){
//     console.log(sent[i].charAt(0).toUpperCase() + sent[i].substring(1))
// }



// 
// console.log(arr[j])



let nums = [1,5,0,3,5]
function abcd(){

    let count = 0;

    while(true){
        let nonZero = nums.filter((elem)=>elem !== 0)
        if(nonZero === 0) break;
       let minimum = Math.min(...nonZero);
    //    console.log(minimum)
    nums = nums.map((items)=>{
            items>0 ? nums - minimum : 0;
    })
    count++
    
    }

    return count;
}

abcd(nums)
console.log(count)

