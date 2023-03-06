const regex = {
    name: /^[а-яієґї'-]{2,}$/i,
    phone: /^\+380\d{9}$/,
    email: /^[a-z_.0-9]+@[a-z0-9.-]+\.[a-z.]+$/i,
}

function validation(e){
    validateField(e.target);
}

function validateField(field){
    return test(field.value, regex[field.name]) ?
        valid(field) : invalid(field);
}

const test = (field, rgx) => rgx.test(field);

function valid(el){
    el.classList.add("valid");
    el.classList.remove("invalid");
    return true;
}

function invalid(el){
    el.classList.remove("valid");
    el.classList.add("invalid");
    return false;
}

function cleanValidation(){
    getUserInfoFields().forEach((field) => {
        field.classList.remove('valid');
        field.classList.remove('invalid');
    })   
}

function getUserInfoFields(){
    return Array.from(document.forms['info'].getElementsByTagName('input'))
        .filter(el => el.className!='button');
};

export {validation, cleanValidation, getUserInfoFields, validateField};
