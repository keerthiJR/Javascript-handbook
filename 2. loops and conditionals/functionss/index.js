//function expression
function add(){
    console.log("function add");
}

const funct = function(){
    console.log("function funct");
}

// function declaration
add();
funct();


// note: we cannot declare a const which has the function after the function declaration... it will throws an error...
// but we can declare a pre defined function after the function declaration it will not throw an error due to hosting..




// arguments and parameters

const concat = function(fname='ney',lname='jr'){
    console.log(`my fname is ${fname} and my last name is ${lname}`);
};

concat();
concat('keerthi');
concat('keerthi','vasan');


// returning values

const ret=function(radius){
    return 3.14*radius**2;
};

const area = ret(5);
console.log(area);


//--------------------------------------------

//normal function
function name(fname='neymar',lname){
    let res=`my name is ${fname} ${lname}`;
    return res;
}

let fname=name('keerthi','vasan');
console.log(fname);

// function inside const
const res=function(fname,lname){
    return `my name is ${fname} ${lname}`;
}

console.log(res('neymar','jr'));

// arrow function

const r=(fname,lname)=>{
    let htm=`my name is ${fname} ${lname}`
    return htm;
}

let pass=r('keerthi','jr');
console.log(pass);


