"use strict";
/*interface Admin  {
    name: string;
    privilege: string[];
}

interface Employee {
    name: string;
    startedDate: Date;
}

interface ElevatedEmployee extends Employee, Admin{}*/
const el = {
    name: 'Tanja',
    privileges: ['create-database'],
    startedDate: new Date(),
};
function addEl(a, b) {
    //TYPE GUARD
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = addEl('Max', 'Swartz');
result.split('');
function printEmployeesInformation(em) {
    console.log("Name: " + em.name);
    // TYPE Guard
    if ('privileges' in em) {
        console.log('privileges: ' + em.privileges);
    }
    if ('startedDate' in em) {
        console.log('startedDate: ' + em.startedDate);
    }
}
printEmployeesInformation(el);
printEmployeesInformation({ name: 'Employees', privileges: ['first'] });
printEmployeesInformation({ name: 'Manu', startedDate: new Date() });
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Drive Truck...');
    }
    loadCargo(amount) {
        console.log('Loading...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    //TYPE Guard
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(10);
    }
}
useVehicle(v1);
useVehicle(v2);
function movingAnimal(animal) {
    let speed;
    //DISCRIMINATED Union Gard
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving speed: " + speed);
}
movingAnimal({ type: 'horse', runningSpeed: 15 });
//TYPE CASTING
//const element =<HTMLInputElement> document.querySelector('#my-id')! ;
const element = document.querySelector('#my-id');
element.value = 'Hi there!';
const errorBag = {
    email: 'Invalid email',
    username: 'You must provide username!'
};
//OPTIONAL CHAINING
const fetchedUse = {
    id: 'uui',
    name: 'Max',
    job: {
        title: 'CEO',
        description: 'My company'
    }
};
console.log(fetchedUse?.job?.title);
//NULLISH COALESCING
const userInputField = undefined;
const storeData = userInputField ?? 'DEFAULT';
console.log(userInputField);
//# sourceMappingURL=intersection-type-guard.js.map