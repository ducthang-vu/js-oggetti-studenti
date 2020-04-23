console.log('main.js is working');


var student = {
    nome: 'Tizio',
    cognome: 'Caio',
    età: '25'
};


console.log(student);

for (var key in student) {
    console.log(key + ': ' + student[key]);
};
