// Generators *  существенно упрощают реализацию итераторов
// - fun возвращающая итератор  - можно использовать везде где можно использовать обычные фун-и


function* createIterator() {
    yield 1;
    yield 2;
    yield 3;
}

const iterator = createIterator ();

// iterator -возвращает 3 разных значения в 3х последовательных метода next
// при выполнении первого yield 1; фун-я приостановит выполнение до следующего метода next итератора и тогда выполняет  yield 2;

console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // {done: false, value: 2}
console.log(iterator.next()); // {done: false, value: 3}
console.log(iterator.next()); // {done: false, value: 4}
console.log(iterator.next()); // {done: false, value: 5}

// after calls .nest will return anyway "undefined"
console.log(iterator.next()); // {done: true, value: undefined}

//  yield  - определяет значение которое итератор должен возвращать при вызове метода next, а так же порядок возврата этих значений
//  yield  - можно использовать только внутри генераторов
