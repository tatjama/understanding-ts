//Interface allow us to have Structure of the object
interface Greetable{
    readonly name: string;

    greet(phrase: string): void;
}

class GreetingPerson implements Greetable{

    name: string;
    age: 30;

    constructor(n:string){
        this.name = n;
        this.age = 30;
    }

    greet(phrase: string): void{
        console.log(phrase)
    }
}

let user1: GreetingPerson;

user1 = {
    name: 'Tanja',
    age: 30,
    greet(phrase:string){
        console.log(phrase + this.name);
    }
}

user1.greet('person is ');