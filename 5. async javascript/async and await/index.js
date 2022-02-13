// async and await

const gettodos = async () =>{
    const response = await fetch('todos/roy.json');

    if(response.status!==200){
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();

    return data;
}

console.log(1);
console.log(2);

gettodos()
    .then(data => console.log('resolved:',data))
    .catch(err => console.log('rejected:',err.message));

console.log(3);
console.log(4);