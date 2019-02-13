const colors = [ 'red', 'green', 'blue' ];
const traking = new Set([ 123, 456, 678 ]);

const data = new Map();

data.set('title', 'easter wisdom');
data.set('format', 'story');

// entries - iterator для того что бы получить для колекции для каждого вида
// for of - для итерации
// По умолчанию - массивы и множества - возвращают значения, ассоциативние массивы возвращают результаты в виде массивом

// entries
for (const value of colors) {
    console.log(value); // red, green, blue
}
for (const value of traking) {
    console.log(value); // 123,456,678
}
for (const entry of data) {
    console.log(entry); // ["title", "easter wisdom"], [ "format", "story"]
}

// Деструктуризировать можно ассициативный массив

for (const [key, value] of data) {
    console.log(`${key} : ${value}`); // title: easter wisdom, format: story
}
