//  primitive types            Reference types

// - numbers               - all types of objects
// - strings                   - object literals
// - Booleans                  - arrays
// - null                      - functions
// - undefined                 - dates
// - symbols                   - all other objects


// stored in stack - limited(size) and fast  - stored in heap - no limit and less speed


// primitive values    - stack

let scoreone = 50;
let scoretwo = scoreone;
console.log(`score1 : ${scoreone} \nscore2 : ${scoretwo}`);

scoreone = 100;
console.log(`score1 : ${scoreone} \nscore2 : ${scoretwo}`);

// reference values   - heap

let person1 = {name: 'keerthi',age: 20};
let person2 = person1;
console.log(person1,person2);

person1.age=25;
console.log(person1,person2);
