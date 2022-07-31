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
    const zipCodeRegExp  = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    return zipCodeRegExp.test(value);
}

const isPasswordSecure = (value) => {
    // passwoed must contains: at least one lowercase character, at least one uppercase character, at least one number, at least one special character, The password must be eight characters or longer.
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


