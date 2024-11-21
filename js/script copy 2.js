// "use strict"


let a = 5;
let b = 3;


function getMathResult(a, b) {
    if (b <= 0 || typeof b !== 'number') return a;
    
    let result = `${a}`;

    for (i = 0; i <= b; i++) {
        if (i <= 1) continue;
        result += '---' + i *(a);
    }
    return result;
}

console.log(getMathResult(a, b));