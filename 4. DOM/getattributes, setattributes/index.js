const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.linkedin.com/in/keerthi-vasan-a-0475881b1/');
link.innerText="way to linked in...";

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class','success');
mssg.setAttribute('style','color: red;font-size:30px');
