//  Symbol.iterator определяет итератор по умолчанию

// с помощью этого свойства можно определить являеться ли  обьект итерируемый

const isIterable = (obj) => typeof obj[ Symbol.iterator ] === 'function';

console.log(isIterable([ 1, 2 ])); //true

console.log(isIterable(' hello ')); //true

console.log(isIterable(new Map())); //true

console.log(isIterable(new Set())); //true

console.log(isIterable(new WeakMap())); //false
