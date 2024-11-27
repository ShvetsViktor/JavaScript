"use strict"

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



console.log(Object.assign(numbers, add));

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

        return str;
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

console.log(showExperience(personalPlanPeter));

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
