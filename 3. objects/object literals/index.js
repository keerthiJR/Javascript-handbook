// object literals

let user={
    name:'keerthi',
    age:20,
    email:'keerthi@email.com',
    location:'chennai',
    blogs:['why mac','why win','10 things']
};


console.log(user);
console.log(user.name);

user.age=21;
console.log(user.age);

console.log(user['location']);
user['location']='bangalore';
console.log(user['location']);

const key = 'email';
console.log(user[key]); 

console.log(typeof user);

// this keyword and function declaration inside object

let person ={
    name: 'keerthi',
    blogs: ["the book of paradise","power is power","always let it be"],
    movies:[{
        name:'ayan',
        year: 2008,
        status: 'success'
    },{
        name: 'villu',
        year: 2012,
        status: 'failure'
    }],
    login(){   // or login: function(){
        console.log(this.blogs[1]+" user logged in");
    },
    logout: function(){
        console.log(this.name+" user logged out");
    },
    // note : if we are using this keyword we can't declare inside arrow function... this keyword must be declared inside normal function  
    logblogs: function(){
        this.blogs.forEach(blog=>{
            console.log(blogz);
        });
    },
    logmovies: function(){
        this.movies.forEach(movie=>{
            console.log(movie.name+'\n'+movie.year+'\n'+movie.status);
        })
    }

}

// imp note: if we using "this" outide it will act as a global window but if u r using inside normal function it will act as window inside 
// the function and if u r using arrow function it will act as a global so thats why we are not using arrow funciton while we are declaring 
// this keyword inside the function 

console.log(person.name);
person.login();
person.logout();
person.logblogs();
person.logmovies();