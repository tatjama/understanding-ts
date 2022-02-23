let userInput: unknown;
let userName: string;

userInput = 5;
userName = 'John';

if ( typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number):never{
    throw ({message: message, errorCode: code})
}

generateError('some error', 500);