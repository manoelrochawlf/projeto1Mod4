"use strict";
/*
 3 - Como já temos algumas das informações adicionais sobre nossos usuários, é uma boa ideia produzi-las de uma maneira agradável.
Corrija os erros de tipo na função logPerson. A função logPerson deve aceitar tanto User quanto Admin, ela também deve gerar informações relevantes de acordo com a occupation para User e a role para o Admin.
*/
exports.__esModule = true;
exports.logPerson = exports.persons = void 0;
;
exports.persons = [
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
function logPerson(person) {
    var additionalInformation;
    if (person.role) {
        additionalInformation = person.role;
    }
    else {
        additionalInformation = person.occupation;
    }
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
exports.logPerson = logPerson;
exports.persons.forEach(logPerson);
