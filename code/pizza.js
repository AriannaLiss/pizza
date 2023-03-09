const pizza = {
    size : [
        {name : "small", price : 40, coefficient: 1, sizeName: 'Маленька'},
        {name : "mid", price: 55, coefficient: 1.5, sizeName: 'Середня'},
        {name : "big", price: 70, coefficient: 2, sizeName: 'Велика'}
    ],
    topping: [
        {name : "moc1",   price: 50, productName: "Сир звичайний"},
        {name : "moc2",   price: 55, productName: "Сир фета"},
        {name : "moc3",   price: 40, productName: "Моцарелла"},
        {name : "telya",  price: 80, productName: "Телятина"},
        {name : "vetch1", price: 30, productName: "Помiдори"},
        {name : "vetch2", price: 35, productName: "Гриби"},
    ],
    sauce: [
        {name: "sauceClassic", price : 20, productName: 'Кетчуп'},
        {name: "sauceBBQ", price : 22, productName: 'BBQ'},
        {name: "sauceRikotta", price : 24, productName: 'Рікотта'}
    ]
}

export default pizza;
