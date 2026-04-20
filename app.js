/*const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
});


document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mainNav = document.getElementById('mainNav');

  hamburger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);

    // fixes border-radius when menu is open
    mainNav.classList.toggle('menu-closed', !isOpen);
  });
});*/

console.log("Hello world"[5]);
console.log("23433232323");
console.log(`Ted` + `Code`);
console.log("ASAP".length); /* the length of a string*/

/*Numbers the normal calculations are done, however signs like % will give the remainder the / sign will divide perfectly. 10%3= 1, 9%3=0 no remainders. 10/2=5*/

/* variable*/
let string = "TEDCODE";
console.log(string[6]);

// Let Keyword in variable
let userEmail = "erijesu@gmail.com"; /* the form in writing variables*/

/*let age = 25;
let name = "Erijesu";

age = age + 1;
console.log(age);*/
// Const keyword/ const varibles can only be used once

const points = 200;
console.log(points);

// creating a currency converter from USD to AUD
let USD = 1200;
let AUD = USD * 1.5;
console.log(USD);

// comparison Operators......... equality comparison operators
let comparison = 5 == "5"; // double equals checks for equal values
console.log(comparison);
//  mostly used
let comparisonOperators = "5" === 5; // checks for equal values and types
console.log(comparisonOperators);

// ****conditionals***//

let hasMembership = true;
let signedIn = true;

if (hasMembership === true) {
  console.log("show user the video");
} else if (signedIn === true) console.log("tell user to upgrade their account");
//  if condition is not true display false(else)
else {
  console.log("tell user to log in");
}

/*let age = 18;
if (age > 18) {
  console.log(`You are ${age} you old may enter the club`);
} else if (age === 18) console.log("You are 18, welcome!");
else {
  console.log("you are  ${age} yr old, a minor please leave.");
}*/

// Tenary Operators
let isRaining = true;

isRaining ? console.log("it is raining") : console.log("it is not raining");

let age = 19;
let hasId = true;
//let str = age >= 19 && hasId ? "You may enter" : "you may not enter";
//console.log(str);

let loggedIn = true;
let hasMember = false;

//let str = loggedIn && hasMember ? "show the video" : "dont show the video";
//console.log(str);

// **** LOOPS *** //
// DRY printable == Don't repeat yourself

//let counter = 1;

//while (counter <= 20) {
//  console.log(counter);
// counter++;
//}
//console.log(" while loop finished running");

//for (let i = 0; i < 50; i++) {
// console.log(i);
//}

//excersise

for (let i = 1; i <= 15; ++i) {
  if (i % 5 === 0) {
    console.log(`${i} - Asap  frontend`);
  } else if (i % 2 === 0) {
    console.log(`${i} - frontend`);
  } else {
    console.log(`${i} - Asap`);
  }
}
let str = "ASAP Frontend";

for (i = 0; i < str.length; ++i) {
  console.log(str[i]);
}

// function Declaration
function greetme(time, teacher) {
  console.log(`Good ${time}, ${teacher}`);
}
// call the function
greetme("Morning", "Daniel"); // the values passed into the function are called argument
greetme("afternoon", "Erijesu");
greetme("Evening", "James");

function main() {
  return "Yo, wassup";
}

console.log(main());

function sum() {
  return 20000000 - 300;
}

console.log(sum());
