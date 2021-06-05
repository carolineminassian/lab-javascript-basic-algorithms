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

/*
Go to [lorem ipsum generator](http://www.lipsum.com/) and:
  - Generate 3 paragraphs. Store the text in a variable type of string.
  - Make your program count the number of words in the string.
  - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.
*/
let para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed leo vehicula, venenatis sem id, condimentum lacus. Sed et ex lorem. Ut interdum, erat nec mattis ornare, felis tortor lobortis libero, id maximus justo metus non tellus. Sed accumsan purus at purus sollicitudin, vel feugiat leo pharetra. Proin luctus finibus sapien vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id semper mauris, nec dapibus dolor. Donec lorem felis, pharetra ut orci consequat, hendrerit semper odio. Nunc vel mi non ante finibus sagittis vitae in enim. Donec tempus vulputate justo sed semper. Fusce facilisis, dui eget vulputate cursus, nulla odio lacinia lectus, quis semper enim ante suscipit tellus. Quisque in ultrices enim. Morbi gravida dignissim purus, ut egestas lorem auctor a. Sed eros mauris, mattis et tellus id, sodales auctor velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin elit elit, pharetra vel metus sed, aliquet scelerisque nibh. Phasellus tempor, velit a sodales bibendum, urna dui tempor est, id faucibus sem arcu quis velit. Proin ut consequat diam. Suspendisse potenti. Praesent lobortis, odio in feugiat auctor, nisi orci gravida nunc, congue eleifend tortor mauris eget lorem. Suspendisse vehicula mattis nulla vitae vehicula. Sed pharetra dictum diam id lacinia. Donec varius feugiat eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut ex sed metus maximus dapibus non sed lacus. Nam pretium, leo ut mattis semper, dui nibh molestie lorem, sit amet pharetra lectus eros ut magna. Aliquam euismod, lectus a egestas malesuada, risus erat aliquet neque, ac pulvinar eros tellus eget quam. Aenean sed velit erat. Cras efficitur dui ac rhoncus tempus.\n Aliquam accumsan, magna at aliquet consectetur, massa libero ultrices ligula, non fermentum massa augue in eros. Mauris non ullamcorper erat. Ut rutrum justo ut scelerisque pellentesque. Sed tincidunt ligula eget lectus hendrerit commodo. Donec efficitur molestie odio et cursus. Praesent porta, nunc in dapibus luctus, dolor neque scelerisque nunc, at finibus lectus ipsum id est. Sed eu magna consequat, suscipit ipsum in, tempus nisl. Nulla consequat ex efficitur scelerisque viverra. Sed tincidunt ligula ut faucibus pulvinar. Nullam quis nibh mollis, consectetur ipsum id, sodales erat. Nulla interdum volutpat malesuada. Pellentesque ac mattis odio. In a libero et mi sodales imperdiet. Cras at ultrices justo, eget pellentesque turpis. Nam posuere mauris ac arcu auctor viverra. Aliquam fringilla, sem eu lobortis sodales, leo augue bibendum ligula, eget bibendum velit felis quis metus."

let wordCount = 0;
for (i in para) {
  if (para[i] === ' ') {
    wordCount++;
  }
}
console.log(wordCount+1);