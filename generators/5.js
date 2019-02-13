/* eslint-disable func-style */

//  Генератор в фун-и выражения

const createIterator = function* () {
    yield 1;
    yield 2;
    yield 3;
};
const iterator = createIterator();

console.log(iterator.next());           // {value: 1, done: false}

console.log(iterator.next().value);     // 2
console.log(iterator.next().value);     // 3

console.log(iterator.next());   // {value: undefined, done: true}

