
/*******************************************
this is the array sorting lesson (t14_array_sorting.js) 
*******************************************/

console.log("luxon is a egg");
/*

    //variables
var username = prompt("Welcome to my program! \nWhat is your name?", "User");
var age = prompt("Please enter your age " + username, 16);
var year = prompt("What year is it?", 2025);
var usermoney = prompt("How much money do you have? \n(Do not put a Comma please)", 0);
let chocolate = ["You dont like chocolate.", "its meh", "you like chocolate", "you like chocolate a lot"];
let choice = prompt("Do you like chocolate from 0-3");
let space = ["Good Choice.", "Bad Choice, have fun on Venus without a Spacesuit."];
let choice2 = prompt("Do Like Space? \n0 for yes, 1 for no");




*/
var total = 0
const DRIVINGAGE = 16;
/*
console.log("The total is", total);

      //took three days to make just thia
for (count = 0; count < 5; count++) {
    var userInputNumber = prompt("Please enter a number" , 0);
    total = total + parseInt(userInputNumber);
}

*/


/*******************************************
 Main Code
 ******************************************/
 






 
/*
 console.log(chocolate[choice] )
 console.log(space[choice2])
*/
 
/*
console.log("Loop started");
for (count = 3; count<20; count++) {
    console.log("Current Count is", count);
}
console.log("Loop ended");
*/
/*
console.log("The total is", total);




/*    //test to copy-paste when needed
console.log()
*/









/*******************************************
 Functions
 *******************************************/

function getFavoriteColour() {
    userFavColour = prompt("What is your favourite colour?", "Red");
    while (userFavColour == null) {
        userFavColour = prompt("Please enter a valid colour", "Red");
    }
    alert("Your favourite colour is " + userFavColour);
}

function askUserName() {
    username = prompt("Welcome to my program! \nWhat is your name?", "User");
   while (username == null) {
        username = prompt("Please enter a valid name", "User");
    }
    console.log("Hello",username,);
}

function askYear() {
    year = prompt("What year is it?", 2025);
    while (year == null) {
        year = prompt("Please enter a valid year", 2025);
    }
}

function askUserAge() {
    age = prompt("Please enter your age " + username, 16);
   while (age == null) {
        age = prompt("Please enter a valid age", 16);
    }
    console.log("As of",year,"you are almost",age,"years old");
}

function askUserMoney() {
    usermoney = prompt("How much money do you have? \n(Do not put a Comma please)", 0);
    while (usermoney === null ||
        usermoney === "" ||
        isNaN(usermoney)) {
        usermoney = prompt("Please enter a valid amount of money", 0);
    }
    console.log("You have",usermoney ,"dollars");
}

function ageMaths() {
    console.log("You were born in" ,year - age)
    console.log("In 10 years you will be:", parseInt(age) + 10, "years old");
}

function drivingAge() {
    if (age < DRIVINGAGE) {
        alert("You are not old enough to drive");
    }
    else {
        alert("You are old enough to drive");
    }
}

function MoneyMaths() {
    console.log("Half of your money is" ,usermoney / 2, "Dollars")
}


 function chocMoney() {
    if (usermoney < 24) {
   alert("Economic inflation sucks, You cannot afford a chocolate bar");
   console.log("Economic inflation sucks, You cannot afford a chocolate bar");
    }
else console.log("You can afford a chocolate bar");
}


function FiveChoicesNumbers() {
    total = 0;
    let count = 0;
    while (count < 5) {
        let userInputNumber = prompt("Please enter a number", 0);
        while (
            userInputNumber === null ||
            userInputNumber === "" ||
            isNaN(userInputNumber)
        ) {
            userInputNumber = prompt("Please enter a valid number", 0);
        }
        total = total + parseInt(userInputNumber);
        count++;
    }
console.log("The total is", total);
}

function infLoop() {
    let userInput = prompt("Continue Loop? (Y/N)", "Y");
    let loopCount = 0;
    while (userInput !== "Y" && userInput !== "N") {
        userInput = prompt("Please enter a valid response (Y/N)", "Y");
    }
    while (userInput === "Y") {
        loopCount++;
        userInput = prompt("Continue Loop? (Y/N)", "Y");
        while (userInput !== "Y" && userInput !== "N") {
            userInput = prompt("Please enter a valid response (Y/N)", "Y");
        }
    }
    console.log("The loop repeated", loopCount, "times.");
}

function start() {
   askUserName();
   askYear();
   askUserAge();
   ageMaths();
   drivingAge();
   askUserMoney();
   MoneyMaths();
   chocMoney();
   getFavoriteColour();
   FiveChoicesNumbers();
   infLoop();

if (age < 18) {
    console.log("Get back to School");}

else if (age > 18 && age < 30) {
    console.log("Get a Job already");}

else if (age > 30 && age < 100) {
    console.log("Get a Life");}

else if (age > 100 && age < 500) {
    console.log("Prune");}

else {
    console.log("You are a Relic");}



 if (username == "Christopher Luxon") {
    console.log("You are a Idiot");}
else if (username == "Luxon") {
    console.log("You are a Idiot");}

 else if (username == "luxon") {
    console.log("You are a Idiot");}

 else if (username == "christopher uxon") {
    console.log("You are a Idiot");}

if (username == "Kees") {
    console.log("T⍑ᔑℸ ̣ ᓭ c𝙹𝙹ꖎ");
}

if (username == "Adam") {
    console.log("You're very nice");
}

}