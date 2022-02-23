"use strict";
let userInput;
let userName;
userInput = 5;
userName = 'John';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw ({ message: message, errorCode: code });
}
generateError('some error', 500);
//# sourceMappingURL=never-unknown.js.map