const school = 'RAJ UK Uttara Model School';
console.log(school);
console.log(school.toLowerCase());
console.log(school.toLocaleUpperCase());

const subject = 'Chemistry';
const book = 'chemisstry';
if(subject === book){
    console.log('I am reading book');
}
else{
    console.log('fail');
}


const drink = ' water';
const liquid = ' water ';
if(drink.trim() === liquid.trim()){
    console.log('pani er opor nam life');
}
else{
    console.log('somdure pani ase khaite pari na');
}