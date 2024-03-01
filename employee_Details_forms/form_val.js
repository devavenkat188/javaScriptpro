// Define formData variable outside of the event listener
let formData;

const form = document.getElementById("form");

// Get references to form inputs
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const position = document.getElementById("position");
const address = document.getElementById("address");
const experience = document.getElementById("experience");
const cv = document.getElementById("cv");
const box = document.getElementById("box");
const select = document.getElementById("dept");

// Add event listener to the form
form.addEventListener('submit', function(e) {
    // Prevent form submission if inputs are not valid
    e.preventDefault(); // Always prevent default behavior first

    if (!validateInputs()) {
        return; // Exit function if inputs are not valid
    }

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
        select: select.value.trim()
    };

    // Store formData in local storage
    storeFormData();

    // Display form data in table
    displayFormData();

    // Optionally, reset the form after submission
    form.reset();
});

/*
function storeFormData() {
    // Get existing form data array from local storage
    let formDataArray = JSON.parse(localStorage.getItem('formData'));

    // Check if formDataArray is null, undefined, or not an array
    if (!Array.isArray(formDataArray)) {
        // Initialize formDataArray as an empty array
        formDataArray = [];
    }
    
    // Push new form data to the array
    formDataArray.push(formData);
    // Update local storage with the updated form data array
    localStorage.setItem('formData', JSON.stringify(formDataArray));
} */

/* function storeFormData() {
    // Get existing form data array from local storage
    let formDataArray = JSON.parse(localStorage.getItem('formData'));
    
    
    if (!Array.isArray(formDataArray)) {
        // Initialize formDataArray as an empty array
        formDataArray = [];
    }
    
    // Determine the index position for the new form data
    const newIndex = formDataArray.length;

    // Set the new form data at the determined index position
    formDataArray[newIndex] = formData;

    localStorage.setItem('formData', JSON.stringify(formDataArray));

}
*/
/*
function storeFormData() {

    let formDataArray = JSON.parse(localStorage.getItem('formData'));
    let formDataArr = localStorage.setItem('formData',formDataArray);
    if (!Array.isArray(formDataArray)) {
        // Initialize formDataArray as an empty array
        formDataArray = [];
    }
    formDataArr = JSON.parse(JSON.stringify(formDataArray));
    formDataArr.push(formData);

}
*/

/* function storeFormData() {
    // Get existing form data array from local storage
    let formDataArray = JSON.parse(localStorage.getItem('formData'));
    if (!Array.isArray(formDataArray)) {
        
        formDataArray = [[]];
    } 

    const newIndex = formDataArray.length;
    formDataArray[newIndex] = formData;
    
    localStorage.setItem('formData', JSON.stringify(formDataArray));
    
    formDataArray.push(formData);
} */

/*function storeFormData() {
    // Get existing form data array from local storage
    let formDataArray = JSON.parse(localStorage.getItem('formData'));

    // Check if formDataArray is null or undefined
    if (!formDataArray) {
        // If formDataArray is null or undefined, initialize it as an empty array
        formDataArray = [];
    } else if (formDataArray[0]) {
        // If the first index is filled, move to the next index position
        formDataArray = [formDataArray[0]];
    }
    
    // Push new form data to the array
    formDataArray.push(formData);

    // Update local storage with the updated form data array
    localStorage.setItem('formData', JSON.stringify(formDataArray));
}
*/
/*
function storeFormData() {
    // Get existing form data array from local storage
    let formDataArray = JSON.parse(localStorage.getItem('formData'));

    // Check if formDataArray is null, undefined, or not an array
    if (!Array.isArray(formDataArray)) {
        // Initialize formDataArray as an empty array
        formDataArray = [formDataArray];
    } else if (formDataArray.length > 0 && formDataArray[formDataArray.length - 1]) {
        
        formDataArray.push({});
    }
    
    
    formDataArray[formDataArray.length - 1] = formData;

    // Update local storage with the updated form data array
    localStorage.setItem('formData', JSON.stringify(formDataArray));
}
*/
/* 
function storeFormData() {
    // Get existing form data array from local storage
    let formDataArray = JSON.parse(localStorage.getItem('formData'));

    // Check if formDataArray is null, undefined, or not an array
    if (!Array.isArray(formDataArray)) {
        // Initialize formDataArray as an empty array
        formDataArray = [];
    }
    
    // Determine the index position for the new form data
    const newIndex = formDataArray.length;

    // Set the new form data at the determined index position
    formDataArray[newIndex] = formData;

    // Update local storage with the updated form data array
    localStorage.setItem('formData', JSON.stringify(formDataArray));
}
*/

