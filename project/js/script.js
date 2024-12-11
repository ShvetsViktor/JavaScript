/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const btn = document.querySelector('button');

// btn.onclick = function () {
//     alert('Click')
// };

// btn.addEventListener('click', () => {
//     alert('Click')
// });

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if (i === 1) {
        btn.removeEventListener('click', deleteElement);
    }
};


btn.addEventListener('click', deleteElement); // Первым аргументом 
// передается событие, вторым функция обработчик без скобок вызова

// btn.removeEventListener('click', deleteElement); // Первым аргументом 



