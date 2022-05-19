const fs = require('fs');

const genders = ["M", "F"];
const maleNames = [ "Jack", "Andrew", "Peter", "Tom" ];
const femaleNames = [ "Jane", "Amanda", "Kate", "Judy"];
const lastNames = [ "Doe", "Smith", "Jackson"];

const randChoice = arr => {
  const  randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem = arr[randomIndex];
  return randomItem;
}

const people = [];

for (i = 1; i <= 20; i++) {
  const gender = randChoice(genders);
  const firstName = (gender === "M" ? randChoice(maleNames) : randChoice(femaleNames));
   const age = Math.floor(Math.random() * 61 + 18);
  const lastName = randChoice(lastNames);

  const person = {
    gender: gender,
    firstName: firstName,
    lastName: lastName,
    age: age
  }

  people.push(person);
}

const peopleData = JSON.stringify(people);

fs.writeFile('people.json', peopleData, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});