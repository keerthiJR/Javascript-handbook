// queryselector
//const demo = document.querySelector('body > div:nth-child(2) > p:nth-child(1)')
const para = document.querySelectorAll('p');
const error = document.querySelectorAll('.error');
para.forEach((para)=>{
    console.log(para)
})                                      // Nodelist - foreach is poosible
console.log(para);
console.log(error);

// get the element by id

const title1 = document.getElementById("page-title");
console.log(title1);        

// get element by their class name

const errors = document.getElementsByClassName("error");
//errors.forEach(error=>{
 //   console.log(error)          // htmlcollection - foreach is not possible
//});
console.log(errors);
console.log(errors[1]);


