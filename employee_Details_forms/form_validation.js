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
const box = document.getElementById("box");
const select = document.getElementById("dept");
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
    let success = true;
   // const boxVal = box.value.trim();
   // const selectVal = select.value.trim();

    if(firstNameVal === ''){
        success = false;
        setError(firstName, "FirstName is Required");
    } else if (firstNameVal.length < 4) {
        success = false;
        setError(firstName, "FirstName should be minimum 4 characters");
    } else if(firstNameVal.length > 14) {
        success = false;
        setError(firstName, "FirstName should not exceeds to 14 characters");
    } else {
        firstName.value = firstNameCap(firstNameVal);
        setSuccess(firstName);
    }

    if(lastNameVal === ''){
        success = false;
        setError(lastName, "LastName is Required");
    } else if(!validateLastName(lastNameVal)) {
        success = false;
        setError(lastName, "LastName will be in uppercase & 1 Character Only");
    }
    else {
        setSuccess(lastName);
    }

    if(emailVal === ''){
        success = false;
        setError(email, "Email is Required");
    } else if(!validateEmail(emailVal)) {
        success = false;
        setError(email, "Please Enter a valid E-mail id");
    }
    else {
        setSuccess(email);
    }

    if(phoneNumberVal === ''){
        success = false;
        setError(phoneNumber, "Phone Number is Required");
    } else if (!validatePhoneNumber(phoneNumberVal)) {
        success = false;
        setError(phoneNumber, "Phone Number must have 10 numbers");
    } else {
        setSuccess(phoneNumber);
    }

    if(positionVal === ''){
        success = false;
        setError(position, "Position is required");
    }
    else if(positionVal.length > 15) {
        success = false;
        setError(position, "Position should not exceeds 15 charatcers");
    } else if(positionVal.length <= 1) {
        success = false;
        setError(position, "Position will be more than 1 character");
    } else {
        position.value = firstPosition(positionVal);
        setSuccess(position);
    }

    if(addressVal === '') {
        success = false;
        setError(address, "Address is Required.");
    } else if(addressVal.length > 50) {
        success = false;
        setError(address, "Address should not exceed 50 character");
    } else if(addressVal.length <= 4) {
        success = false;
        setError(address, "Address will be more than 5 characters.")
    } else {
        address.value = addressCap(addressVal);
        setSuccess(address);
    }

    if(experienceVal === '') {
        success = false;
        setError(experience, "Experience is Required.");
    } else if(!validateExperience(experienceVal)) {
        success = false;
        setError(experience, "Experience range is between 1 to 15");
    } else {
        setSuccess(experience);
    }

    if(fileVal === ''){
        success = false;
        setError(cv, "Please select the file");
    } else if(!validateCV(fileVal)) {
        success = false;
        setError(cv, "Unsupported Format");
    }else {
        setSuccess(cv);
    }

    if(dateVal === ''){
        success = false;
        setError(date, "Please select the Date");
    } else if(!validateDate(dateVal)) {
        success = false;
        setError(date, "Please enter the correct dob of age greater than 18");
    } else {
        setSuccess(date);
    }
    
    if(!validateCheckBox(box)) {
        success = false;
        setError(box, "Please select the CheckBox");
    }
    else {
        setSuccess(box);
    }

    if(!validateDept(select)) {
        success = false;
        setError(select, "Please select the Department");
    } else {
        setSuccess(select);
    } 
    return success;
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
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
    
}
const firstNameCap = function(firstName) {
    let str = firstName.split(" ");
    for(let i=0;i<str.length;i++) {
        str[i] = str[i].charAt(0).toUpperCase()+str[i].substring(1);
    }
    return str.join(" ");
};
const firstPosition = (position) => {
    let str = position.split(" ");
    for(let i=0;i<str.length;i++) {
        str[i] = str[i].charAt(0).toUpperCase()+str[i].substring(1);
    }
    return str.join(" ");
};
const addressCap = (address) => {
    let str = address.split(" ");
    for(let i=0;i<str.length;i++) {
        str[i] = str[i].charAt(0).toUpperCase()+str[i].substring(1);
    }
    return str.join(" ");
};
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
    return String(cv).match(/\.(pdf|doc|docx)$/i) !== null;
};

const validateDate = (date) => {
    const currentDate = new Date();
    const enteredDate = new Date(date);
    const ageDifference = currentDate.getFullYear() - enteredDate.getFullYear();
    if(ageDifference < 18) {
        return false;

    }
    else {
        return true;
    }
};

 const validateCheckBox = (box) => {
    return box.checked;
};

const validateDept = (select) => {
    return select.options[select.selectedIndex].value !== "";
};





