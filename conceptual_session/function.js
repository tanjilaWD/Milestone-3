function blenderMachine(fruit){ //parameter
    // your logic
    // console.log('I received', fruit, 'to make ' + fruit + ' juice');
}
blenderMachine('Mango'); // argument

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
checkEvenSumThenDoSomething(num1, num2);