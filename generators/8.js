

// "Symbol.iterator" VS "for of"  - работают одинаково
const values = [ 1, 2, 3, 4 ];

for (const number of values) {
    console.log('for-of', number);
}
// for-of 1
// for-of 2
// for-of 3
// for-of 4

const iterator = values[ Symbol.iterator ]();

console.log('MANUAL ITERATOR:', iterator.next().value);
console.log('MANUAL ITERATOR:', iterator.next().value);
console.log('MANUAL ITERATOR:', iterator.next().value);
console.log('MANUAL ITERATOR:', iterator.next().value);

// MANUAL ITERATOR: 1
// MANUAL ITERATOR: 2
// MANUAL ITERATOR: 3
// MANUAL ITERATOR: 4
