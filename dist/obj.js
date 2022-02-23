"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
})(Role || (Role = {}));
const person = {
    name: 'John',
    age: 34,
    hobbies: ['Sport', 'Music'],
    role: Role.ADMIN
};
person.name = "3";
console.log(person.name);
//# sourceMappingURL=obj.js.map