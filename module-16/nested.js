const collage = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: 'blue',
        result:{
            gpa: 5,
            merit: 'top'
        }
      
    }
}
// console.log(collage.name);
// console.log(collage.unique.color);
collage.unique.result.merit = 'top top top most'
console.log(collage.unique.result.merit);

collage.events[1] = '16 Dec';
console.log(collage.events[1]);

delete collage.class;
console.log(collage);
