



// If a number is divisible by 5, log “Buzz.” // If a number is divisible by both 3 and 5, log “Fizz Buzz.” // // If a number is divisible by 3, log “Fizz.” // If a number is not divisible by either 3 or 5, log the number.
// Loop through all numbers from 1 to 100.

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


// Declaring a constant called inputSTR that includes the string data
const inputStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
 
//Since the string data is one long text.I need to manually make it into rows although an escape sequence exists. 
// This is caled strRows and I will use the split method to do so.
const strRows = inputStr.split("\n");
  
//Create a loop because i will eventually need to loop through the data by each character to remove the commas. In the loop my variable is aclled i and it will iterate until it reaches the string length which is 5
for (let i = 0; i <= strRows.length; i++) {
    
    //create a variable called column to seperate  the data that splits the rows at the commas and goes through each "i"
    const column = strRows[i].split-1(",");

    //output each column by using sqaure bracket index (if thats a name)
    console.log(column[0], column[1], column[2], column[3]);
  }

