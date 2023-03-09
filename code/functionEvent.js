import { fillUserInfo, userSlectTopping } from "./functions.js"
import { pizzaSelectUser } from "./index.js"

export function clickInputSize(e) {
    if(e.target.tagName === "INPUT"){
        userSlectTopping(e);
    }
}

export const dragstartIngridient = (e) => {
    if(e.target.tagName === "IMG"){
        const imgURL = e.target.src;
        e.dataTransfer.setData("image/png", imgURL);
        e.dataTransfer.setData("text/uri-list", imgURL);
        e.dataTransfer.setData("text/plain", e.target.id);
    }
}

export const dropIngridient = (e) => {
    userSlectTopping(e);
    e.preventDefault();
}

export const clickSubmit = (e) => {
    if (pizzaSelectUser.price>0) {
        fillUserInfo(e);
        console.log(pizzaSelectUser);
    }else{
        console.error(`Pizza hasn't been built.`);
    }
}
