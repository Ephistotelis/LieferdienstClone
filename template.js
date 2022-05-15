// Templates
function templateDishCategorie(index, i) {
    return `
    <div class="dishesCategories">
                    <img src="img/dish-meal-food-produce-italy-breakfast-740020-pxhere.com.jpg" alt="PassendesBild">
                    <div class="categoriesName">${sellerList[index]["dishCategorie"][i]}</div>
                </div>
    `
}

function templateDishes(index, j, i) {
    return `        
        <div class="dishesSingleDish">
                    <div class="singledishName">${sellerList[index]["CategorieDishes"][i]["dish"][j]}</div>
                    <div class="singledishInfo">${sellerList[index]["CategorieDishes"][i]["description"][j]}</div>
                    <div class="singledishPrice">${sellerList[index]["CategorieDishes"][i]["price"][j]} €</div>
                    <div class="singledishAmount" onclick="addToBasket(${index},${j},${i}), renderAddedAmount(${index},${j},${i})" id="singleAmount${j}${i}">+</div>
                </div>
        `
}

function templateSellerInfo(index) {
    return `
    <img src="img/time-32.png" alt="Uhr">
    <p>${sellerList[index]["sellerInfo"]["deliveryTime"]}</p>
    <img src="img/mounting.png" alt="Fahrrad">
    <p>${sellerList[index]["sellerInfo"]["deliveryCosts"]}</p>
    <img src="img/shopping-bag-32.png" alt="Tasche">
    <p>${sellerList[index]["sellerInfo"]["minOrderValue"]} €</p>
    `
}

function templateBasket(index, j, i) {
    return `
    <div class="contentsCard">
    <div class="cardContent">
        <div class="cardTop">
            <div class="cardText">
                <p class="cardAmount" id="cardAmount${j}${i}">${sellerList[index]["CategorieDishes"][i]["amount"][j]}</p>
                 <p>${sellerList[index]["CategorieDishes"][i]["dish"][j]}</p>
            </div>
            <a href="#">Anmerkung Hinzufügen</a>

        </div>
        <div class="cardBottom">
            <p id="dishPrice${j}${i}">${sellerList[index]["CategorieDishes"][i]["price"][j]}€</p>
            <div class="cardBtn">
                <button>-</button><button>+</button>
            </div>

        </div>
    </div>
</div>
    `
}

function templateBasketPayment() {
    return `
<div class="paymentList">
                    <div class="listCurrentSum" >
                        <p>Zwischensumme</p>
                        <p id="listCurrentSum">100,99€</p>
                    </div>
                    <div class="listDeliverycosts">
                        <p id="text">Lieferkosten</p>
                        <p id="listDeliverycosts">4,50€</p>
                    </div>
                    <div class="listWholeSum">
                        <p>Gesamt</p>
                        <p id="listWholeSum">105,49€</p>
                    </div>
                </div>
                <div>
                    <button class="paymentButton" id="paymentButton">Bezahlen (105,49€)</button>
                </div>
`
}