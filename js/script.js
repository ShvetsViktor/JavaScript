"use strict"

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



console.log(Object.assign(numbers, add));

const add = {
    d: 23,
    e: 34
}

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);