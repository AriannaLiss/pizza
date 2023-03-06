import {fillUserInfo, userSlectTopping} from "./functions.js"
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
