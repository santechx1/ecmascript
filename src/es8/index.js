/* Object.entries() */
// es8
const obj = {
    frontend: 'dev1',
    backend: 'dev2',
    design: 'designer'
}
const entries = Object.entries(obj);
console.log(entries);
console.log(entries.length);

/* Object.values() */
const obj = {
    frontend: 'dev1',
    backend: 'dev2',
    design: 'designer'
}
const values = Object.values(obj);
console.log(values);
console.log(values.length);

/* Padding */
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'));

/* Trailing commas */
const obj = {
    frontend: 'dev1', // <---
    backend: 'dev2',
    design: 'designer'
}

/* async...await */
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world'), 2000)
            : reject(new Error('Error'))
    });
};

const helloAsync1 = async () => {
    const hello1 = await helloWorld();
    const hello2 = await helloWorld();
    console.log(`${hello1}, ${hello2}`);
};
helloAsync1(); // 4 seconds to finish execution

const helloAsync2 = async () => {
    const hello1 = helloWorld();
    const hello2 = helloWorld();
    console.log(`${await hello1}, ${await hello2}`);
};
helloAsync2(); // 2 seconds to finish execution

const anotherFunction = async () => {
    // use try...catch to better handle execution
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};
anotherFunction();