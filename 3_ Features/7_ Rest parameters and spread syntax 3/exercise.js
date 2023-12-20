function restOpRefactor({id, ...rest}) {
  console.log(id, rest);
  return id, rest;        // Duda de por qué no devuelve los dos
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const id = person.id;
const personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age
};

console.log(id, personInfo);
console.log(restOpRefactor(person));