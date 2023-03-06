import {clickInputSize, clickSauceAdd, clickToppingAdd} from "./functionEvent.js"

document.getElementById("pizza")
    .addEventListener("click", clickInputSize);

document.querySelectorAll(".topping")
.forEach((div)=>{
    div.addEventListener("click", clickToppingAdd)
})

document.querySelectorAll(".sauce")
.forEach((div)=>{
    div.addEventListener("click", clickSauceAdd)
})

export const pizzaSelectUser = {
   size : "",
   topping : [],
   sauce : "",
   price : 0
}

