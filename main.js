/*
@param{string} type - erklärung was mit type gemeint ist
*/

function renderSellerMain(index) {
    let sellerDishes = document.getElementById('sellerDishesContent');
    sellerDishes.innerHTML = '<div class="dishesCategorieFD">Beliebte Gerichte</div>'
    renderSellerInfo(index);
    renderFavDishes(index);
    renderSellerCategories(index);
    renderSellerDishes(index);
}

function renderSellerInfo(index) {
    let sellerAdress = document.getElementById('sellerAdress');
    let sellerName = document.getElementById('sellerName');
    let sellerInfo = document.getElementById('deliverInfos');
    let sellerDescribtion = document.getElementById('sellerDescribtion');
    let sellerCategories = document.getElementById('sellerCategories');
    sellerAdress.innerHTML = sellerList[index]["adress"]
    sellerName.innerHTML = sellerList[index]["name"]
    sellerInfo.innerHTML = templateSellerInfo(index);
    sellerDescribtion.innerHTML = `<p>${sellerList[index]["sellerInfo"]["sellerDescribtion"]}</p> `
}

function renderFavDishes(index) {
    let sellerDishes = document.getElementById('sellerDishesContent');
    for (let i = 0; i < sellerList[index]["favoriteDishes"].length; i++) {
        sellerDishes.innerHTML += templateFavDishes(index, i)
    }
}

function renderSellerCategories(index) {
    let sellerCategories = document.getElementById('sellerCategories');
    sellerCategories.innerHTML = '<img src="img/zoom-32.png" alt="lupe">';
    for (let i = 0; i < sellerList[index]["dishCategorie"].length; i++) {
        sellerCategories.innerHTML += `<a href="#">${sellerList[index]["dishCategorie"][i]}</a>`
    }
}

function renderSellerDishes(index) {
    // categorien und die dazugehörigen gerichte rendern
    let sellerDishes = document.getElementById('sellerDishesContent');
    for (let i = 0; i < sellerList[index]["dishCategorie"].length; i++) {
        sellerDishes.innerHTML += templateDishCategorie(index, i);
        renderDishes(index, i);
    }
}

function renderDishes(index, i) {
    let sellerDishes = document.getElementById('sellerDishesContent');
    for (let j = 0; j < sellerList[index]["CategorieDishes"][i]["dish"].length; j++) {
        sellerDishes.innerHTML += templateDishes(index, j, i);
    }
}

function renderBasket() {
    //warenkorb
}



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
                    <div class="singledishInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minima ab, alias facere eos ipsum veniam adipisci sapiente ea saepe. Ut a, adipisci sit excepturi sunt aliquid corrupti saepe labore?</div>
                    <div class="singledishPrice">7,90€</div>
                    <div class="singledishAmount">+</div>
                </div>
        `
}

function templateFavDishes(index, i) { // info, price und amount adden
    return `        
        <div class="dishesSingleDish">
                    <div class="singledishName">${sellerList[index]["favoriteDishes"][i]}</div>
                    <div class="singledishInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minima ab, alias facere eos ipsum veniam adipisci sapiente ea saepe. Ut a, adipisci sit excepturi sunt aliquid corrupti saepe labore?</div>
                    <div class="singledishPrice">7,90€</div>
                    <div class="singledishAmount">+</div>
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
    <p>${sellerList[index]["sellerInfo"]["minOrderValue"]}</p>
    `
}