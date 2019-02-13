// Создание собственных итерируемых обьктов

// Obj - изночально не являються итерируемые
// Но их можно сделав + Symbol.iterator  содержащий Генератор


const iterable = {
    items: [],

    *[ Symbol.iterator ] () {
        for (const item of this.items) {
            yield item;
        }
    },
};

iterable.items.push(1);

for (const item of iterable) {
    console.log(item);
}
// 1
