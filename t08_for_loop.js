
/*******************************************
this is the for loops lesson (t08_for_loop.js) 
*******************************************/

console.log("luxon is a egg");


    //variables
var username = prompt("Welcome to my program! \nWhat is your name?", "User");
var age = prompt("Please enter your age " + username, 16);
var year = prompt("What year is it?", 2025);
var usermoney = prompt("How much money do you have? \n(Do not put a Comma please)", 0);
let chocolate = ["You dont like chocolate.", "its meh", "you like chocolate", "you like chocolate a lot"];
let choice = prompt("Do you like chocolate from 0-3");
let space = ["Good Choice.", "Bad Choice, have fun on Venus without a Spacesuit."];
let choice2 = prompt("Do Like Space? \n0 for yes, 1 for no");


/*******************************************
 Main Code
 ******************************************/
 






 console.log("Hello",username,);
 console.log("As of",year,"you are almost",age,"years old")
 console.log("You were born in" ,year - age)
 console.log("In 10 years you will be:", parseInt(age) + 10, "years old");
 console.log("You have",usermoney ,"dollars");
 console.log("Half of your money is" ,usermoney / 2, "Dollars")
 console.log(chocolate[choice] )
 console.log(space[choice2])

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

console.log("Loop started");
for (count = 3; count<20; count++) {
    console.log("Current Count is", count);
}
console.log("Loop ended");












/*******************************************
 Functions
 *******************************************/














 