// const and let variables
const Name = 'Max';
//let age = 29;
const hasHobbies = true;
//age = 30;



// function expression with arrow function
const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
       'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby  
    );
}
console.log(summarizeUser(Name, age, hasHobbies));



// Spread operator
const copiedPerson = { ...person };
console.log(copiedPerson);

const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

person.greet();



const hobbies = ['bike riding', 'map reading'];
for(let hobby of hobbies){
    console.log(hobby);
}

const copiedArray = [...hobbies];
console.log(copiedArray);


// Rest operator
const toArray = (...args) => {
   return args;
}
console.log(toArray(1, 2, 3, 4));

// Array method (Map)
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);


const printName = ({ name }) => {
    console.log(name);
}

printName(person);

// Object Destructuring
const { name, age } = person;


// Array Destructuring
const [ hobby1, hobby2 ] = hobbies;





