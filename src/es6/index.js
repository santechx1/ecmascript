/* Default Params / Parámetros por defecto */
// es5
function newFunction(name, age, country) {
    var name = name || 'Firstname1';
    var age = age || 26;
    var country = country || 'EC';
    console.log(name, age, country);
}
// es6
function newFunction2(name = 'Firstname1', age = 26, country = 'EC') {
    console.log(name, age, country);
}
newFunction2();
newFunction2('Firstname2', 27, 'EC');

/* Template literals / Plantillas de cadena de texto */
let hello = 'Hello';
let world = 'World';
// es5
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

/* Multi-line / Multilínea */
// es5
let lorem = '1. asdasdasdas dasdasdasd asdasdasdasd asd asd asd \n'
    + 'asdasdasdasdasdasdasdasd';
// es6
let lorem2 = `2 .dasdasdasdasdasdasd asdasdasdasd
asdasdasdasdasdasdasdasdasdasdasdasd
`;
console.log(lorem);
console.log(lorem2);

/* Destructuring / Desestructuración */
let person = {
    name: 'name1',
    age: 26,
    country: 'EC'
}
// es5
console.log(person.name, person.age);
// es6
let { name, age, country } = person
console.log(name, age, country);

/* Spread operator / Operador de propagación */
let team1 = ['player1', 'player2', 'player3'];
let team2 = ['player4', 'player5', 'player6'];
// es5
let education1 = ['player1', 'player2', 'player3', 'player4', 'player5', 'player6', 'player7'];
console.log(education1);
// es6
let education2 = ['player7', ...team1, ...team2];
console.log(education2);

/* let, var */
// es5
{
    var globalVar = 'Global Var';
}
// es6
{
    let globalLet = 'Global Let';
    console.log(globalLet);
}
console.log(globalVar);
console.log(globalLet); //not defined(out of scope) / no definidio, fuera de alcance

/* const */
// es6
const a = 'b';
a = 'a'; // assignment error / error de asignación

/* Object params / Parámetros en objetos */
let name = 'name1';
let age = 26;
// es5
obj = { name: name, age: 26 };
console.log(obj);
// es6
obj2 = { name, age };
console.log(obj2);

/* Arrow functions / Funciones flecha */
const people = [
    { name: 'name1', age: 26 },
    { name: 'name2', age: 27 }
];
// es5
let listOfNames = people.map(function (person) {
    console.log(person.name);
});
// es6
let listOfNames2 = people.map(person => console.log(person.name));

// let func1 = (param1, param2,...) => { ... };
// let func2 = param => { ... };

let listOfNames3 = people.map(({ name }) => console.log(name));

const square = num => num * num;

/* Promises */
// es6
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
};
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hello'))
    .catch(error => console.log(error))

/* Classes / Clases */
// es6, add inheritance easily with 'extends' keyword / incluye una manera más amigable de implementar herencia con 'extends'
class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2, 2));

/* Modules, import, export / Módulos, importar, exportar */
// Organize and reuse code in a better way / Organizar y reutilizar código de una mejor manera
import { hello } from "./module";
hello();

/*Generators / Generadores */

function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'world';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);










