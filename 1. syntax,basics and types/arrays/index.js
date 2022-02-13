let string=["keeerthi","vasan","ney"];
let num=[10,11,4];

console.log(string[1]);
console.log(num[1]);

let mixed=[10,29,"keerthi","jr"];
console.log(mixed[0]);

//array methods

// point : some method alters the original array some method doesn't

console.log(string.join('-'));
console.log(string.indexOf('ney'));
console.log(string.concat(['messsshi','suiiiiii']));
console.log(string.push('vammmoos'));  // alters the original string and push method retuns the length of an array
console.log(string);
console.log(string.pop());
console.log(string);


// some more array methods

let arr1= ['a','b','c'];
let arr2= ['d','e','f'];           // concat

let arr3=arr1.concat(arr2);
console.log(arr3)

arr3.fill('g',5)               // fill
console.log(arr3);