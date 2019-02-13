
//  Next можем передавать значение, и так же
function* createIterator() {
    const first = yield 1;
    let second;

    try {
        second = yield first + 2;
    } catch (error) {
        console.log(error.message);
        second = 6;
    }
    yield second + 3;
}

const iterator = createIterator();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next(3));// {value: 5, done: false}

console.log(iterator.throw(new Error('Boom'))); // boom
//{value: 9, done: false}
