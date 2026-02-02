const jim = 56;
const tim = 89;
const kim = 68;
if(jim > tim && jim > kim){
    console.log('Jim is the ultimate boss');
}
else if(tim > jim && tim > kim){
    console.log('Tim is the boss');
}
else{
    console.log('kim is the boss');
}

function maxOfThree(num1, num2,num3){
    if(num1 >= num2 && num1 >= num3){
        return num1;
    }
    else if(num2 >= num1 && num2 >= num3){
        return num2;
    }else{
        return num3;
    }
}
const numbers =maxOfThree (56,89,68);
console.log(numbers);
//
const max = Math.max(56,89,68);
console.log('max number', max);