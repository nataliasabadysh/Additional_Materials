const colors = [ 'red', 'green', 'blue' ];
const traking = new Set([ 123, 456, 678 ]);

const data = new Map();

data.set('title', 'easter wisdom');
data.set('format', 'story');

// entries - iterator для того что бы получить для колекции для каждого вида
// for of - для итерации

// entries
for (const entry of colors.entries()) {
    console.log(entry); // [0, "red"] [1, "green"]  [2, "blue"]
}
for (const entry of traking.entries()) {
    console.log(entry); // [123, 123] , [456, 456] ,  [678, 678]
}
for (const entry of data.entries()) {
    console.log(entry); // ["title", "easter wisdom"], [ "format", "story"]
}

// values
for (const value of colors.values()) {
    console.log(value); // red, green , blue
}
for (const value of traking.values()) {
    console.log(value); // 123, 456, 678
}
for (const value of data.values()) {
    console.log(value); // easter wisdom,  story
}

// key
for (const key of colors.keys()) {
    console.log(key); // 0, 1, 2
}
for (const key of traking.keys()) {
    console.log(key); // 123, 456, 678
}
for (const key of data.keys()) {
    console.log(key); // title, format
}

