class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  toJSON() {
    return {id: this.id, age: this.age};
  }
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const json = JSON.stringify(person);
const json2 = JSON.stringify(new Person(2, "Carlos", "Cuartero", 26));

console.log(json); // Should return: { id: 1, age: 25 }
console.log(json2);