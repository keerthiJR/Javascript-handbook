// callbacks  -- function inside another function

const func=(name)=>{
    let fname='keerthi';
    let lname='vasan';
    name(fname,lname);
}


func((fname,lname)=>{
    console.log(fname,lname);
});

// callbacks

const myFunc = (callbackFunc) => {
    // do something
    let value=30;
    callbackFunc(value);
}

myFunc((value)=>{
    //do something
    console.log(value);
});


// another example

const area=(para1,para2)=>{
    let length=5;
    let breath=10;
    para1(length,breath);
    para2(length,breath);
}

area((length,breath=>{
    console.log(length+breath);
}),(length,breath)=>{
    console.log(length*breath);
})



