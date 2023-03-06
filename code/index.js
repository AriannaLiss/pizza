import {clickInputSize, clickSauceAdd, clickSubmit, clickToppingAdd} from "./functionEvent.js"
import {getUserInfoFields, validation, cleanValidation} from "./formValidation.js"
import pizza from "./pizza.js";

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
   size : pizza.size[pizza.size.length -1],
   topping : [],
   sauce : "",
   price : 0
}

getUserInfoFields().forEach( el => el.addEventListener('blur', validation));

document.getElementById('reset').addEventListener('click', cleanValidation);

document.getElementById('btnSubmit').addEventListener('click', clickSubmit);

export const userInfo = {
    name:"",
    phone:"",
    email:""
}
