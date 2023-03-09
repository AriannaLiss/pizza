import {fillUserInfo, userSlectTopping, putIngridient} from "./functions.js"
import { pizzaSelectUser } from "./index.js"

export function clickInputSize(e) {
    if(e.target.tagName === "INPUT"){
        userSlectTopping(e.target.value)
    }
}

export const clickToppingAdd = (e)=> {
    if(e.target.tagName === "IMG"){
        userSlectTopping(e.target.id)
    }
}

export const clickSauceAdd = (e)=> {
    if(e.target.tagName === "IMG"){
        userSlectTopping(e.target.id)
    }
}

export const clickSubmit = (e) => {
    if (pizzaSelectUser.price>0) {
        fillUserInfo(e);
        console.log(pizzaSelectUser);
    }else{
        console.error(`Pizza hasn't been built.`);
    }
}

export const dragstartTopping = (e) => {
    if(e.target.tagName === "IMG"){
        const imgURL = e.target.src
        e.dataTransfer.setData("image/png", imgURL);
        e.dataTransfer.setData("text/uri-list", imgURL);
        e.dataTransfer.setData("text/plain", e.target.id);
    }
}

export const dropIngridient = (e) => {
    const id = e.dataTransfer.getData("text/plain");
    if (!id) return;
    userSlectTopping(id);
    putIngridient(e);
    e.preventDefault();
}
