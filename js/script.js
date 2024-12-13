// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     !prop ? answer = 'Закрыто' : answer = 'Открыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (((parseInt(fDish.price)) + (parseInt(sDish.price))) / 2 < +average.slice(0, -1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[3], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     // const copy = {...data};
//     let copy = {};
//     let key;
//     for (key in data) {
//         if (Array.isArray(data[key])) {
//             copy[key] = [];
//             for (let i of data[key]) {
//                 copy[key].push(Object.assign({}, i));
//             }
//         } else if (typeof(copy[key]) === 'Object') {
//             copy[key].push(Object.assign({}, data[key]));
//         } else {
//             copy[key] = data[key];
//         }
//     }
    
//     copy.waitors = [{name: 'Mike', age: 32}];
//     return copy;
// }

// console.log(transferWaitors(restorantData));
// console.log(restorantData);

function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

pow(2, 3);
// Another variant of recursion

function factorial(data) {
    if (typeof(data) == 'number') {
        return console.log(`${typeof(data)}`);
    } else {
        return console.log(`Type of input data is not a number, it is: ${typeof(data)}`);
    }
}

factorial(22);