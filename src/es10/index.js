// es10
/*Array.flat() */
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));

/*Array.flatMap() */
let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(val => [val, val * 2]));

/*String.trimStart() /String.trimEnd() */
let hello = '          hello world';
console.log(hello);
console.log(hello.trimStart());

let hello1 = 'hello world          ';
console.log(hello1);
console.log(hello1.trimEnd());

/* Optional catch binding */
try {

} catch { // <--- catch(error)
    error
}

/*Object.fromEntries() */
let entries = [['name', 'test'], ['age', 26]];
console.log(Object.fromEntries(entries));

/*Objecto de tipo símbolo */
let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol);
console.log(symbol.description);






