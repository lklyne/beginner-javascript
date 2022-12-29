// console.log(`it works!`)

// anonymous function (no name)
// function (firstName) {
//     return `Dr. ${firstName}`
// }


// function expression
// const doctorize = function(firstName) {
//     return `Dr. ${firstName}`
// }

// arrow function
// these are anonymous... always!

// const inchToCM = inches => inches * 2.54

// const add = (a, b = 3) => a + b

// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby
// }

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 })

// (function() {
//     console.log('running the anon function')
//     return 'you are cool'
// })()

// Methods!!!!!! 👙

const person = {
    name: 'Lyle',
    sayHi: function() {
        console.log(`Hi, my name is ${this.name}`)
    },
    yellHi() {
        console.log(`HI, MY NAME IS ${this.name.toUpperCase()}`)
    },

    // arrow function
    whisperHi: () => {
        console.log(`hiiii, im a sneaky sneaky ${person.name.toLocaleLowerCase()}`)
    }
}

// callback functions boyo
const button = document.querySelector('.clickMe')
console.log(button)

button.addEventListener('click', person.yellHi)