
let formData;

const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const position = document.getElementById("position");
const address = document.getElementById("address");
const experience = document.getElementById("experience");
const cv = document.getElementById("formFileSm"); 
const box = document.getElementById("box");
const date = document.getElementById("date");
const exampleDataList = document.getElementById("exampleDataList"); 

form.addEventListener('submit', function(e) {
    
    e.preventDefault(); 

    if (!validateInputs()) {
        return; 
    }

    $(document).ready(function(){
        $('#formTable').DataTable();
    })

    // Populate formData object when form is submitted
    formData = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        email: email.value.trim(),
        phoneNumber: phoneNumber.value.trim(),
        position: position.value.trim(),
        address: address.value.trim(),
        experience: experience.value.trim(),
        cv: cv.value.trim(),
        box: box.checked,
        exampleDataList: exampleDataList.value.trim()
    };

    // Store formData in local storage
    storeFormData();

    // Display form data in table
    displayFormData();

    // Optionally, reset the form after submission
    form.reset();
});

function storeFormData() {
    
    let formDataArray = JSON.parse(localStorage.getItem('formData'));
    
    if (!Array.isArray(formDataArray)) {
        
        formDataArray = [];
    }   
    formDataArray.push(formData);
    localStorage.setItem('formData', JSON.stringify(formDataArray));
    
}

function displayFormData() {

    let formDataArray = JSON.parse(localStorage.getItem('formData')) || [];

    const tableBody = document.getElementById("formTableBody");
    tableBody.innerHTML = '';
    if (Array.isArray(formDataArray)) {
        formDataArray.forEach(formData => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${formData.firstName || ''}</td>
                <td>${formData.lastName || ''}</td>
                <td>${formData.email || ''}</td>
                <td>${formData.phoneNumber || ''}</td>
                <td>${formData.position || ''}</td>
                <td>${formData.address || ''}</td>
                <td>${formData.experience || ''}</td>
                <td>${formData.cv || ''}</td>
                <td>${formData.box ? 'Checked' : 'Unchecked'}</td>
                <td>${formData.exampleDataList || ''}</td>
            `;
            tableBody.appendChild(row);
        });
    } else {
        console.error("Form data retrieved from local storage is not in the expected format.");
        
        localStorage.removeItem('formData');
    }
}


// Validation function
function validateInputs() {
    const firstNameVal = firstName.value.trim();
    const lastNameVal = lastName.value.trim();
    const emailVal = email.value.trim();
    const phoneNumberVal = phoneNumber.value.trim();
    const positionVal = position.value.trim();
    const addressVal = address.value.trim();
    const experienceVal = experience.value.trim();
    const fileVal = cv.value.trim();
    const boxVal = box.checked;
    const selectVal = exampleDataList.value.trim();
    const dateVal = date.value.trim();

    let success = true;


    if (success) {
        // Create an object to store all the form data
        const formData = {
            firstName: firstNameVal,
            lastName: lastNameVal,
            email: emailVal,
            phoneNumber: phoneNumberVal,
            position: positionVal,
            address: addressVal,
            experience: experienceVal,
            cv: fileVal,
            date: dateVal,
            box: boxVal,
            exampleDataList: selectVal
        }; 

        // const formDataJSON = JSON.stringify(formData);


        // localStorage.setItem('formData', formDataJSON);
    } 

     if (!firstName || !lastName || !email || !phoneNumber || !position || !address || !experience || !cv || !date || !box || !exampleDataList) {
        console.error('Invalid elements detected.');
        return false;
    } 
        // If all inputs are valid, store the data in local storage

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

    if(!validateDept(exampleDataList)) {
        success = false;
        setError(exampleDataList, "Please select the Department");
    } else {
        setSuccess(exampleDataList);
    } 

    return success;
}
function setError(element, message) {
    if (!element) {
        console.error('Invalid element:', element);
        return;
    }

    const inputGroup = element.parentElement;
    if (!inputGroup) {
        console.error('Parent element not found for input:', element);
        return;
    }

    const errorElement = inputGroup.querySelector('.error');
    if (errorElement) {
        errorElement.innerText = message;
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success');
    } else {
        console.error('Error element not found for input:', element);
    }
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
const validateDept = (exampleDataList) => {
    const deptValue = exampleDataList.value.trim();
    return deptValue !== "";
};



