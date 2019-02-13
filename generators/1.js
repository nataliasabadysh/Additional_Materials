
// Цыкл , вывели значения
const colors = [ 'red', 'blue' ];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[ i ]);
}
// red
// blue


/*
Но с большей вложенностью
for - способствует появлению ошибок - потому что в разных местах используется однотипный код

Итераторы помогают избавиться от лишних сложностей и не допустить ошибок
*/


/*
Итераторы

- это обьект с специалезированным интерфейсом , спроиктированний для итераций
- имеют метод .next  - возвращающий Oбьект результата
- Oбьект результата имеет два свойства
- value - следующее значение
- done - возвращает "true" если операции закончились
Итерируемые

*/
