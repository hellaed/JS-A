'use strict';

const timor = 'wadafak';
console.log(timor);
let str1 = 'TAYMOR';
let str2 = 'Papa Pizza';
console.log(`Welcome ${str1} to ${str2}`);

let str3 = prompt('Whats your age?', 100);
let str4 = prompt('Whats your name?', 'Full Name Please');

let namechecked = str4;
let agechecked = str3;

alert(`Wow You are ${str4} and your age is ${str3}`);
if (namechecked) {
  alert(`Welcome!`);
}
let user = 'Heraldo';
let pass = 'MEOW';
let str5 = prompt('Enter Username');
let str6 = prompt('Enter Password');
if (str5 == user && str6 == pass) {
  alert('NO WAY ! YOU GUESSED IT');
} else {
  if ((str5 = user)) {
    alert('Wrong USERNAME!');
  } else alert('Wrong Password!');
}
let person = {
  name: 'Tony',
  age: 90,
  address: 'Thailand',
};
console.log(person);
let person2 = {
  name: str4,
  age: str3,
  address: prompt('Enter your addres', 'Ex: Haifa'),
};
console.log(person2);

//TASK #4

let flag = true;
let num = 1;
let str = 'wowow222';
let txt = `"true" true 123 "Hello"`;
console.log(typeof flag);
console.log(typeof num);
console.log(typeof str);
console.log(typeof txt);

let bdeka = 'WAKAMAKA2222';
let numcheck = bdeka.slice(9, 14);
console.log(typeof Number(numcheck));

