// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = 'Caroline Driver';
// 1.2 Print `"The driver's name is XXXX"`.
console.log("The driver's name is", hacker1);
// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = 'Paul Navigator';
// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is",hacker2);

// Iteration 2: Conditionals
/*
  2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
  <br>
	  - `The driver has the longest name, it has XX characters.` or <br>
	  - `It seems that the navigator has the longest name, it has XX characters.` or <br>
	  - `Wow, you both have equally long names, XX characters!`.
*/
if (hacker1.length > hacker2.length) {
    console.log('The driver has the longest name, it has',hacker1.length,'characters.');
  } else if (hacker1.length > hacker2.length) {
    console.log('It seems that the navigator has the longest name, it has', hacker2.length, 'characters.');
  } else {
    console.log('Wow, you both have equally long names', hacker2.length, 'characters!');
  }

// Iteration 3: Loops
/*
  3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
  i.e. `"J O H N"`
*/
let nameSpaced = '';
for (i in hacker1) {
  nameSpaced += hacker1[i].toUpperCase() + ' ';
}
console.log(nameSpaced);
 /* 
  3.2 Print all the characters of the navigator's name, in reverse order. 
  i.e. `"nhoJ"`
*/
let reversedName = '';
for (i = hacker2.length-1; i >= 0 ; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);
/*
  3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
    - `The driver's name goes first.` <br>
    - `Yo, the navigator goes first definitely.` <br>
    - `What?! You both have the same name?`
*/
let nameComparison = hacker1.localeCompare(hacker2);
switch (nameComparison) {
  case -1:
    console.log("The driver's name goes first.");
    break;
  case 1:
    console.log('Yo, the navigator goes first definitely.');
    break;
  default:
    console.log('What?! You both have the same name?');
}