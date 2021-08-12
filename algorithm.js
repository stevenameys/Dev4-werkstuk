let coinList = [
    {
        coin: 200,
        quantity: 5
    }, 
    {
        coin: 100,
        quantity: 0
    }, 
    {
        coin: 50,
        quantity: 1
    }, 
    {
        coin: 20,
        quantity: 4
    }, 
    {
        coin: 10,
        quantity: 1
    }, 
    {
        coin: 5,
        quantity: 3
    }, 
    {
        coin: 2,
        quantity: 4
    }, 
    {
        coin: 1,
        quantity: 20
    }
];

function returnCoins(coins, price, paid){
    let returnCoinList = [];
    let toReturn = paid - price;
    let i = 0;

    while (toReturn > 0){
        while(toReturn < coins[i].coin){ 
            i++
        }
        while(coins[i].quantity == 0){
            if(i + 1 > coins.length - 1){
                returnCoinList.push("can not return all money");
                return returnCoinList;
            }
            i++
        }

        toReturn -= coins[i].coin;
        coins[i].quantity--;
        returnCoinList.push(coins[i].coin);
        i = 0;
    }
    return returnCoinList;
}

let getChange = returnCoins(coinList, 132, 500);
console.log(getChange);