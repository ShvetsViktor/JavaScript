"use strict"


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