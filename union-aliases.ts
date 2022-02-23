type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

const combine = (a: Combinable, b: Combinable, resultConversion: ConversionDescriptor) => {
    let result;
    if( typeof a === 'number' &&  typeof b === 'number' || resultConversion ==='as-number'){
        result = +a + +b;
    }else{
        result = a.toString() + b.toString();
    }
    return result;
    /*if(resultConversion === 'as-number'){
        return +result;
    }else{
        return result.toString();
    }*/
    
}
const combineAges = combine(20, 36, 'as-number');
const combineStringAges = combine('20', '36', 'as-number');
const combineNames = combine('Max', 'Anne', 'as-text');
console.log(combineAges);
console.log(combineStringAges);
console.log(combineNames);