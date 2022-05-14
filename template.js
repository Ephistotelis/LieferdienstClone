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