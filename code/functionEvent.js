import {userSlectTopping} from "./functions.js"

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



