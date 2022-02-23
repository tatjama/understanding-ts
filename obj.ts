enum Role{
    ADMIN = 'ADMIN',
    USER = 'USER'    
}

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role
} = {
    name: 'John',
    age: 34,
    hobbies: ['Sport', 'Music'], 
    role: Role.ADMIN 
}
person.name = "3";
console.log(person.name)