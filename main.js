let sellerList = [{
        "name": "Prontonio Pizza",
        "adress": "Musterstraße 69, 12345 Musterstadt",
        "favoriteDishes": ["Pizza Margherita", "Pizza Salami", "Pizza Quattro Stagioni"],
        "dishCategorie": ["Beliebte Gerichte", "Pizza", "Salate"],
        "dishPizza": ["Pizza Margherita", "Pizza Salami", "Pizza Quattro Stagioni", "Pizza Sucuk"],
        "dishSalat": ["Feldsalat", "Salat de Cucamber", "Hirtensalat"],
        "sellerInfo": ["10-35min", "4,50€", "Min 25,00€", "Dieses Restaurant bietet tolle Pizza an!"]
    },
    {
        "name": "Pasta Taxi",
        "adress": "Musterstraße 78, 54321 Musterstadt",
        "favoriteDishes": ["Pasta Fungi", "Pasta con Pasta"],
        "dishCategorie": ["Beliebte Gerichte", "Pasta", "Salate"],
        "dishPizza": ["Pasta Fungi", "Pasta con Pasta", "Pasta Sucuk", "Pasta con Tuna"],
        "dishSalat": ["Feldsalat", "Salat de Cucamber", "Hirtensalat"],
        "sellerInfo": ["20-45min", "2,50€", "Min 20,00€", "Dieses Restaurant bietet tolle Pasta an!"]
    }
]







//render = seller cats, seller info, basket items
const sellerJSON = sellerList;
let sellerAdress = document.getElementById('sellerAdress');
let sellerName = document.getElementById('sellerName');
let sellerInfo = document.getElementById('deliverInfos');
let sellerDescribtion = document.getElementById('sellerDescribtion');
let sellerCategories = document.getElementById('sellerCategories');
let sellerDishesContent = document.getAnimations('sellerDishesContent');

function render(type, index) {
    let sellerAdress = document.getElementById('sellerAdress');
    let sellerName = document.getElementById('sellerName');
    let sellerInfo = document.getElementById('deliverInfos');
    let sellerDescribtion = document.getElementById('sellerDescribtion');
    let sellerCategories = document.getElementById('sellerCategories');
    switch (type) {
        case 'sellerInfo':
            sellerAdress.innerHTML = sellerJSON[index]["adress"]
            sellerName.innerHTML = sellerJSON[index]["name"]
            sellerInfo.innerHTML = templateSellerInfo(index);
            sellerDescribtion.innerHTML = templateDescribtion(index);
            // templateCategories(index);

            break;

        case 'sellerInsfo':

            break;

    }
}

function templateCategories(index) {
    let sellerCategories = document.getElementById('sellerCategories');
    for (let i = 0; sellerList[index]["dishCategorie"].length; i++) {
        sellerCategories.innerHTML += `
        <a href="#">${sellerList[index]["dishCategorie"][i]}</a>
        `
    }
}

function templateDescribtion(index) {
    return `
    <p>${sellerList[index]["sellerInfo"][3]}</p>
    `

}

function templateSellerInfo(index) {
    return `
    <img src="img/time-32.png" alt="Uhr">
    <p>${sellerList[index]["sellerInfo"][0]}</p>
    <img src="img/mounting.png" alt="Fahrrad">
    <p>${sellerList[index]["sellerInfo"][1]}</p>
    <img src="img/shopping-bag-32.png" alt="Tasche">
    <p>${sellerList[index]["sellerInfo"][2]}</p>
    `

}




// Seller JSON