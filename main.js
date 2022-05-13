let sellerList = [{
        "name": "Prontonio Pizza",
        "adress": "Musterstraße 69, 12345 Musterstadt",
        "favoriteDishes": ["Pizza Margherita", "Pizza Salami", "Pizza Quattro Stagioni"],
        "dishCategorie": ["Beliebte Gerichte", "Pizza", "Salate"],
        "dishPizza": ["Pizza Margherita", "Pizza Salami", "Pizza Quattro Stagioni", "Pizza Sucuk"],
        "dishSalat": ["Feldsalat", "Salat de Cucamber", "Hirtensalat"],
        "sellerInfo": {
            "deliveryTime": "10-35min",
            "deliveryCosts": "4,50€",
            "minOrderValue": "15,50€",
            "sellerDescribtion": "Dieses Restaurant bietet tolle Pizza an!"
        }
    },
    {
        "name": "Pasta Taxi",
        "adress": "Musterstraße 78, 54321 Musterstadt",
        "favoriteDishes": ["Pasta Fungi", "Pasta con Pasta"],
        "dishCategorie": ["Beliebte Gerichte", "Pasta", "Salate"],
        "dishPizza": ["Pasta Fungi", "Pasta con Pasta", "Pasta Sucuk", "Pasta con Tuna"],
        "dishSalat": ["Feldsalat", "Salat de Cucamber", "Hirtensalat"],
        "sellerInfo": {
            "deliveryTime": "20-40min",
            "deliveryCosts": "2,50€",
            "minOrderValue": "20,00€",
            "sellerDescribtion": "Dieses Restaurant bietet tolle Pasta an!"
        }
    }
]









/*
@param{string} type - erklärung was mit type gemeint ist
@

*/

function renderSellerMain(index) {
    let sellerDishes = document.getElementById('sellerDishesContent');
    sellerDishes.innerHTML = '<div class="dishesCategorieFD">Beliebte Gerichte</div>'
    renderSellerInfo(index);
    renderFavDishes(index);
    renderSellerCategories(index);
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

function renderSellerCategories(index) {
    templateCategories(index);
}

function renderFavDishes(index) {
    templateFavDishes(index)
}

function renderSellerDishes(index) {
    // categorien und die dazugehörigen gerichte rendern
}

function renderBasket() {
    //warenkorb
}

function templateFavDishes(index) {
    let sellerDishes = document.getElementById('sellerDishesContent');
    for (let i = 0; i < sellerList[index]["favoriteDishes"].length; i++) {
        sellerDishes.innerHTML +=
            `
        <div class="dishesSingleDish">
                    <div class="singledishName">${sellerList[index]["favoriteDishes"][i]}</div>
                    <div class="singledishInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minima ab, alias facere eos ipsum veniam adipisci sapiente ea saepe. Ut a, adipisci sit excepturi sunt aliquid corrupti saepe labore?</div>
                    <div class="singledishPrice">7,90€</div>
                    <div class="singledishAmount">+</div>
                </div>
        `
    }
}

function templateCategories(index) {
    let sellerCategories = document.getElementById('sellerCategories');
    sellerCategories.innerHTML = '<img src="img/zoom-32.png" alt="lupe">';
    for (let i = 0; i < sellerList[index]["dishCategorie"].length; i++) {
        sellerCategories.innerHTML += `<a href="#">${sellerList[index]["dishCategorie"][i]}</a>`
    }
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