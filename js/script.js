// "use strict"


function hello() {
    console.log("Hello world")
}

hello();

function hi() {
    console.log("Say hi")
}

hi();

const arr = [1, 35, 13, 2, 23 ];
arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

function copy(mainObj) {
    let copyObj = {};

    let key;
    for (key in mainObj) {
        copyObj[key] = mainObj[key]
    }
    return copyObj
}
// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers)
// console.log(numbers)

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }

};

const add = {
    d: 23,
    e: 34
};

console.log(Object.assign(numbers, add)); // Копируем свойства объекта add в объект numbers

const clone = Object.assign({}, add); // Создаём поверхностную копию объекта add



clone.d = 20;

console.log(add);
console.log(clone);

const q = {
    one: 1,
    two: 2
};

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
};

function showAgeAndLangs(object) {
    const {age} = object;
    const {languages} = object.skills;
    let str = `Мне ${age} и я владею языками: `; 
    languages.forEach(function(lang) {
        str += `${lang.toUpperCase()} `;
    });
    return str;
};

console.log(showAgeAndLangs(personalPlanPeter));

const someString = 'This is some strange string';

function reverse(str) {
    let array = [];
    let newArray = '';

    if (typeof(str) === 'string') {
        array = str.split('');
        array.reverse();
        newArray = array.join('');
    } else {
        newArray += 'Ошибка!';
    }

    return newArray
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(object) {
        const {age} = object;
        const {languages} = object.skills;
        let str = `Мне ${age} и я владею языками: `; 
        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

<<<<<<< HEAD
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[0] = 'z';

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'drupal', 'joomla', 'Squarespace'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

console.log(newAarray);

const add = {
    d: 23,
    e: 34
}

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

const q = {
    one: 1,
    two: 2
=======
        return str;
    }
>>>>>>> a30eacc (methods of objects)
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
let allCurr = [...baseCurrencies, ...additionalCurrencies];


function availableCurr(arr, missingCurr) {
        let outPut = arr.length <= 0 ? `Нет доступных валют` : `Доступные валюты:\n`;
        
        for (let i of arr) {
            if (i !== missingCurr) {
                outPut += `${i}\n`;
                }
            }
        
        return outPut;
}

console.log(availableCurr(allCurr, 'UAH'));
console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities);
console.log(showExperience(personalPlanPeter));

<<<<<<< HEAD
console.log(newObj);
console.log(q);
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
=======
function showProgrammingLangs(plan) {
    const programmingLangs = plan.skills.programmingLangs;
    let str = '';
    for (let i in programmingLangs) {
        str += `Язык ${i} изучен на ${programmingLangs[i]}\n`
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));


console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
>>>>>>> a30eacc (methods of objects)

"use strict"


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }

    return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

console.log(sortStudentsByGroups(students));