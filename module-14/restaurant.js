const age = 42;
const price = 500;
if(age <= 12){
    console.log('You can eat for free');
}
else if(age >= 60){
    //50% discount
    const discount = price * 50 / 100;
    const payAmonut = price - discount;
    console.log(payAmonut);
}
else if(age >= 50){
    const discount = price * 25 / 100;
    const payAmonut = price - discount;
    console.log(payAmonut)
}
else if(age >= 40){
    const discount = price * 10 / 100;
    const payAmonut = price - discount;
    console.log(payAmonut)
}
else{
    console.log(price);
}