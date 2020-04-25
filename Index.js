/*
    alert("Hello NexSkill");
    alert("JavaScript Batch 1"); 
*/
// Variable
// var myName = "Jahanzeb Naeem";
// var yourName = prompt("Please tell me your name");

// String, Integer, boolean
// var myName = "Jahanzeb" + " Naeem"; // String
// var myAge = 35; // Integer
// var isTrue = true; // boolean

// Q1: Complete the provided challenge in challenge.js file

// var yourName = prompt("Please enter your name");

// var yourNameCharLength = yourName.length;

// var firstChar = yourName.slice(0,1);

// var yourNameUpper = yourName.toUpperCase();

// var yourNameLower = yourName.toLowerCase();

/* 
    Q2: Get input name from user and what ever s/he enters display the name as first char in caps
        and rest of char in small.
*/

// // 1) Get user input
// var yourName = prompt("Please enter your name");
// // 2) Make first char caps
// // a) Get first chars
// var firstChar = yourName.slice(0, 1);
// // b) Make first char caps
// var firstCharUpper = firstChar.toUpperCase();

// // 3) Make other char small
// // a) Get other chars
// var otherChars = yourName.slice(1, yourName.length);
// // b) Make them small
// otherCharsLower = otherChars.toLowerCase();
// // 4) Combine both string
// yourName = firstCharUpper + otherCharsLower;
// // 5) Display the complete Name
// alert("Your name is: " + yourName);

// // Q3: Create a tweeter messenger
// // 1) Get input
// var enteredChar = prompt("Please enter a tweet");
// // 2) Count char enter
// var enteredCharCount = enteredChar.length;
// // 3) Subtract from total
// var remainingChars = 280 - enteredCharCount;
// // 4) Display messenger like "You have entered 100 char, and your have 180 chars remaining"
// alert("You have entered " + enteredCharCount + " char, and your have " + remainingChars + " chars remaining");

// // Q4: Create a tweeter messenger with only allowed char
// // 1) Get input
// var enteredChar = prompt("Please enter a tweet");
// // 2) Slice the remaining text
// var displayChars = enteredChar.slice(0, 280);
// // 3) Display the sliced text
// alert(displayChars);

// function getMilk() { 
//     console.log("Step out");
//     console.log("Turn right");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Ture left");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Buy milk");
//     console.log("Turn right");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Ture left");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Place milk");
// }

// getMilk();

// Q5, Q6 and Q7 as discussed in the class. Submit to jahanzeb.naeem@hotmail.com by April 24, 2020. 

// function dogAgeCalculator() {
//     var dogAge = prompt("Enter your dog age.", 3);
//     var humanAge = ((dogAge - 2)* 4)+ 21;
//     console.log("Your dog's age equivalent to a human age: " + humanAge);
// }

// dogAgeCalculator();

// function getMilk(boxOfMilk) { 
//     console.log("Step out");
//     console.log("Turn right");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Ture left");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Buy " + boxOfMilk + " box of milk");
//     console.log("Turn right");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Ture left");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Place milk");
// }

// getMilk(2);

// function getMilk(amount) { 
//     console.log("Step out");
//     console.log("Turn right");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Ture left");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     var boxOfMilk = Math.floor(amount/110);
//     var remainingAmount = amount%110;
//     console.log("Buy " + boxOfMilk + " box of milk.");
//     console.log("Turn right");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Ture left");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Place milk");
//     return remainingAmount;
// }

// var changeAmount = getMilk(200);
// console.log("Your remaining amount is :" + changeAmount);

// function getMilk(amount, packPrice = 110) { 
//     console.log("Step out");
//     console.log("Turn right");
//     console.log("Move");
//     console.log("Ture left");
//     console.log("Move");
//     var boxOfMilk = Math.floor(amount/packPrice);
//     var remainingAmount = amount%packPrice;
//     console.log("Buy " + boxOfMilk + " box of milk.");
//     console.log("Turn right");
//     console.log("Move");
//     console.log("Ture left");
//     console.log("Move");
//     console.log("Place milk");
//     return remainingAmount;
// }

// var changeAmount = getMilk(200, 120);
// console.log("Your remaining amount is :" + changeAmount);

var a = 2;
var c = 2;
var b = "2";
var d = "2";

// if(a===b) {
//     console.log("They are equal");
// } else {
//     console.log("They are not equal");
// }

if(a!==c || b===d){
    console.log("They are equal")
} else if (a===b) {
    console.log("They are not equal")
} else {
    console.log("They are all not equal")
}