// strings
console.log('hello, world');

let email='keerthigandhi1552001@gmail.com';
console.log(email);

//string concat
let firstname='Keerthi';
let lastname='Vasan';

let fullname=firstname+' '+lastname;
console.log(fullname);

//getting characters
console.log(fullname[2]);

//getting length
console.log(fullname.length);

//string methods
console.log(fullname.toUpperCase());
let result= fullname.toLowerCase();
console.log(result, fullname);

// string methods ++ 

let word="123456789999";
console.log(word.indexOf(9));
console.log(word.lastIndexOf(9));
console.log(word.slice(2,5));
console.log(word.substr(2,5));
console.log(word.replace('5','1'));
console.log(word.replaceAll('9','1'))
console.log(word.charAt(3));
console.log(word.charCodeAt(0));
console.log(word.concat("hi"));
console.log(word.search('4'));
console.log(word.match("345"));
console.log("     sddsff".trim());

let test = 'i am keerthi vasan';
const arr = test.split(' ');
console.log(arr[2]);