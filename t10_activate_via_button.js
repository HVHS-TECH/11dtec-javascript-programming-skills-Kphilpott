
/*******************************************
this is the buttons lesson (t10_activate_via_button.js) 
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
    alert("Your favourite colour is " + userFavColour);
}

function askUserName() {
    username = prompt("Welcome to my program! \nWhat is your name?", "User");
   console.log("Hello",username,);
}

function askYear() {
    year = prompt("What year is it?", 2025);
}

function askUserAge() {
    age = prompt("Please enter your age " + username, 16);
   console.log("As of",year,"you are almost",age,"years old");
}

function askUserMoney() {
    usermoney = prompt("How much money do you have? \n(Do not put a Comma please)", 0);
    console.log("You have",usermoney ,"dollars");
}

function ageMaths() {
    console.log("You were born in" ,year - age)
    console.log("In 10 years you will be:", parseInt(age) + 10, "years old");
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
for (count = 0; count < 5; count++) {
    var userInputNumber = prompt("Please enter a number" , 0);
    total = total + parseInt(userInputNumber);
}
console.log("The total is", total);
}

function start() {
   askUserName();
   askYear();
   askUserAge();
   ageMaths();
   askUserMoney();
   MoneyMaths();
   chocMoney();
   getFavoriteColour();
   FiveChoicesNumbers();

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