function storeFormData() {
    
    let formDataArray = JSON.parse(localStorage.getItem('formData'));
    
    if (!Array.isArray(formDataArray)) {
        
        formDataArray = [formData];
    } 
    formDataArray.push(formData);
    localStorage.setItem('formData', JSON.stringify(formDataArray));
    
}
/*
// Function to initialize the form data array if it's null or undefined
function initializeFormDataArray() {
    let formDataArray = JSON.parse(localStorage.getItem('formData'));
    if (!formDataArray) {
        formDataArray = [];
    }
    return formDataArray;
}

// Function to store form data in local storage
function storeFormData() {
    // Get existing form data array from local storage or initialize it
    let formDataArray = initializeFormDataArray();
    
    // Push new form data to the array
    // formDataArray.push(formData);
    formDataArray = [...formDataArray, formData]; // Ensure formDataArray is an array

    // Update local storage with the updated form data array
    localStorage.setItem('formData', JSON.stringify(formDataArray));
}
*/


function displayFormData() {
    // Get form data array from local storage
    let formDataArray = JSON.parse(localStorage.getItem('formData')) || [];

    const tableBody = document.getElementById("formDataTableBody");

    // Clear existing table rows
    tableBody.innerHTML = '';

    // Check if formDataArray is an array
    if (Array.isArray(formDataArray)) {
        // Loop through form data array and append rows to the table
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
                <td>${formData.select || ''}</td>
            `;
            tableBody.appendChild(row);
        });
    } else {
        console.error("Form data retrieved from local storage is not in the expected format.");
        // Handle the case when the retrieved data is not in the expected format
        // For example, you can reset the local storage key 'formData'
        localStorage.removeItem('formData');
    }
}

/*localStorage.getItem('formData',JSON.stringify([...JSON.parse(localStorage.getItem('formData') || "[]"),
    {firstName: inputform.value},
])
);

inputform.value = "";
*/

// Function to validate form inputs
function validateInputs() {
    // Validation logic goes here
    // ...
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
    const boxVal = box.value.trim();
    const selectVal = select.value.trim();


    
    
        // If all inputs are valid, store the data in local storage
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
                select: selectVal
            }; 

        
            // Convert the formData object to a JSON string
            const formDataJSON = JSON.stringify(formData);
    
            // Store the JSON string in local storage
            localStorage.setItem('formData', formDataJSON);
        } 
    

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


/*
localStorage.getItem('formData',JSON.stringify([...JSON.parse(localStorage.getItem('formData') || "[]"),
    {firstName: inputform.value},
])
); 

inputform.value = "";
*/
/*
function storeFormData(formData) {
    // Get existing form data array from local storage or initialize empty array
    let formDataArray = JSON.parse(localStorage.getItem('formData'));

    // Check if formDataArray is an array
    if (!Array.isArray(formDataArray)) {
        formDataArray = [];
    }

    // Push new form data to the array
    formDataArray.push(formData);

    // Update local storage with the updated form data array
    localStorage.setItem('formData', JSON.stringify(formDataArray));
}



function displayFormData() {
    // Get form data array from local storage
    let formDataArray = JSON.parse(localStorage.getItem('formData')) || [];

    console.log("formDataArray:", formDataArray); // Log formDataArray for debugging

    const tableBody = document.getElementById("formDataTableBody");

    // Clear existing table rows
    tableBody.innerHTML = '';

    // Check if formDataArray is an array
    if (Array.isArray(formDataArray)) {
        // Loop through form data array and append rows to the table
        formDataArray.forEach(formData => {
            if (formData !== null && typeof formData === 'object') { // Check if formData is not null and is an object
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
                    <td>${formData.select || ''}</td>
                `;
                tableBody.appendChild(row);
            } else {
                console.error("Form data object is not valid:", formData);
            }
        });
    } else {
        console.error("Form data retrieved from local storage is not in the expected format.");
        // Handle the case when the retrieved data is not in the expected format
        // For example, you can reset the local storage key 'formData'
        localStorage.removeItem('formData');
    }
}
*/









