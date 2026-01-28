const person = {
    name: 'Tanjila khatun',
    age: 21,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

person.salary = 30000;
person['age'] = 26;
person['fav places'] = ['maldives', 'bali', 'pataya']


const keyName = 'profession';
console.log(person[keyName]);

const propName = 'profession';
person [propName] = 'devops';
console.log(person);