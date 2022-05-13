//amount adden, jeweilige gerichte zu json machen umd price, info zu adden
let sellerList = [{
        "name": "Prontonio Pizza",
        "adress": "Musterstraße 69, 12345 Musterstadt",
        "favoriteDishes": ["Pizza Margherita", "Pizza Salami", "Pizza Quattro Stagioni"],
        "dishCategorie": ["Pizza", "Salate"],
        "CategorieDishes": [{ "dish": ["Pizza Margherita", "Pizza Salami", "Pizza Quattro Stagioni", "Pizza Sucuk"] },
            { "dish": ["Feldsalat", "Salat de Cucamber", "Hirtensalat"] }
        ],
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
        "dishCategorie": ["Pasta", "Salate"],
        "CategorieDishes": [
            { "dish": ["Pasta Fungi", "Pasta con Pasta", "Pasta Sucuk", "Pasta con Tuna"] },
            { "dish": ["Feldsalat", "Salat de Cucamber", "Hirtensalat"] }
        ],

        "sellerInfo": {
            "deliveryTime": "20-40min",
            "deliveryCosts": "2,50€",
            "minOrderValue": "20,00€",
            "sellerDescribtion": "Dieses Restaurant bietet tolle Pasta an!"
        }
    }
]