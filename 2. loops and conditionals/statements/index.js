//if statements

const age = 20;
if(age>18){
    console.log("eligible for vote");
}else{
    console.log("not eligible");
}

let name=['keerthi','vasan','ney'];
if(name.length>3){
    console.log("eligible");
}else{
    console.log("not")
}

const word="12@4"
if(word.length>10 && word.includes('@')){
    console.log("strong");
}else if(word.length>5 || word.includes('@') && word.length>3){
    console.log("half strong")
}else{
    console.log("not eligible");
}

// logical not
let user = false;
if(!user){
    console.log("user logged in");
}

console.log(!true);
console.log(!false);

//break and continue
let condi = [12,4,32,100,12,3,100,98];

for(let i =0;i<condi.length;i++){
    if(condi[i]===100){
        console.log("ur score "+ condi[i]+" !! worreyyy");
        console.log("sucess!!!")
        break;
    }else{
        console.log("ur score "+ condi[i]);
        continue;
    }
    
}

// switch statements

const grade = 'D';
switch(grade){
    case 'A':
        console.log("total top rank");
        break;
    case "B":
        console.log("top rank ]");
        break;
    case 'C':
        console.log("average");
        break;
    case 'D':
        console.log("fail");
        break;
    default:
        console.log("po da po");
}

//variables & block scope

const age2 = 30;
if(true){
    const age2 = 40;
    var name2 = 'shan';    // note : var can be used outside of the block but let cannot be used 
    console.log('inside 1st code block: ',age2,name2);
    if(true){
        const age2=50;
        console.log("inside 2ndd code block: ",age2);
        var test="random"
    }
}

console.log('outside code block: ',age2,name2,test);

