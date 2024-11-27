"use strict"

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
