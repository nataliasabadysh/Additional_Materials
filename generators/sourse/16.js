// Делегирование generators
function* createNumbersIterator() {
    yield 1;
    yield 42;

    return 2;                               // 2 = repeat
}
function* createRepeatingIterator(count) {
    for (let i = 0; i < count; i++) {
        yield 'repeat';
    }
}
function* createCombineIterator() {
    let result = yield* createNumbersIterator();
    yield 3;                                // дополнительная инструкция
    yield* createRepeatingIterator(result);
}
const iterator = createCombineIterator();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 42, done: false}

console.log(iterator.next()); // {value: 3, done: false}

console.log(iterator.next()); // {value: "repeat", done: false}
console.log(iterator.next()); // {value: "repeat", done: false}

console.log(iterator.next()); // {value: undefined, done: true}
console.log(iterator.next()); // {value: undefined, done: true}
