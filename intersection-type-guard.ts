/*interface Admin  {
    name: string;
    privilege: string[];
}

interface Employee {
    name: string;
    startedDate: Date;
}

interface ElevatedEmployee extends Employee, Admin{}*/

//INTERSECTION types

type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startedDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
    name: 'Tanja',
    privileges: ['create-database'],
    startedDate: new Date(),
}

type CombinableType = number | string;
type Numeric = number | boolean;

type Universal = CombinableType & Numeric; 

// FUNCTION OVERLOAD
function addEl(a: number, b: number): number;
function addEl(a: number, b: string): string;
function addEl(a: string, b: number): string;
function addEl(a: string, b: string): string;

function addEl(a: CombinableType, b: CombinableType){
    //TYPE GUARD
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a +b
}

const result =addEl('Max', 'Swartz');
result.split('');

function printEmployeesInformation(em: Admin | Employee){
    console.log( "Name: " + em.name);
    // TYPE Guard
    if('privileges' in em){
        console.log( 'privileges: ' + em.privileges);
    }
    if('startedDate' in em){
        console.log( 'startedDate: ' + em.startedDate);
    }    
}

printEmployeesInformation(el);
printEmployeesInformation({name: 'Employees', privileges: ['first'] });
printEmployeesInformation({name: 'Manu', startedDate: new Date()});

class Car  {
    drive(){
        console.log('Driving...');
    }    
}

class Truck {
    drive(){ 
        console.log('Drive Truck...');
    }
    loadCargo(amount: number){
        console.log('Loading...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    //TYPE Guard
    if(vehicle instanceof Truck){
        vehicle.loadCargo(10);
    }
}

useVehicle(v1);
useVehicle(v2);

//DISCRIMINATED Union

interface Bird{
    type: 'bird';
    flyingSpeed: number;
}

interface Horse{
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function movingAnimal(animal: Animal){
    let speed;
    //DISCRIMINATED Union Gard
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving speed: " + speed);
}

movingAnimal({type: 'horse', runningSpeed: 15})

//TYPE CASTING
//const element =<HTMLInputElement> document.querySelector('#my-id')! ;
const element = document.querySelector('#my-id');
(element as HTMLInputElement).value = 'Hi there!'

//INDEX CASTING
interface ErrorContainer{
    //id: string;
    [props: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Invalid email',
    username: 'You must provide username!'
}

//OPTIONAL CHAINING

    const fetchedUse = {
        id: 'uui',
        name: 'Max',
        job: {
            title: 'CEO',
            description: 'My company'
        }
    }

    console.log(fetchedUse?.job?.title)

    //NULLISH COALESCING

    const userInputField = undefined;
    const storeData = userInputField ?? 'DEFAULT';
    console.log(userInputField)