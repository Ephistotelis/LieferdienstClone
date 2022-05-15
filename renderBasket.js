/*
@param{string} type - erklärung was mit type gemeint ist
*/


function renderBasketStart() {
    let basket = document.getElementById('basketContents');
    let basketAll = document.getElementById('basketPayment');
    basket.innerHTML = '';
    basketAll.innerHTML = `
        <p>Zur Zeit haben sie nichts ausgewählt!</p>
        `
        // just because i´ve not implemented localstorage at this point
    let amount1 = sellerList[0]["CategorieDishes"][0];
    let amount2 = sellerList[0]["CategorieDishes"][1];
    let amount3 = sellerList[0]["CategorieDishes"][2];
    let amount4 = sellerList[1]["CategorieDishes"][0];
    let amount5 = sellerList[1]["CategorieDishes"][1];
    let amount6 = sellerList[1]["CategorieDishes"][2];
    amount1["amount"] = [0, 0, 0]
    amount2["amount"] = [0, 0, 0, 0]
    amount3["amount"] = [0, 0, 0]
    amount4["amount"] = [0, 0, 0]
    amount5["amount"] = [0, 0, 0, 0]
    amount6["amount"] = [0, 0, 0]
}

function renderBasket() {
    let basket = document.getElementById('basketContents');
    let basketAll = document.getElementById('basketPayment');
    if (basket.innerHTML == '') {
        let basket = document.getElementById('basketContents');
        basket.innerHTML = '';
        basketAll.innerHTML = `
            <p>Zur Zeit haben sie nichts ausgewählt!</p>
            `
        console.log("leer")
    } else {
        basketAll.innerHTML = templateBasketPayment();
        console.log("voll")
    }


}

function addToBasket(index, j, i) {
    let basket = document.getElementById('basketContents'); //controlle
    if (sellerList[index]["CategorieDishes"][i]["amount"][j] < 1) {
        console.log('1')
        basket.innerHTML += templateBasket(index, j, i);
        sellerList[index]["CategorieDishes"][i]["amount"][j] += 1;
        renderDishAmount(index, j, i);
        renderBasket();
        return;
    } else {
        console.log('2')
        sellerList[index]["CategorieDishes"][i]["amount"][j] += 1;
        renderDishAmount(index, j, i);
        renderBasket();
    }
}

function renderDishAmount(index, j, i) {
    let amountDish = document.getElementById(`cardAmount${j}${i}`);
    let dishPrice = document.getElementById(`dishPrice${j}${i}`);
    amountDish.innerHTML = sellerList[index]["CategorieDishes"][i]["amount"][j];
    dishPrice.innerHTML = calcDishPrice(index, j, i);
}

function calcDishPrice(index, j, i) {
    let dishPrice = document.getElementById(`dishPrice${j}`); //+ zu amoutn ändern
    let amount = sellerList[index]["CategorieDishes"][i]["amount"][j];
    let price = sellerList[index]["CategorieDishes"][i]["price"][j];
    let wholePrice = amount * price;
    return `${wholePrice}€`;
}