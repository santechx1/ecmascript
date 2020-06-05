
// es9
/* Spread/Rest operator / Operador de reposo/propagación */
const obj1 = {
    name: 'name1',
    age: 26,
    height: 188
};
let { height, ...all } = obj1;
console.log(all);
const obj2 = {
    ...obj1,
    country: 'EC'
}
console.log(obj2);

/* Promise.finally() */
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Error'));
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Execution terminated'));

/* RegEx / Expresiones regulares */
const regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regex.exec('2020-06-05');
// get occurrences by groups
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
