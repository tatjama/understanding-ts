"use strict";
function adding(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result is: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
console.log(printResult(adding(2, 7)));
let defineResult;
defineResult = adding;
//defineResult = printResult;
//defineResult = 5;
console.log(defineResult(8, 8));
console.log(addAndHandle(10, 20, (result) => {
    console.log("result is: " + result);
    return result;
}));
//# sourceMappingURL=fuction.js.map