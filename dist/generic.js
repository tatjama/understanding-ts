"use strict";
//GENERIC TYPE - Promise
/*const names: Array<string> = [];
names[0].split(' ');

const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10)
    }), 2000
});

promise.then(data => {
    data.split(' ')
})*/
//GENERIC TYPE - FUNCTIONS
function merge(A, B) {
    return Object.assign(A, B);
}
const mergeObject = merge({ name: "Max" }, { age: 30 });
console.log(mergeObject);
console.log(mergeObject.name);
function countAndDescription(element) {
    let descriptionText = 'Got no elements.';
    if (element.length === 1) {
        descriptionText = 'Got one element.';
    }
    else {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescription('That is description.'));
function extractAndConvert(obj, key) {
    return 'value ' + obj[key];
}
extractAndConvert({ name: "Max" }, 'name');
//GENERIC TYPE - CLASSES
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
//READONLY TYPE
const names = ['Max', 'Anna'];
//names.push('Manu');
//names.pop();
//# sourceMappingURL=generic.js.map