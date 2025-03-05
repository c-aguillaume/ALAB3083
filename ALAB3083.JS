



// // If a number is divisible by 5, log “Buzz.” // If a number is divisible by both 3 and 5, log “Fizz Buzz.” // // If a number is divisible by 3, log “Fizz.” // If a number is not divisible by either 3 or 5, log the number.
// // Loop through all numbers from 1 to 100.

// for (let x = 1; x <= 100; x++){
//     if (x % 3 === 0 && x % 5 === 0) {
//         console.log("Fizz Buzz")
//     }
//     else if (x % 3 === 0) {
//         console.log("Fizz");}
//     else if (x % 5 === 0){
//         console.log("Buzz")}  
//      else {
//         console.log(x);
//     }
// }
      
// Part 3

// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

const str =`ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`
for (const a of str) {
    if (a == ","){
        break;
    }
    console.log(str)
}


