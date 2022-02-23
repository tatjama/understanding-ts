"use strict";
function add(n1, n2, showResult, resultMessage) {
    const result = n1 + n2;
    if (showResult) {
        console.log(resultMessage + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const showResult = true;
const resultMessage = "Result is: ";
add(number1, number2, showResult, resultMessage);
//# sourceMappingURL=basic.js.map