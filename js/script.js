"use strict"


const arr = [2, 3, 6, 8, 10];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}  // перебор через классический цикл

for (let value of arr) {
    console.log(value)
}