// "use strict"


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



console.log(availableCurr(allCurr, 'UAH'));


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

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();

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
    
        // console.log(totalSquare);
    
        function volumeOfRooms() {
            return totalSquare * height;
        }
    
        let volume = volumeOfRooms();
        
        // console.log(volume);
    
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

console.log(isBudgetEnough(shoppingMallData));


// task 2 with arrays

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