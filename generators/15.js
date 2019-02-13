// Делегирование generators
function* createNumbersIterator() {
    yield 1;
    yield 42;
}
function* createColorsIterator() {
    yield 'red';
    yield 'blue';
}
function* createCombineIterator() {
    yield* createNumbersIterator();
    yield* createColorsIterator();
    yield true;
}
const iterator = createCombineIterator();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 42, done: false}

console.log(iterator.next()); // {value: "red", done: false}
console.log(iterator.next()); // {value: "blue", done: false}

console.log(iterator.next()); // {value: true, done: false}

console.log(iterator.next()); // {value: undefined, done: true}

