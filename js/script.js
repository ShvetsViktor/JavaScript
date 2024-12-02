"use strict"


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