// Return в генераторох 
// что бы закончить фун-ю Генератора раньше времени

function* createIterator() {
    yield 1;
    return; // указывает что все элементы обработаны
    yield 2;
    yield 3;
}

const iterator = createIterator();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
console.log(iterator.next()); // {value: undefined, done: true}


function* createIterator2() {
    yield 1;
    return 42;// {value: 42, done: true}
}

const iterator2 = createIterator2();

console.log(iterator2.next()); // {value: 1, done: false}
console.log(iterator2.next()); // {value: 42, done: true}
console.log(iterator2.next()); // {value: undefined, done: true}