/*
// Function to display form data from local storage in a table
function displayFormData() {
    // Get form data array from local storage
    const formDataArray = JSON.parse(localStorage.getItem('formData')) || [];

    // Get reference to table body element
    const tableBody = document.getElementById("formDataTableBody");

    // Clear existing table rows
    tableBody.innerHTML = '';

    // Check if formDataArray is an array
    if (Array.isArray(formDataArray)) {
        // Loop through form data array and append rows to the table
        formDataArray.forEach(formData => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${formData.firstName}</td>
                <td>${formData.lastName}</td>
                <td>${formData.email}</td>
                <td>${formData.phoneNumber}</td>
                <td>${formData.position}</td>
                <td>${formData.address}</td>
                <td>${formData.experience}</td>
                <td>${formData.cv}</td>
                <td>${formData.box ? 'Checked' : 'Unchecked'}</td>
                <td>${formData.select}</td>
            `;
            tableBody.appendChild(row);
        });
    } else {
        console.error("Form data retrieved from local storage is not in the expected format.");
    }
}

// Call displayFormData function to initially populate the table
displayFormData();
*/

// Function to display form data from local storage in a table
/* function displayFormData() {
    // Get form data array from local storage
    const formDataArray = JSON.parse(localStorage.getItem('formData')) || [];

    // Get reference to table body element
    const tableBody = document.getElementById("formDataTableBody");

    // Clear existing table rows
    tableBody.innerHTML = '';

    // Loop through form data array and append rows to the table
    formDataArray.forEach(formData => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${formData.firstName}</td>
            <td>${formData.lastName}</td>
            <td>${formData.email}</td>
            <td>${formData.phoneNumber}</td>
            <td>${formData.position}</td>
            <td>${formData.address}</td>
            <td>${formData.experience}</td>
            <td>${formData.cv}</td>
            <td>${formData.box ? 'Checked' : 'Unchecked'}</td>
            <td>${formData.select}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Call displayFormData function to initially populate the table
displayFormData();
*/


/*
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

let formDataArray = JSON.parse(localStorage.getItem('formData')) || [];
    
    // Push new form data to the array
    formDataArray.push(formData);

    // Update local storage with the updated form data array
    localStorage.setItem('formData', JSON.stringify(formDataArray));


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
    const boxVal = box.value.trim();
    const selectVal = select.value.trim();


    
    
        // If all inputs are valid, store the data in local storage
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
                select: selectVal
            }; 

        
            // Convert the formData object to a JSON string
            const formDataJSON = JSON.stringify(formData);
    
            // Store the JSON string in local storage
            localStorage.setItem('formData', formDataJSON);
        } 
    

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




function displayFormData() {
    // Get form data array from local storage
    const formDataArray = JSON.parse(localStorage.getItem('formData')) || [];

    // Get reference to table body element
    const tableBody = document.getElementById("formDataTableBody");

    // Clear existing table rows
    tableBody.innerHTML = '';

    // Loop through form data array and append rows to the table
    formDataArray.forEach(formData => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${formData.firstName}</td>
            <td>${formData.lastName}</td>
            <td>${formData.email}</td>
            <td>${formData.phoneNumber}</td>
            <td>${formData.position}</td>
            <td>${formData.address}</td>
            <td>${formData.experience}</td>
            <td>${formData.cv}</td>
            <td>${formData.box ? 'Checked' : 'Unchecked'}</td>
            <td>${formData.select}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Call displayFormData function to initially populate the table
displayFormData();
*/