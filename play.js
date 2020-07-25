/*const person = {
    name: 'Thando',
    age: 29,
    greet() {
        console.log('Hi, I am '+ this.name);
    }
};

const printName = ({ name }) => {       // destructoring
    console.log(name);
}

printName(person);

const { name, age } = person;       // object destructuring
console.log(name, age);

const hobbies = ['Sports', 'Cooking', 'Working out'];
const [hobby1, hobby2] = hobbies;  // array destruction, call by position within the array

console.log(hobby1, hobby2);
*/

// for (let hobby of hobbies) {
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => 'Hobby: '+ hobby));
// console.log(hobbies);

// const copiedArray = [...hobbies, 'Programming', 'Building'];
// const copiedArray = hobbies.slice();
// console.log(copiedArray);


// const toArray = (...args) => {
//     return args;
// };
// console.log(toArray(1, 2, 3, 4,5));

const fetchData = () => {

    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            res('Done');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);

console.log("Hello!");
console.log('Hi');