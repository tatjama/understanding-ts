"use strict";
//DECORATORS
//EFFECT on DECLARATION
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
function Logger(loggingString) {
    console.log('LOGGER FACTORY');
    return function (constructor) {
        console.log(loggingString);
        console.log(constructor);
    };
}
//META PROGRAMMING
function WithTemplate(template, hookId) {
    console.log('TEMPLATE FACTORY');
    return function (constructor) {
        console.log('Rendering template...');
        let element = document.getElementById(hookId);
        const p = new Person();
        if (element) {
            element.innerHTML = template;
            element.querySelector('h1').textContent = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log('creating person...');
    }
};
Person = __decorate([
    Logger('LOGGING - PERSON'),
    WithTemplate('<h1> Object Person</h1>', 'app')
], Person);
const pers = new Person();
console.log(pers);
//----------------------------------------------------------------
function Log(target, propertyName) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log('Property decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error('Invalid Price - should be positive! ');
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
const book1 = new Product('Book1', 19);
const book2 = new Product('Book2', 29);
//RETURNING AND CHANGING CLASS IN CLASS DECORATOR
//Effects on INSTANCES ONLY
function WithTemplateStudent(template, hookId) {
    console.log('STUDENT TEMPLATE FACTORY');
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log('Rendering template...');
                let element = document.getElementById(hookId);
                if (element) {
                    element.innerHTML = template;
                    element.querySelector('h2').textContent = this.name;
                }
                else {
                    throw new Error('No such element');
                }
            }
        };
    };
}
let Student = class Student {
    constructor() {
        this.name = "Tanja";
        console.log('Creating student...');
    }
};
Student = __decorate([
    WithTemplateStudent('<h2>Student Name is </h2>', 'student')
], Student);
const stud = new Student();
console.log(stud);
//AUTOBIND DECORATOR
//EFFECT on INSTANCES ONLY
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjustedMethod = {
        configurable: true,
        enumerable: false,
        get() {
            const bindFn = originalMethod.bind(this);
            return bindFn;
        }
    };
    return adjustedMethod;
}
class Printer {
    constructor() {
        this.message = "I'm clicked!";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const printer = new Printer();
printer.showMessage();
const button = document.querySelector('button');
button.addEventListener('click', printer.showMessage);
const registeredValidators = {};
function Require(target, propName) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    };
}
function PositiveNumber(target, propName) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    };
}
function validate(obj) {
    const objectValidationConfig = registeredValidators[obj.constructor.name];
    if (!objectValidationConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objectValidationConfig) {
        for (const validator of objectValidationConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Require
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleEl = document.getElementById('title');
    const priceEl = document.getElementById('price');
    const title = titleEl.value;
    const price = +priceEl.value;
    const createCourse = new Course(title, price);
    if (!validate(createCourse)) {
        console.log('Invalid input. Please try again!');
        return;
    }
    console.log(createCourse);
});
//# sourceMappingURL=decoraters.js.map