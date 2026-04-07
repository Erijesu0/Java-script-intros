console.log("Hello world"[8]);
console.log("23433232323");
console.log(`Ted` + `Code`);
console.log("ASAP".length);

/*Numbers the normal calculations are done, however signs like % will give the remainder the / sign will divide perfectly. 10%3= 1, 9%3=0 no remainders. 10/2=5*/

/* variable*/
let string = "TEDCODE";
console.log(string[6]);

let userEmail = "erijesu@gmail.com"; /* the form in writing variables*/
+
/*let age = 25;
let name = "Erijesu";

age = age + 1;
console.log(age);*/
// Const keyword/ const varibles can only be used once

const points = 200;
console.log(points);

// creating a converter from USD to AUD
let USD = 1200;
let AUD = USD * 1.5;
console.log(AUD);
// comparison Operators
let comparison = 5 == "5";
console.log(comparison);
//  mostly used
let comparisonOperators = "5" === 7;
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

let age = 18;
let hasId = true;

if (age >= 18 && hasId === true) {
  console.log(`you may enter the club`);
}
