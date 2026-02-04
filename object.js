// Object -> non primitive or referencial data type

let bike = {
    // key/property: value
    color: 'Black',
    brand: 'Honda',
    cc: 160,
    pillion: 2,
    milage: 35,
    isMeterDigital: true,
    advantages: ['less milage', 'high speed', 'low configuration'],
    battery: {
        color: 'black',
        durability: 'strong' ,
        warranty: '2 year'
    }

};
//  console.log(bike);


// loop iteration over object, using for in loop
// for(let key in bike){
//     console.log(key, '->', bike[key]);
// }

// console.log(Object.keys(bike).length);

let bikeKeys = Object.keys(bike);
console.log(bikeKeys.length);

// console.log(Object.values(bike));

// access a specific property or key
// 1. dot notation .
// 2. bracket notation []

// console.log(bike.color); // dot notation

// console.log(bike['pillion']); // bracket notation
