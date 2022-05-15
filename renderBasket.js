/*
@param{string} type - erklärung was mit type gemeint ist
*/


function renderBasketStart() {
    let basket = document.getElementById('basketContents');
    let basketAll = document.getElementById('basketPayment');
    basket.innerHTML = '';
    basketAll.innerHTML = templateBasketEmpty();
    // just because i´ve not implemented localstorage at this point
    resetValues();
}

function submitOrder() {
    alert("Ihre Bestellung wurde eingereicht, sie erhalten in kürze eine E-Mail!")
    renderBasketStart();
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

function addToBasket(index, j, i, addsub) {
    let basket = document.getElementById('basketContents'); //controlle
    if (sellerList[index]["CategorieDishes"][i]["amount"][j] < 1) {
        basket.innerHTML += templateBasket(index, j, i);
        setAmount(index, j, i, addsub);
        // renderBasket();
        renderDishAmount(index, j, i);
        return;
    } else {
        setAmount(index, j, i, addsub);
        // renderBasket();
        renderDishAmount(index, j, i);
    }
}

function removeSingleBasket() {
    let basket = document.getElementById('basketContents')
    basket.innerHTML += templateBasket(index, j, i);
}

function setAmount(index, j, i, addsub) { //+ or - 1
    let singleDish = document.getElementById(`contentsCard${j}${i}`);
    switch (addsub) {
        case "+":
            sellerList[index]["CategorieDishes"][i]["amount"][j] += 1;
            renderAddedAmount(index, j, i);
            renderBasket();
            break;
        case "-":
            sellerList[index]["CategorieDishes"][i]["amount"][j] -= 1;
            if (sellerList[index]["CategorieDishes"][i]["amount"][j] < 1) {
                singleDish.remove();
                renderAddedAmount(index, j, i);
            };
            break;
    }
}

function renderAddedAmount(index, j, i) {
    let amount = document.getElementById(`singleAmount${j}${i}`);
    if (sellerList[index]["CategorieDishes"][i]["amount"][j] < 1) {
        amount.innerHTML = "+"
    } else {
        amount.innerHTML = sellerList[index]["CategorieDishes"][i]["amount"][j];
    }
}



function renderDishAmount(index, j, i) {
    if (sellerList[index]["CategorieDishes"][i]["amount"][j] < 1) {
        calcDishPrice(index, j, i);
        renderPaymentList(index, j, i);
        if (calcBasketCurrentSum(index) < 1) {
            console.log(calcBasketCurrentSum(index));
            renderBasketStart();
        };
    } else {
        let amountDish = document.getElementById(`cardAmount${j}${i}`);
        let dishPrice = document.getElementById(`dishPrice${j}${i}`);
        amountDish.innerHTML = sellerList[index]["CategorieDishes"][i]["amount"][j];
        dishPrice.innerHTML = `${calcDishPrice(index, j, i).toFixed(2)} €`;
        renderPaymentList(index, j, i);
    }
}

function calcDishPrice(index, j, i) {
    let amount = sellerList[index]["CategorieDishes"][i]["amount"][j];
    let price = sellerList[index]["CategorieDishes"][i]["price"][j];
    wholePrice = amount * price;
    sellerList[index]["CategorieDishes"][i]["currentPrice"][j] = wholePrice;
    return wholePrice;
}

function renderPaymentList(index, j, i) {
    renderlistCurrentSum(index);
    renderlistDeliverycosts(index, j, i);
    renderlistWholeSum(index);
}

function renderlistDeliverycosts(index, j, i) {
    let deliveryCoststext = document.getElementById('listDeliverycosts');
    let deliveryCosts = sellerList[index]["sellerInfo"]["deliveryCosts"].toFixed(2);
    deliveryCoststext.innerHTML = `${deliveryCosts} €`
}

function renderlistCurrentSum(index) {
    let currentSum = document.getElementById('listCurrentSum');
    currentSum.innerHTML = `${calcBasketCurrentSum(index).toFixed(2)} €`;
}

function renderlistWholeSum(index) {
    let deliveryCosts = sellerList[index]["sellerInfo"]["deliveryCosts"];
    let paymentButton = document.getElementById('paymentButton');
    let wholeSum = 0;
    if (calcBasketCurrentSum(index) > sellerList[index]["sellerInfo"]["minOrderValue"]) {
        wholeSum = calcBasketCurrentSum(index);
        addLineThrough();
    } else {
        wholeSum = calcBasketCurrentSum(index) + deliveryCosts;
        subLineThrough()
    }
    let wholeSumText = document.getElementById('listWholeSum');
    wholeSumText.innerHTML = `${wholeSum.toFixed(2)} €`;
    paymentButton.innerHTML = `${wholeSum.toFixed(2)} €`;
}

function addLineThrough() {
    let deliveryCostsLine = document.getElementById('text');
    let deliveryCoststext = document.getElementById('listDeliverycosts');
    deliveryCostsLine.style.color = "red"
    deliveryCostsLine.style.textDecoration = "line-through"
    deliveryCoststext.style.color = "red"
    deliveryCoststext.style.textDecorationLine = "line-through"
}

function subLineThrough() {
    let deliveryCostsLine = document.getElementById('text');
    let deliveryCoststext = document.getElementById('listDeliverycosts');
    deliveryCostsLine.style.color = "var(--textDishes)"
    deliveryCostsLine.style.textDecoration = "none"
    deliveryCoststext.style.color = "var(--textDishes)"
    deliveryCoststext.style.textDecorationLine = "none"
}

function calcBasketCurrentSum(index) {
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