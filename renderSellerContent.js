function renderSellerMain(index) {
    renderSellerInfo(index);
    renderSellerCategories(index);
    renderSellerDishes(index);
    renderBasketStart();
}

function renderSellerInfo(index) {
    let sellerAdress = document.getElementById('sellerAdress');
    let sellerName = document.getElementById('sellerName');
    let sellerInfo = document.getElementById('deliverInfos');
    let sellerDescription = document.getElementById('sellerDescription');
    let sellerCategories = document.getElementById('sellerCategories');
    sellerAdress.innerHTML = sellerList[index]["adress"]
    sellerName.innerHTML = sellerList[index]["name"]
    sellerInfo.innerHTML = templateSellerInfo(index);
    sellerDescription.innerHTML = `<p>${sellerList[index]["sellerInfo"]["sellerDescription"]}</p> `
}

function renderSellerCategories(index) {
    let sellerCategories = document.getElementById('sellerCategories');
    sellerCategories.innerHTML = `<img src="img/zoom-32.png" alt="lupe">`;
    for (let i = 0; i < sellerList[index]["dishCategorie"].length; i++) {
        sellerCategories.innerHTML += `<a href="#">${sellerList[index]["dishCategorie"][i]}</a>`
    }
}

function renderSellerDishes(index) {
    // categorien und die dazugehörigen gerichte rendern
    let sellerDishes = document.getElementById('sellerDishesContent');
    sellerDishes.innerHTML = "";
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