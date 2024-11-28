// "use strict"


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