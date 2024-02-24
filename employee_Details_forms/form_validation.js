const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const date = document.getElementById("date");
const position = document.getElementById("position");
const address = document.getElementById("address");
const experience = document.getElementById("experience");
const cv = document.getElementById("cv");
/*
form.addEventListener('submit',(e)=>{
    if(!validateInputs()) {
        e.preventDefault();
    } 
}); 
*/

form.addEventListener('submit', function(e) {
    if (!validateInputs()) {
        e.preventDefault();
    }
});

function validateInputs() {
    const firstNameVal = firstName.value.trim();
    const lastNameVal = lastName.value.trim();
    const emailVal = email.value.trim();
    const phoneNumberVal = phoneNumber.value.trim();
    const positionVal = position.value.trim();
    const addressVal = address.value.trim();
    const experienceVal = experience.value.trim();
    const fileVal = cv.value.trim();
    const dateVal = date.value.trim();

    if(firstNameVal === ''){
        setError(firstName, "FirstName is Required");
    } else if (firstNameVal.length < 4) {
        setError(firstName, "FirstName should be minimum 4 characters");
    } else if(firstNameVal.length > 14) {
        setError(firstName, "FirstName should not exceeds to 14 characters");
    } else {
        setSuccess(firstName);
    }

    if(lastNameVal === ''){
        setError(lastName, "LastName is Required");
    } else if(!validateLastName(lastNameVal)) {
        setError(lastName, "LastName will be in uppercase & 1 Character Only");
    }
    else {
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
    } else if (!validatePhoneNumber(phoneNumberVal)) {
        setError(phoneNumber, "Phone Number must have 10 numbers");
    } else {
        setSuccess(phoneNumber);
    }

    if(positionVal === ''){
        setError(position, "Position is required");
    }
    else if(positionVal.length > 15) {
        setError(position, "Position should not exceeds 15 charatcers");
    } else if(positionVal.length <= 1) {
        setError(position, "Position will be more than 1 character");
    } else {
        setSuccess(position);
    }

    if(addressVal === '') {
        setError(address, "Address is Required.");
    } else if(addressVal.length > 20) {
        setError(address, "Address should not exceed 20 character");
    } else if(addressVal.length <= 5) {
        setError(address, "Address will be more than 5 characters.")
    } else {
        setSuccess(address);
    }

    if(experienceVal === '') {
        setError(experience, "Experience is Required.");
    } else if(!validateExperience(experienceVal)) {
        setError(experience, "Experience range is between 1 to 15");
    } else {
        setSuccess(experience);
    }

    if(fileVal === ''){
        setError(cv, "Please select the file");
    } else if(!validateCV(fileVal)) {
        setError(cv, "Unsupported Format");
    }else {
        setSuccess(cv);
    }

    if(dateVal === ''){
        setError(date, "Please select the Date");
    } else if(!validateDate(dateVal)) {
        setError(date, "Date of birth can not be future");
    } else {
        setSuccess(date);
    }
    
}
function setError(element,message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
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

const validateLastName = (lastName) => {
    return String(lastName).match(/^([A-Z])$/);
};

const validatePhoneNumber = (phoneNumber) => {
    return String(phoneNumber).match(/^([0-9]{10})$/);
};

const validateExperience = (experience) => {
    const vaildateExp = parseInt(experience);
    if(!isNaN(vaildateExp) && vaildateExp >= 1 && vaildateExp <= 15) {
        return validateExperience;
    }

};

const validateCV = (cv) => {
    return String(cv).match(/^(\.pdf|\.doc|\.docx)$/i) !== null;
};

const validateDate = (date) => {
    const currentDate = new Date();
    const enteredDate = new Date(date);
    if(enteredDate > currentDate) {
        return validateDate();

    }
};



