const title = document.querySelector('h1');

console.log(title.style);
console.log(title.style.color);

title.style.margin='50px';
title.style.color='crimson';
title.style.fontSize='60px'
title.style.margin=' ';

//-----------------------------------------------

const paras = document.querySelectorAll('p');

paras.forEach(p=>{
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }else if(p.textContent.includes('success')){
        p.classList.add('success');
    }else{
        p.classList.add('random');
    }
})

paras.forEach(p=>{
    console.log(p.textContent);
    console.log(p.innerHTML);
})

const title1 = document.querySelector('.title');
title1.classList.toggle('test');   // adds the class 
title1.classList.toggle('test');   // removes the class

console.log(title1)