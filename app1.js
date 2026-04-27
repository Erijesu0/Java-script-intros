let people = [18, 20, 16, 15, 21];

let adult = people.filter((element) => {
  return element >= 18;
});
console.log(adult);

let youngteen = [16, 17, 14, 15, 19];

let teen = youngteen.filter((element) => {
  return element >= 18;
});
console.log(teen);

let youngadult = [20, 22, 26, 16, 20];

let grownups = youngadult.filter((element) => {
  return element >= 18;
});
console.log(grownups);

let adl = [];
for (let i = 0; i < people.length; i++) {
  if (people[i] >= 18) adl.push(people[i]);
}

console.log(adl);

// another array method

let arrays = [1, 2, 3, 4, 5, 6];

arrays.map((element) => {
  console.log(element);
  return null;
});

console.log(newArray);
