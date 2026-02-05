function blenderMachine(fruit){ //parameter
    // your logic
    // console.log('I received', fruit, 'to make ' + fruit + ' juice');
}
// blenderMachine('Mango'); // argument

//
// let num1 = 50;
// let num2 = 100;
// let sum = num1 + num2;
// if(sum % 2 == 0){
//     console.log('Yes this is even number');
//     console.log('I do something');
// } else{
//     console.log('No this is odd number');
//     console.log('I do something');
// }

//
let num1 = 50;
let num2 = 100;
function checkEvenSumThenDoSomething(num1, num2){
    let sum = num1 + num2;
    if(sum % 2 == 0){
    console.log('Yes this is even number');
    console.log('I do something');
} else{
    console.log('No this is odd number');
    console.log('I do something');
}
}
// checkEvenSumThenDoSomething(41,20);
// checkEvenSumThenDoSomething(num1, num2);


// return
function sumTwoNumAndMultiplyByFive(num1, num2){
    let sum = num1 + num2;
    let result = sum * 5;
    // console.log(result);
    if(result % 2 === 0){
        return result;
    } else{
        return 'Sorry! The output is not a even number. Please try again.'
    }
   
}
// let result = sumTwoNumAndMultiplyByFive(2,2);
// let result2 = sumTwoNumAndMultiplyByFive(20,21);
// console.log(result, result2);



// param arr and obj
function sumArray(arr){
    console.log(arr);
    let sum = 0;

    for(let number of arr){
        // sum = sum + number;
        sum += number;
    }
    // console.log(sum);
    return sum;
}
// let sumOfArr = sumArray([10, 20, 30, 40, 50]);
// console.log(sumOfArr);


//

function countObjectProperty(obj){
    console.log(obj);
    let count = Object.keys(obj).length;
    console.log(count);
}
let person = {name: 'Tanjila', age: 21, location: 'Khulna'};
countObjectProperty(person);


const heights2 = [167, 190, 120, 165, 137];

let lowest = heights2[0]; // assume first one is smallest

for (let i = 1; i < heights2.length; i++) {
    if (heights2[i] < lowest) {
        lowest = heights2[i];
    }
}

console.log(lowest);

