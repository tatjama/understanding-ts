function adding(n1: number, n2: number): number{
    return n1 + n2;
}

function printResult (num: number): void{
    console.log('Result is: ' + num);
}

function addAndHandle (n1: number, n2: number, cb: (num:number) => void): void {
    const result = n1 + n2;
    cb(result);
}

console.log(printResult(adding(2, 7)));

let defineResult: (a:number, b:number) => number;

defineResult = adding;

//defineResult = printResult;

//defineResult = 5;

console.log(defineResult(8, 8));

console.log(addAndHandle(10, 20, (result) => {
    console.log("result is: " + result);
    return result;
}));

