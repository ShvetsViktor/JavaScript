// "use strict"


let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
    
    while (numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms == '') {
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt(   'Один из последних просмотренных фильмов?', '').trim(),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length <= 50 && b.length <= 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log('Просмотрено слишком мало фильмов.');
    } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
        console.log('Вы классический зритель.');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман.');
    } else {
        console.log('Произошла ошибка.');
    }
}

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

let genres = [];

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    
        }
    }

writeYourGenres();

console.log(personalMovieDB)