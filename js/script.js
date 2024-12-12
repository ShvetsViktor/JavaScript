// "use strict"

function hello() {
    console.log("Hello world")
    debugger;
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


const newNumbers = copy(numbers);

newNumbers.a = 10;

// console.log(newNumbers)
// console.log(numbers)



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
        return str;
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

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


// Objects

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
        
        while (this.count == null || isNaN(this.count) || this.count == '') {
            this.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length <= 50 && b.length <= 50) {
                this.movies[a] = b;
                console.log("done");
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (this.count <= 10) {
            console.log('Просмотрено слишком мало фильмов.');
        } else if (this.count <= 30 && this.count >= 10) {
            console.log('Вы классический зритель.');
        } else if (this.count > 30) {
            console.log('Вы киноман.');
        } else {
            console.log('Произошла ошибка.');
        }
    },
    showMyDB: function() {
        if (this.privat == false) {
            console.log(this);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();
            
            if (genre === '' || genre === null) {
                i--;

            } else {
                this.genres[i - 1] = genre;
                this.genres.sort();
            }
        }
        this.genres.forEach((genre, index) => console.log(`Любимый жанр #${index + 1} - это ${genre}`));
    },
    toggleVisibleMyDB: function() {
        if (this.privat) {
            this.privat = false
        } else {
            this.privat = true
        }
    }
};


// task *

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};


function isBudgetEnough(data) {
    const {height, moneyPer1m3, budget} = data;
    const shops = data.shops;

    function totalPrice() {
        let totalSquare = 0;
        
        for (let i of shops) {
            const {width, length} = i;
    
            function squareOfRoom() {
                let square = width * length;
    
                return square;
            }
            
            totalSquare += squareOfRoom(); 
        }
    

        function volumeOfRooms() {
            return totalSquare * height;
        }
    
        let volume = volumeOfRooms();
       
    
        function estBudget() {
            return volume * moneyPer1m3;
        }
    
        return estBudget();
    }


    if (totalPrice() <= budget) {
        return 'Бюджета достаточно'
    } else {
        return 'Бюджета недостаточно'
    }
}

// console.log(isBudgetEnough(shoppingMallData));



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
console.log(sortStudentsByGroups(students));
// console.log(sortStudentsByGroups(students));


