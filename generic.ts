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
function merge<T extends object, U extends object>(A: T, B: U){
   return Object.assign(A, B);
}

const mergeObject = merge({name: "Max"}, {age: 30}) ;
console.log(mergeObject);
console.log(mergeObject.name );

interface Lenghty{
    length: number;
}

function countAndDescription<T extends Lenghty>(element: T): [T, string]{
    let descriptionText = 'Got no elements.';
    if(element.length === 1){
        descriptionText = 'Got one element.'
    }else{
        descriptionText ='Got ' + element.length + ' elements.';
    }
    return [element, descriptionText]
}

console.log(countAndDescription('That is description.'))


function extractAndConvert<T extends object, U extends keyof T>(obj:T, key: U){
    return 'value ' + obj[key];
}

extractAndConvert({name: "Max"}, 'name');

//GENERIC TYPE - CLASSES

class DataStorage<T extends string | number | boolean>{
    private data: T[] = [];
    
    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return [...this.data];
    }

}
const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();


/* ONLY Primitive values - doesn't work with objects
const objectStorage = new DataStorage<object>();
objectStorage.addItem({name: 'Max'});
objectStorage.addItem({name: 'Manu'});
objectStorage.removeItem({name: 'Max'});
console.log(objectStorage.getItems());*/

//GENERIC TYPE - UTILITY 

//PARTIAL TYPE 
interface CourseGoal{
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal{
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal
}

//READONLY TYPE

const names: Readonly<string[]> = ['Max', 'Anna'];
//names.push('Manu');
//names.pop();