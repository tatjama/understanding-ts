"use strict";
class GreetingPerson {
    constructor(n) {
        this.name = n;
        this.age = 30;
    }
    greet(phrase) {
        console.log(phrase);
    }
}
let user1;
user1 = {
    name: 'Tanja',
    age: 30,
    greet(phrase) {
        console.log(phrase + this.name);
    }
};
user1.greet('person is ');
//# sourceMappingURL=interface.js.map