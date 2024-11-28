// "use strict"


// const arr = [ 'apple', 'mango', 'papaya', 'dorian', 'greypfruit' ];

const arr = [1, 35, 13, 2, 23 ];
arr.sort(compareNum);

console.log(arr);

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

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }

};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers)
console.log(numbers)


const add = {
    d: 23,
    e: 34
};

const clone = Object.assign({}, add);



clone.d = 20;

console.log(Object.assign(numbers, add));
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