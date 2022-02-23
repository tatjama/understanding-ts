//DECORATORS
//EFFECT on DECLARATION

//CLASS DECORATOR
/*function Logger(constructor: Function){
    console.log("Logging...");
    console.log(constructor);
}

@Logger
class Person{
    name = "Max";

    constructor(){
        console.log('creating person...');
    }
}

const pers = new Person();
console.log(pers);*/

//DECORATOR FACTORY
function Logger(loggingString: string) {
    console.log('LOGGER FACTORY');
    return function(constructor: Function) {
        console.log(loggingString);
        console.log(constructor);
    }    
}
//META PROGRAMMING
function WithTemplate(template: string , hookId: string){
    console.log('TEMPLATE FACTORY');
    return function(constructor: any){
        console.log('Rendering template...')
        let element = document.getElementById(hookId);
        const p = new Person();
        if(element){
            element.innerHTML = template;
            element.querySelector('h1')!.textContent = p.name            
        }
    }
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1> Object Person</h1>', 'app')
class Person{    
    name = "Max";

    constructor(){
        console.log('creating person...');
    }
}

const pers = new Person();
console.log(pers);

//----------------------------------------------------------------

function Log(target: any, propertyName:string){
    console.log('Property decorator!')
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor){
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor){
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number){
    console.log('Property decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product{

    @Log

    public title: string;
    private _price: number;

    @Log2
    set price (value: number) {
        if(value > 0){
            this._price = value;
        }else{
            throw new Error('Invalid Price - should be positive! ');
        }
        
    }

    constructor(t: string, p: number){
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number): number {
        return this._price * (1 + tax); 
    }

}

const book1 = new Product('Book1', 19);
const book2 = new Product('Book2', 29);

//RETURNING AND CHANGING CLASS IN CLASS DECORATOR
//Effects on INSTANCES ONLY
function WithTemplateStudent(template: string, hookId: string){
    console.log('STUDENT TEMPLATE FACTORY');
    return function<T extends {new(...args: any[]): {name:string}}>(originalConstructor: T){
        
        return class extends originalConstructor{
            constructor(..._: any[]){
                super();
                console.log('Rendering template...');
                let element = document.getElementById(hookId);
                if(element){
                    element.innerHTML = template;
                    element.querySelector('h2')!.textContent = this.name;
                }else{
                    throw new Error('No such element')
                }
            }
        }
    }
}

@WithTemplateStudent('<h2>Student Name is </h2>', 'student')
class Student{
    name = "Tanja";

    constructor(){
        console.log('Creating student...')
    }
}

const stud = new Student();
console.log(stud);

//AUTOBIND DECORATOR
//EFFECT on INSTANCES ONLY

function Autobind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjustedMethod: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const bindFn = originalMethod.bind(this);
            return bindFn
        }
    } 
    return adjustedMethod;
}

class Printer{
    message = "I'm clicked!";

    @Autobind
    showMessage(){
        console.log(this.message);
    }
}

const printer = new Printer();
printer.showMessage();
const button = document.querySelector('button')!;
button.addEventListener('click', printer.showMessage);

//VALIDATION WITH DECORATORS

interface ValidatorConfig{
    [property: string]: {
        [validatableProp: string]: string[];//'required', 'positive'
    }
}

const registeredValidators: ValidatorConfig = {};

function Require(target: any, propName: string ){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    }
}

function PositiveNumber(target: any, propName: string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name], 
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []) , 'positive']
    }
}

function validate(obj: any){
    const objectValidationConfig = registeredValidators[obj.constructor.name];
    if(!objectValidationConfig){ return true }
    let isValid = true;
    for(const prop in objectValidationConfig){ 
        for(const validator of objectValidationConfig[prop]){
            switch(validator){
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
                }
        }
    }
    return isValid
}

class Course{
    @Require
    title: string;
    @PositiveNumber
    price: number;

    constructor(t:string, p:number){
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createCourse = new Course(title, price);

    if(!validate(createCourse)){
        console.log('Invalid input. Please try again!');
        return;
    }
    console.log(createCourse);
})