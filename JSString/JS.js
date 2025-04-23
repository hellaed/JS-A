'use strict';
let name = 'Mary';
let activity = 'drink tea';
let bio = 'Our guest ' + name + activity + '.';

console.log(bio.length);
console.log(name[1]);

let str2 = prompt('Enter a text');
let tav = prompt('Enter a num');
let lasttav = str2.length - 1;

console.log(str2[tav]);
console.log('The last two chars are ' + str2[lasttav - 1] + str2[lasttav]); //Task #3

let reverse = ''; //Task #4
for (let i = str2.length - 1; i >= 0; i--) {
  reverse += str2[i];
}
console.log(reverse);

const str3 = 'js'; // Task #5
console.log(str3.toUpperCase());

// Task #6
const str5 =
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';
let check = prompt('Enter a String');
console.log(check.includes(str5, 0));

//Task #7
let str4 = '1-2-3-4-5';

for (let i = 0; i < str4.length; i++) {
  str4 == str4[i].replace('-', '.');
}
console.log(str4 + ' SHOKO');

//Task #8
console.log(str4.replaceAll('-', '.'));

//Task #9
const str = 'sdfwe';
console.log(str.substring(4, 2));

//Task #10
const str9 = "I'm learning javascript!";
console.log(str9.substring(4, str9.length));
console.log(str9.slice(4, str9.length));
console.log(str9.substr(4, str9.length));

//Task #11
const str10 = 'http://www.notion.so/String-820cf1e906884d8fb9c02236fe1c6dcb/';
console.log(str10.indexOf(0, 'http://'));
// returned 30 which is true

//Task #12
const str11 = 'https://www.notion.html';
console.log(str11.indexOf(str11.length - 5, '.html'));

//Task #13
const str12 = 'ab cd cd cd ef';
console.log(str12.lastIndexOf('cd')); //
console.log(str12.lastIndexOf('cd', 8)); //

//Task #14
const str13 = 'abcde';

console.log(str13.startsWith('abc')); // true
console.log(str13.startsWith('xxx')); // false
console.log(str13.startsWith('bc', 1)); // true

//Task #15
const str14 = 'abcde';
console.log(str13.startsWith('abc' + 'eeeee')); // false
console.log(str13.startsWith('xxx')); // false
console.log(str13.startsWith('bc', 1)); // true

//Task #16
let str15 = 'ab-cd-ef';
console.log(str15.split('-')); //[ab,cd,ef]
console.log(str15.split('-', 2)); // [ab,cd]
console.log(str15.split('')); // [ab,cd,ef]
console.log(str15.split('', 3)); //[abcdef]

let str16 = '12345';
console.log(str16.split('')); // 1 2 3 4 5
