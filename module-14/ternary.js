/**
 * Ternary ------> three parts
 * 
 * ?        :
 * condition ? do something when true : do something when false
 */

//normal if-else
 const age = 19;
//  if(age >= 18){
//     console.log('You can vote.')
//  }
//  else{
//     console.log('ghumai thako')
//  }

//simple ternary
// age >= 18 ? console.log('vote dio') : console.log('ghumai thako')

let price = 500;
const isLeader = true;
// if(isLeader === true){
//     price = 0;
// }
// else{
//     price = price + 100;
// }
// console.log(price)

price = isLeader === true ? 0 : price + 100;


if(isLeader === true){
    if(price > 1000){
        price = price /2;
    }
    else{
        price = 0
    }
}
else{
    price = price + 100;
}

//
price = isLeader === true ?
         price > 1000 ? 
         price /2 : 0
         : price + 1000;