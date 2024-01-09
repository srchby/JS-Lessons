
const pc = ["Ram, Storage, CPU, GPU"]
pc.push('Cooler')
pc.unshift('Motherboard')
console.log(pc.indexOf('Cooler'))
console.log(pc)

const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    family: ['Son', 'Daughter', 'Husband'],
    location: {
        street: 'Paper street',
        city: 'Ny'
    }
}

const list = [{
    text: "PC",
},
{
    text: "Tablet"
},
{
    text: "Phone"  
}]

//  loop through array

for (let listing of list) {
    console.log(listing.text);
}

//  forEach, map, filter

console.log(person.firstName, person.family[1], person.location.street)

//  JSON Formatter

const personJSON = JSON.stringify(person);
console.log(personJSON)


//  for loop
for(let i = 0; i < 10; i++){
    console.log(i)
}

//  while loop

let i = 0
while (i <= 10) {
    console.log(i)
    i++
}

const y = 10;
const x = 4;

if (y === 10) {
    console.log('y is 10')
} 
else {
    console.log('y is not 10')
}

if (x > 4 && y > 10) {
    console.log('both are true')
}

if ( x > 3 || y < 10) {
    console.log('one of them are true')
}

const trueorfalse = y > 10 ? 'True':'False'

//switch

switch (trueorfalse) {
    case 'True':
        console.log('Its true');
        break;
    case 'False':
        console.log('Its false');
        break;
    default:
        console.log('Neither');
        break;
}

//Formatting funcions

const adding = (num1,num2) => {
    return num1 + num2
}

const subtracting = (num1, num2) => num1 - num2

// OOP

//Constructor function

/*
function Computer(ram, cpu, storageSize, brand, line) {
    this.ram = ram
    this.cpu = cpu
    this.storageSize = storageSize    
    this.brand = brand
    this.line = line
    this.getName = function() {
        return `${this.brand} ${this.line}`
    }
}
//Better way to do functions in OOP
Computer.prototype.getCPU = function() {
    return `${this.cpu}`
}
*/

//better way to do OOP with JS
class Computer {
    constructor (ram, cpu, storageSize, brand, line) {
        this.ram = ram
        this.cpu = cpu
        this.storageSize = storageSize    
        this.brand = brand
        this.line = line
    }
    getName() { 
        return `${this.brand} ${this.line}`
    }
    getCPU () {
        return `${this.cpu}`
    }
}

//Instantiate function

const pc1 = new Computer(8 ,'Intel Core i3-2310M', 128, 'Lenovo', 'Thinkpad')

console.log(pc1.getName())
console.log(pc1.getCPU())