let age = 25

// loose comparison (different types can still be equal)

console.log(age==25);
console.log(age=='25');
console.log(age!=25);
console.log(age!='25');

//tight comparison (different types cannot be equal)

console.log(age===25);
console.log(age==='25');
console.log(age!==25);
console.log(age!=='25');

// type casting

let score = '100';

console.log(Number(score)+1);

console.log(typeof(score));
score=Number(score);
console.log(typeof(score));

console.log(Number("hi"));
console.log(String(40));
console.log(Boolean("hello"));
console.log(Boolean(0));
console.log(Boolean("0"));


