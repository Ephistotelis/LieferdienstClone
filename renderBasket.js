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
    resetValues();
}

function resetValues() {
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
    amount1["currentPrice"] = [0, 0, 0]
    amount2["currentPrice"] = [0, 0, 0, 0]
    amount3["currentPrice"] = [0, 0, 0]
    amount4["currentPrice"] = [0, 0, 0]
    amount5["currentPrice"] = [0, 0, 0, 0]
    amount6["currentPrice"] = [0, 0, 0]

}

function renderBasket() {
    let basket = document.getElementById('basketContents');
    let basketAll = document.getElementById('basketPayment');
    if (basket.innerHTML == '') {
        let basket = document.getElementById('basketContents');
        basket.innerHTML = '';
        basketAll.innerHTML = `<p>Zur Zeit haben sie nichts ausgewählt!</p>`
    } else {
        basketAll.innerHTML = templateBasketPayment();
    }
}

function addToBasket(index, j, i) {
    let basket = document.getElementById('basketContents'); //controlle
    if (sellerList[index]["CategorieDishes"][i]["amount"][j] < 1) {
        basket.innerHTML += templateBasket(index, j, i);
        sellerList[index]["CategorieDishes"][i]["amount"][j] += 1;
        renderBasket();
        renderDishAmount(index, j, i);
        return;
    } else {
        sellerList[index]["CategorieDishes"][i]["amount"][j] += 1;
        renderBasket();
        renderDishAmount(index, j, i);
    }
}

function renderAddedAmount(index, j, i) {
    if (sellerList[index]["CategorieDishes"][i]["amount"][j] < 1) {
        amount.innerHTML = "+"
    } else {
        let amount = document.getElementById(`singleAmount${j}${i}`);
        amount.innerHTML = sellerList[index]["CategorieDishes"][i]["amount"][j];
    }
}

function renderDishAmount(index, j, i) {
    let amountDish = document.getElementById(`cardAmount${j}${i}`);
    let dishPrice = document.getElementById(`dishPrice${j}${i}`);
    amountDish.innerHTML = sellerList[index]["CategorieDishes"][i]["amount"][j];
    dishPrice.innerHTML = `${calcDishPrice(index, j, i)} €`;
    renderPaymentList(index, j, i);
}

function calcDishPrice(index, j, i) {
    let amount = sellerList[index]["CategorieDishes"][i]["amount"][j];
    let price = sellerList[index]["CategorieDishes"][i]["price"][j];
    wholePrice = amount * price;
    sellerList[index]["CategorieDishes"][i]["currentPrice"][j] = wholePrice;
    return wholePrice;
}

function renderPaymentList(index, j, i) {
    console.log(index)
    let indexnew = index
    renderlistCurrentSum(indexnew);
    renderlistDeliverycosts(indexnew, j, i);
    renderlistWholeSum(indexnew);
}

function renderlistDeliverycosts(index, j, i) {
    let deliveryCoststext = document.getElementById('listDeliverycosts');
    let deliveryCosts = sellerList[index]["sellerInfo"]["deliveryCosts"];
    deliveryCoststext.innerHTML = `${deliveryCosts} €`
}

function renderlistCurrentSum(index) {
    console.log(index)
    let currentSum = document.getElementById('listCurrentSum');
    currentSum.innerHTML = `${calcBasketCurrentSum(index)} €`;
}



function renderlistWholeSum(index) {
    let deliveryCosts = sellerList[index]["sellerInfo"]["deliveryCosts"];
    let paymentButton = document.getElementById('paymentButton');
    let wholeSum = 0;
    if (calcBasketCurrentSum() > sellerList[index]["sellerInfo"]["minOrderValue"]) {
        let deliveryCoststext = document.getElementById('listDeliverycosts');
        wholeSum = calcBasketCurrentSum() + 0;
        deliveryCoststext.innerHTML = `0€`
        addLineThrough();
    } else {
        wholeSum = calcBasketCurrentSum() + deliveryCosts;
    }
    let wholeSumText = document.getElementById('listWholeSum');
    wholeSumText.innerHTML = `${wholeSum} €`;
    paymentButton.innerHTML = `${wholeSum} €`;

}

function addLineThrough() {
    let deliveryCostsLine = document.getElementById('text');
    let deliveryCoststext = document.getElementById('listDeliverycosts');
    deliveryCostsLine.style.color = "red"
    deliveryCostsLine.style.textDecoration = "line-through"
    deliveryCoststext.style.color = "red"
    deliveryCoststext.style.textDecorationLine = "line-through"

}

function calcBasketCurrentSum(index) {
    console.log(index)
    let sum1 = calcCurrentPrice(index, 0);
    let sum2 = calcCurrentPrice(index, 1);
    let sum3 = calcCurrentPrice(index, 2);
    let result = sum1 + sum2 + sum3;
    return result;
}

function calcCurrentPrice(index, categorie) {
    let currentPrice = sellerList[index]["CategorieDishes"][categorie]["currentPrice"];
    let sum = 0;
    for (let j = 0; j < sellerList[index]["CategorieDishes"][categorie]["currentPrice"].length; j++) {
        sum = sum + currentPrice[j]
    }
    return sum;
}