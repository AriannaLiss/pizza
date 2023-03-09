import { getUserInfoFields, validateField } from "./formValidation.js";
import { pizzaSelectUser, userInfo } from "./index.js";
import pizza from "./pizza.js";

function userSlectTopping(topping) {
    if ("smallmidbig".includes(topping)) {
        pizzaSelectUser.size = pizza.size.find((el) => {
            return el.name === topping
        })
    } else if ("moc1moc2moc3telyavetch1vetch2".includes(topping)) {
        pizzaSelectUser.topping.push(pizza.topping.find(el => el.name === topping))
    } else if ("sauceClassicsauceBBQsauceRikotta".includes(topping)) {
        pizzaSelectUser.sauce = pizza.sauce.find(el => el.name === topping)
    }
    pizzaSelectUser.price = evaluate(pizzaSelectUser);
    show(pizzaSelectUser);
}

function fillUserInfo() {
    let err = false
    const validation = getUserInfoFields().forEach((field) =>{
        if(!validateField(field)) { 
            console.error(`Field ${field.name} is invalid.`);
            err = true;
        }
        userInfo[field.name] = field.value;
    });
    err ? console.error('Please fill all fealds.') : console.log(userInfo);
}

function evaluate(pizza) {
    let price = 0;
    const coefficient = pizza.size ? pizza.size.coefficient : 1;
    if (pizza.sauce !== "") {
        price += pizza.sauce.price * coefficient;
    }
    if(pizza.topping.length > 0){
        price += pizza.topping.reduce((a,b)=>{
            return a + b.price * coefficient;
        }, 0)
    }
    price += pizza.size.price;
    return price;
}

function show(pizza){
    showPrice(pizza.price);
    showBase(pizza.size)
    showSauce(pizza.sauce, pizza.size.coefficient);
    showTopping(pizza.topping, pizza.size.coefficient);
}

function showPrice(price){
    document.getElementById("price").innerHTML = price;
}

function showBase(size){
    if (size) document.getElementById("base").innerHTML =  size.sizeName + ': ' + size.price;
}

function showSauce(sauce, coefficient){
    if (sauce) document.getElementById("sauce").innerHTML = sauce.productName + ': ' + sauce.price * coefficient;
}

function showTopping(topping, coefficient){
    if (!topping) return;
    let toppingList = document.getElementById('toppingList');
    if (!toppingList){
        toppingList = document.createElement('ul');
        toppingList.id = 'toppingList';
        toppingList.class = 'price-list'
    } else {
        toppingList.innerHTML = '';
    }
    topping.forEach(t => {
        const li = document.createElement('li');
        li.id = t.name;
        li.innerHTML = t.productName + ': ' + t.price * coefficient;
        toppingList.appendChild(li);
    });
    document.getElementById("topping").appendChild(toppingList);
}

const getDataTransferImgURL = (e) =>{
    const supportTypes = ["image/png", "text/uri-list"];
    const types = supportTypes.filter((type) => 
        e.dataTransfer.types.includes(type));
    let data;
    if (types.length) {
        let i=0;
        while (i<types.length && !data) {
            data = e.dataTransfer.getData(types[i]);
            i++;
        }
    }
    return data;
}

const putIngridient = (e) => {
    const img = document.createElement("img");
    img.src = getDataTransferImgURL(e);
    img.class = "table-ingridient";
    img.draggable = false;
    document.getElementById('table').appendChild(img);
}

export { userSlectTopping, fillUserInfo, putIngridient }
