"use strict"


const arr = [2, 3, 6, 8, 10];

// далее идет метод с колбэк функцией. сначала выполняется метод, а потом колбэки
arr.forEach(function(item/* значение элемента */, i/* индекс элемента */, arr/* ссылка на массив */){
    console.log(`${i}: ${item} внутри массива ${arr}`)
});

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }