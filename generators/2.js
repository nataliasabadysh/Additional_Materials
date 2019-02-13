/*
Итераторы

- это обьект с специалезированным интерфейсом , спроиктированний для итераций
- имеют метод .next  - возвращающий Oбьект результата
- Oбьект результата имеет два свойства
- value - следующее значение
- done - возвращает "true" если операции закончились
Итерируемые

*/

function createIterator(items) {
    let i = 0;

    return {
        next: ()=>{
            const done = i >= items.length;
            const value = !done ? items[ i++ ] : undefined;

            return {
                done,
                value,
            };
        },
    };
}
const iterator = createIterator ([ 1, 2, 3, 4, 5 ]);

console.log(iterator.next()); // {done: false, value: 1}
console.log(iterator.next()); // {done: false, value: 2}
console.log(iterator.next()); // {done: false, value: 3}
console.log(iterator.next()); // {done: false, value: 4}
console.log(iterator.next()); // {done: false, value: 5}

// after calls .nest will return anyway "undefined"
console.log(iterator.next()); // {done: true, value: undefined}


// Generators существенно упрощают реализацию итераторов