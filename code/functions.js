import { getUserInfoFields, validateField } from "./formValidation.js";
import { pizzaSelectUser, userInfo } from "./index.js";
import pizza from "./pizza.js";

const SAUCE_ON_PIZZA_CLASS = "sauce-on-pizza";
const TOPPING_ON_PIZZA_CLASS = "topping-on-pizza";

const isSauce = id => "sauceClassicsauceBBQsauceRikotta".includes(id);
const isTopping = id => "moc1moc2moc3telyavetch1vetch2".includes(id);
const isSize = id => "smallmidbig".includes(id);

function userSlectTopping(e) {
    let id = getID(e);
    if (!id) return;
    if (isSize(id)) {
        pizzaSelectUser.size = pizza.size.find((el) => {
            return el.name === id
        })
    } else if (isTopping(id)) {
        pizzaSelectUser.topping.push(pizza.topping.find(el => el.name === id))
        putTopping(e);
    } else if (isSauce(id)) {
        pizzaSelectUser.sauce = pizza.sauce.find(el => el.name === id)
        putSauce(e);
    }
    pizzaSelectUser.price = evaluate(pizzaSelectUser);
    show(pizzaSelectUser);
}

const getID = (e) => {
    let id;
    if (e.dataTransfer) {
        id = e.dataTransfer.getData("text/plain"); //topping is added
    } else { 
        id = e.target.value;  //size is chosen
    };
    return id
}

// table (pizza picture)

const putTopping = (e) => {
    document.getElementById('table').appendChild(
        createImg(getDataTransferImgURL(e), TOPPING_ON_PIZZA_CLASS)
    );
}

const putSauce = (e) => {
    const table = document.getElementById('table');
    const img = createImg(getDataTransferImgURL(e), SAUCE_ON_PIZZA_CLASS);
    const sauce = document.getElementsByClassName(SAUCE_ON_PIZZA_CLASS)[0];
    sauce ? table.replaceChild(img,sauce)
        : table.insertBefore(img, table.children[1]);
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

const createImg = (imgURL, type) => {
    const img = document.createElement("img");
    img.src = imgURL;
    img.classList.add(type);
    img.draggable = false;
    return img;
}

//form

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

export { userSlectTopping, fillUserInfo }
