"use strict"

// const arr = [ 'apple', 'mango', 'papaya', 'dorian', 'greypfruit' ];

const arr = [1, 35, 13, 2, 23 ];
arr.sort(compareNum);

console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// Динамическая типизация и примеры её использования
// Способы преобразований объектов в другие типы данных.

// Преобразования To String

// #1

console.log(typeof(String(null))); // Избыточен. Не используется.
console.log(typeof(String(4))); // Избыточен. Не используется.

// #2

console.log(typeof('' + 5)); // Конкотэнация со строкой даёт строку

const num = 5;

console.log("https://facebook.com/catalog/" + num);

// Реальный пример использования конкотенации. Передавать стили в виде строки

const fontSize = 26 + 'px'; //  Формируется строка


// Преобразования To Number

// # 1

console.log(typeof(Number('4')));

// # 2
// Унарный плюс

console.log(typeof(+'5'));

// # 3

console.log(typeof(parseInt("15px", 10)));

// let answ = +prompt("Hello", "");

// Преобразования To Boolean

// # 1

let switcher = null;

// switcher = 1;

console.log(switcher ? "Working ..." : 'Boolean');

// # 2

console.log(typeof(Boolean('4')));

// # 3

console.log(typeof(!!"223")); // Два знака отрицания 
                              // преобразуют строку в логический 
                              // тип данных