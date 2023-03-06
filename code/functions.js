import { pizzaSelectUser } from "./index.js";
import pizza from "./pizza.js";

function userSlectTopping(topping) {
    //size = "big"
    if ("smallmidbig".includes(topping)) {
        pizzaSelectUser.size = pizza.size.find((el) => {
            return el.name === topping
        })
    } else if ("moc1moc2moc3telyavetch1vetch2".includes(topping)) {
        pizzaSelectUser.topping.push(pizza.topping.find(el => el.name === topping))
    } else if ("sauceClassicsauceBBQsauceRikotta".includes(topping)) {
        pizzaSelectUser.sauce = pizza.sauce.find(el => el.name === topping)
    }
    pizzaSelectUser.price = show(pizzaSelectUser);
}

function show(pizza) {
    let price = 0;
    if (pizza.sauce !== "") {
        price += pizza.sauce.price;
    }
    if(pizza.topping.length > 0){
        price += pizza.topping.reduce((a,b)=>{
            return a + b.price
        }, 0)
    }
    if(pizza.size !== ""){
        price += pizza.size.price;
    }
    console.log(price);
    return price;
}

export { userSlectTopping }