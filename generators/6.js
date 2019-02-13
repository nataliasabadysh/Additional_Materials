/* eslint-disable func-style */

//  Генератор - фун-и и их можно добавить в Oбьекты

const obj = {
    *createIterator () {  // =  createIterator : function* () {
        yield 1;
        yield 2;
        yield 3;
    },
};
const iterator = obj.createIterator();

console.log(iterator.next().value);     // 1
console.log(iterator.next().value);     // 2
console.log(iterator.next().value);     // 3
