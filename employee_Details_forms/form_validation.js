const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const date = document.getElementById("date");
const position = document.getElementById("position");
const address = document.getElementById("address");
const experience = document.getElementById("experience");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
});
function validateInputs() {
    const firstNameVal = firstName.value.trim();
    const lastNameVal = lastName.value.trim();
    const emailVal = email.value.trim();
    const phoneNumberVal = phoneNumber.value.trim();
    const positionVal = position.value.trim();
    const addressVal = address.value.trim();
    const experienceVal = experience.value.trim();

    if(firstNameVal === ''){
        setError(firstName, "FirstName is Required");
    } else if (firstNameVal.length <= 4) {
        setError(firstName, "FirstName should be minimum 4 characters");
    } else if(firstNameVal.length > 14) {
        setError(firstName, "FirstName should not exceeds to 14 characters");
    } else {
        setSuccess(firstName);
    }

    if(lastNameVal === ''){
        setError(lastName, "LastName is Required");
    } else if (lastNameVal.length === 1 && lastNameVal.toUpperCase) {
        setError(lastName, "LastName should not exceeds 1 character and it must be in Captial Letter");
    } else {
        setSuccess(lastName);
    }

    if(emailVal === ''){
        setError(email, "Email is Required");
    } else if(!validateEmail(emailVal)) {
        setError(email, "Please Enter a valid E-mail id");
    }
    else {
        setSuccess(email);
    }

    if(phoneNumberVal === ''){
        setError(phoneNumber, "Phone Number is Required");
    } else if (phoneNumberVal.length > 10) {
        setError(phoneNumber, "Phone Number should not exceeds more than 10 numbers");
    } else if(phoneNumberVal.lenght < 10) {
        setError(phoneNumber, "Phone Number must be atleast 10 Numbers");
    } else {
        setSuccess(phoneNumber);
    }
}
function setError(element,message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.getElementById('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}
function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.getElementById('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
    
}

const validateEmail = (email)   => {
    return String(email).toLowerCase().match(
        /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
    );
};

