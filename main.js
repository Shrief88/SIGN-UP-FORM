//utility functions 
const isRequired = (value)=> value ===  '' ? false : true ;

const isLengthValid = (value,min,max) => value.length >= min && value.length <= max ? true : false ;

const isEmailVaild = (value) => {
    const emailRegExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return emailRegExp.test(value);
}

const isPhoneValid = (value)=>{
    const phoneRegExp = /^01[0-2,5][0-9]{8}$/;
    return phoneRegExp.test(value);
}

const isZipCodeValid = (value)=>{
    const zipCodeRegExp  = /(^\d{5}$)/;
    return zipCodeRegExp.test(value);
}

const isPasswordSecure = (value) => {
    // password must contains at least one: lowercase character, uppercase character, number,and  special character, The password must be eight characters or longer.
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return passwordRegExp.test(value);
}

const showError = (message,input)=>{
    input.classList.remove('success');
    input.classList.add('error');
    const messageField = input.nextSibling;
    messageField.textContent = message;
}

const showSuccess = (input) =>{
    input.classList.remove('error');
    input.classList.add('success');
    const messageField = input.nextSibling;
    messageField.textContent = '';
}

const checkUserName = (input,value)=>{
    let valid = false;
    if(!isRequired(value)){
        showError("You Must Provide a Name",input);
    }
    else if(!isLengthValid(value,3,20)){
        showError("Length of the name must be between 3 and 20",input);
    }else{
        valid = true;
        showSuccess(input);
    } 
    return valid;
}

const checkEmail = (input,value)=>{
    let valid = false;
    if(!isRequired(value)){
        showError("You Must Provide an Email",input);
    }
    else if(!isEmailVaild(value)){
        showError("Please enter a valid email, example@email.com",input);
    }else{
        valid = true;
        showSuccess(input);
    }  
    return valid;
}

const checkPhone = (input,value)=>{
    let valid = false;
    if(!isRequired(value)){
        showError("You Must Provide a phone number",input);
    }
    else if(!isPhoneValid(value)){
        showError("Please enter a valid email, it should contains 11 digits",input);
    }else{
        valid = true;
        showSuccess(input);
    } 
    return valid;
}

const checkCountry = (input,value)=>{
    let valid = false;
    if(!isRequired(value)){
        showError("You Must Provide a Country",input);
    }
    else if(!isLengthValid(value,2,60)){
        showError("Length of the name must be between 2 and 60",input);
    }else{
        valid = true;
        showSuccess(input);
    } 
    return valid;
}

const checkZipCode = (input,value)=>{
    let valid = false;
    if(!isRequired(value)){
        return showError("You Must Provide a zip Code",input);
    }
    else if(!isZipCodeValid(value)){
        showError("Please enter a zip code, xxxxx",input);
    }else{
        valid = true;
        showSuccess(input);
    } 
    return valid;
}

const checkPassword = (input,value)=>{
    let valid = false;
    if(!isRequired(value)){
        return showError("You Must Provide a password",input);
    }
    if(!isPasswordSecure(value)){
        return showError("your password must be at least 8 digits and contains at least one: lowercase character, uppercase character, number,and  special character",input);
    }else{
        valid = true;
        showSuccess(input);
    } 
    return valid;
}

const checkPasswordConfrim = (password , input,value)=>{
    let valid = false;
    if(!isRequired(value)){
        return showError("You Must Provide a password",input);
    }
    if(password !== value){
        return showError("Confirm password does not match",input);
    }else{
        valid = true;
        showSuccess(input);
    } 
    return valid;
}

const form = document.querySelector('#form');
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const firstName = document.querySelector('#firstName');
    const secondName = document.querySelector('#lastName');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const country = document.querySelector('#country');
    const zipCode = document.querySelector('#zipCode');
    const password = document.querySelector('#user_password');
    const confrimPassword = document.querySelector('#confirm_password');

    let valid = checkUserName(firstName,firstName.value) && checkUserName(secondName,secondName.value) && checkEmail(email,email.value) && checkPhone(phone,phone.value)  &&  checkCountry(country,country.value) && checkZipCode(zipCode,zipCode.value) && checkPassword(password,password.value) && checkPasswordConfrim(password.value,confrimPassword,confrimPassword.value) ;
    if (valid){
        alert('you can submit now')
    }
})

form.addEventListener('input',(e)=>{
    const firstName = document.querySelector('#firstName');
    const secondName = document.querySelector('#lastName');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const country = document.querySelector('#country');
    const zipCode = document.querySelector('#zipCode');
    const password = document.querySelector('#user_password');
    const confrimPassword = document.querySelector('#confirm_password');

    if(e.target.id === 'firstName'){
        checkUserName(firstName,firstName.value);
    }
    else if (e.target.id === 'lastName'){
        checkUserName(secondName,secondName.value);
    }
    else if(e.target.id === "email"){
        checkEmail(email,email.value);
    }
    else if(e.target.id === 'phone'){
        checkPhone(phone,phone.value);
    }
    else if(e.target.id === 'country'){
        checkCountry(country,country.value);
    }
    else if(e.target.id === 'zipCode'){
        checkZipCode(zipCode,zipCode.value);
    }
    else if(e.target.id === 'user_password'){
        checkPassword(password,password.value);
    }
    else if(e.target.id === 'confirm_password'){
        checkPasswordConfrim(password.value, confrimPassword,confrimPassword.value);
    }
})









