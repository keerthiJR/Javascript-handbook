const para = document.querySelector('p');

para.innerText="world needs u";



const paras = document.querySelectorAll('p');

paras.forEach(para=>{
    para.innerText +=" new text added !!"
});


const content = document.querySelector('.content');
content.innerHTML += '<h2>Here the best in the world :<h2>'

const people =  ['messi','ney','ronaldo'];

people.forEach((person,index)=>{
    content.innerHTML += `<h3>${index+1}. ${person}</h3>`
});




