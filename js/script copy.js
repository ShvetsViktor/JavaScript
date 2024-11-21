// "use strict"

function showFirstMessage(text) {
    console.log(text)
}

showFirstMessage('Hello world')

function calc(a, b) {
    return (a + b);
}

console.log(calc(1, 3))

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);