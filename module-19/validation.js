function multiply (num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number' ){
        return 'Please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}
const result = multiply ('5', 7);
// console.log(result);
//
function fullName (first, second){
    if(typeof first !== 'string'){
        return 'First name should be a string';
    }
    else if(typeof second !== 'string'){
         return 'second name should be a string';
    }
    const full = first + ' ' + second;
    return full;
}
const full = fullName( 'Sohan');
console.log(full);