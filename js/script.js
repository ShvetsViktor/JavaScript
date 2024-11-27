"use strict"


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let newFamily = "";
    arr.forEach(function(fam) {
        newFamily += `${fam} `;
    })
    if (arr.length > 0) {
        return `Семья состоит из: ${newFamily}`
    } else {
        return "Семья пуста"
    }
}

console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities);