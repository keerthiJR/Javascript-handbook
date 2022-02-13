// for loop

for(let i=0;i<5;i++){
    console.log("i = "+i);
}

const name=["keerthi",'vasan','ney'];

for(let i=0;i<name.length;i++){
    let html = `<div>${name[i]}</div>`;
    console.log(html);
}

// while loop

let demo=0;
while(demo<5){
    console.log("i = "+demo);
    demo++;
}
let r=0;
while(r<name.length){
    let htm=`<div>${name[r]}</div>`;
    console.log(htm);
    r++;
}

// do while loop

let m=0;
do{
    console.log("i = "+m);
    m++;
}while(m<5)

r=0;
do{
    let h=`<div>${name[r]}</div>`
    console.log(h);
    r++;
}while(r<name.length)