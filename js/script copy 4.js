// "use strict"

options = {
    name: 'Viktor',
    height: 182,
    age: 22,
    race: "human",
    colours: {
        border: 'black',
        bg: 'red',
        shapes: {
            one: 1,
            two: 2.22
        }
        },
        makeTest: function () {
            console.log("Test")
    }
};

console.dir(options);

console.log(Object.keys(options).length);

let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`${i}: ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`${key}: ${options[key]}`);
        counter++;
    }
    
}

console.log(counter);