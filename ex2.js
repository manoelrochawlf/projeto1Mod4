"use strict";
/*
2 - Vamos adicionar alguns administradores. Inicialmente, tínhamos apenas usuários no banco de dados na memória.
Depois de apresentar os Admins (que possuem a propriedade role), precisamos corrigir os tipos para que tudo funcione bem em conjunto.
O tipo "Person" está ausente, por favor, defina-o e use-o na array persons e na função logPerson para corrigir todos os erros.
*/
exports.__esModule = true;
exports.logPerson = exports.persons = void 0;
exports.persons /* <- Person[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
function logPerson(user) {
    console.log(" - ".concat(user.name, ", ").concat(user.age));
}
exports.logPerson = logPerson;
exports.persons.forEach(logPerson);
