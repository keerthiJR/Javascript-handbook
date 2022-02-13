// foreach

let people = ['kunj','bur','saad','muk'];

people.forEach(function(people,index){
    console.log(people,index);
});

people.forEach((people)=>{
        console.log(people)
});

// ----------------------------

const callback=(person,index)=>{
    console.log(person,index);
}

people.forEach(callback);


// queryselector

const ul = document.querySelector('.demo');
let html =``;

people.forEach((people)=>{
    html+=`<li style="color: blue">${people}</li>`
});

ul.innerHTML=html;
console.log(html);
document.querySelector('h1').innerHTML="oooo"