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

        // Inside the form submission handler, after validating inputs
       /* form.addEventListener('submit', function(e) {
            if (!validateInputs()) {
                e.preventDefault();
            } else {
                const formDataArray = []; // Initialize an empty array to store form data
                const formDataObject = {
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
                formDataArray.push(formDataObject); // Push the object to the array
                localStorage.setItem('formDataArray', JSON.stringify(formDataArray)); // Store the array in local storage
            }
        });
        */
            // Convert the formData object to a JSON string
            const formDataJSON = JSON.stringify(formData);
    
            // Store the JSON string in local storage
            localStorage.setItem('formData', formDataJSON);
           /* localStorage.setItem('firstName',firstNameVal);
            localStorage.setItem('lastName',lastNameVal);
            localStorage.setItem('email',emailVal);
            localStorage.setItem('phoneNumber',phoneNumberVal);
            localStorage.setItem('date',dateVal);
            localStorage.setItem('position',positionVal);
            localStorage.setItem('address',addressVal);
            localStorage.setItem('experience',experienceVal);
            localStorage.setItem('select',selectVal);
            localStorage.setItem('cv',fileVal);
            localStorage.setItem('box',boxVal);
            */

        // Retreiving stored data & using it for calculation:
       /* const form = localStorage.setItem('formData',formDataJSON);
        const fName = localStorage.setItem('firstName',firstNameVal);
        const lName = localStorage.setItem('lastName',lastNameVal);
        const mail = localStorage.setItem('email',emailVal);
        const phNumber = localStorage.setItem('phoneNumber',phoneNumberVal);
        const dob = localStorage.setItem('date',dateVal);
        const pos = localStorage.setItem('position',positionVal);
        const add = localStorage.setItem('address',addressVal);
        const exp = localStorage.setItem('experience',experienceVal);
        const dept = localStorage.setItem('select',selectVal);
        const file = localStorage.setItem('cv',fileVal);
        const checkBox = localStorage.setItem('box',boxVal);
        

        var namef, namel, mailid, pNumber, birth, posit, addre, exper, depart;
        namef = "Devashankar";
        namel = "V";
        mailid = "devavenkat188@gmail.com";
        pNumber = 9944978592;
        birth = "1999-05-01";
        posit = "Software";
        addre = "Salem";
        exper = 1;
        depart = "IT";

        if(namef == fName && namel == lName) {
            alert("Data Collected Successfully !");
        } else {
            alert("Data Not Matched");
        }
    */
       /*     sessionStorage.setItem('firstName',firstNameVal);
            sessionStorage.setItem('lastName',lastNameVal);
            sessionStorage.setItem('email',emailVal);
            sessionStorage.setItem('phoneNumber',phoneNumberVal);
            sessionStorage.setItem('date',dateVal);
            sessionStorage.setItem('position',positionVal);
            sessionStorage.setItem('address',addressVal);
            sessionStorage.setItem('experience',experienceVal);
            sessionStorage.setItem('select',selectVal);
            sessionStorage.setItem('cv',fileVal);
            sessionStorage.setItem('box',boxVal);
            */
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

$(document).ready(function() {
    const storedFormData = localStorage.getItem('formDataArray');

    // Check if formData exists in localStorage and is not null
    if (storedFormData) {
        let formDataArray = JSON.parse(storedFormData);
        formDataArray = [storedFormData];

        // Check if formDataArray is an array
        if (Array.isArray(formDataArray)) {
            // Initialize DataTable with the formDataArray
            $('#formDataTable').DataTable({
                data: [formDataArray],
                columns: [
                    {data:'firstName', title:'First Name'},
                    {data:'lastName', title:'Last Name'},
                    {data:'email', title:'Email'},
                    {data:'phoneNumber', title:'Phone Number'},
                    {data:'date', title:'Date'},
                    {data:'position', title:'Position'},
                    {data:'address', title:'Address'},
                    {data:'experience', title:'Experience'},
                    {data:'select', title:'Department'},
                    {data:'cv', title:'File'},
                    {data:'box', title:'Check Box'}
                ]
            });
        } else {
           console.error('Error parsing form data: Data retrieved from localStorage is not an array');
        }
    } else {
        console.log('No form data found in localStorage.');
    }

    const form = document.getElementById("form");

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let formDataArray = [];

        // Retrieve form elements
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const phoneNumber = document.getElementById('phoneNumber');
        const date = document.getElementById('date');
        const position = document.getElementById('position');
        const address = document.getElementById('address');
        const experience = document.getElementById('experience');
        const select = document.getElementById('select');
        const cv = document.getElementById('cv');
        const box = document.getElementById('box');

        // Push form data into formDataArray
        formDataArray.push({
            key: 'firstName',
            value: firstName.value.trim()
        });
        formDataArray.push({
            key: 'lastName',
            value: lastName.value.trim()
        });
        formDataArray.push({
            key: 'email',
            value: email.value.trim()
        });
        formDataArray.push({
            key: 'phoneNumber',
            value: phoneNumber.value.trim()
        });
        formDataArray.push({
            key: 'date',
            value: date.value.trim()
        });
        formDataArray.push({
            key: 'position',
            value: position.value.trim()
        });
        formDataArray.push({
            key: 'address',
            value: address.value.trim()
        });
        formDataArray.push({
            key: 'experience',
            value: experience.value.trim()
        });
        formDataArray.push({
            key: 'select',
            value: select
        });
        formDataArray.push({
            key: 'cv',
            value: cv.value.trim()
        });
        formDataArray.push({
            key: 'box',
            value: box.checked ? 'checked' : 'unchecked'
        });

        // Store formDataArray in localStorage
        localStorage.setItem('formDataArray', JSON.parse(formDataArray));
    });
});


/*
$(document).ready(function() {
    const storedFormData = localStorage.getItem('formData');

    // Check if formData exists in localStorage and is not null
    if (storedFormData) {
        let formDataArray = JSON.parse(storedFormData);
        formDataArray = [storedFormData];

        // Check if formDataArray is an array
        if (Array.isArray(formDataArray)) {
            // Initialize DataTable with the formDataArray
            $('#formDataTable').DataTable({
                data: [formDataArray],
                columns: [
                    {data:'firstName', title:'First Name'},
                    {data:'lastName', title:'Last Name'},
                    {data:'email', title:'Email'},
                    {data:'phoneNumber', title:'Phone Number'},
                    {data:'date', title:'Date'},
                    {data:'position', title:'Position'},
                    {data:'address', title:'Address'},
                    {data:'experience', title:'Experience'},
                    {data:'select', title:'Department'},
                    {data:'cv', title:'File'},
                    {data:'box', title:'Check Box'}
                ]
            });
        } else {
           console.error('Error parsing form data: Data retrieved from localStorage is not an array');
        }
    } else {
        console.log('No form data found in localStorage.');
    }

     //const form = document.getElementById("form");

    form.addEventListener('submit', function(e) {
        if (!validateInputs()) {
            e.preventDefault();
        } else {
            // Store formDataArray directly after parsing
            localStorage.setItem('formData', storedFormData);
        } 
        formDataArray.push({
            key: 'firstName',
            value: firstName.value.trim()
        });
        formDataArray.push({
            key: 'lastName',
            value: lastName.value.trim()
        });
        formDataArray.push({
            key: 'email',
            value: email.value.trim()
        });
        formDataArray.push({
            key: 'phoneNumber',
            value: phoneNumber.value.trim()
        });
        formDataArray.push({
            key: 'date',
            value: date.value.trim()
        });
        formDataArray.push({
            key: 'position',
            value: position.value.trim()
        });
        formDataArray.push({
            key: 'address',
            value: address.value.trim()
        });
        formDataArray.push({
            key: 'experience',
            value: experience.value.trim()
        });
        formDataArray.push({
            key: 'select',
            value: select.value.trim()
        });
        formDataArray.push({
            key: 'cv',
            value: cv.value.trim()
        });
        formDataArray.push({
            key: 'box',
            value: box.checked ? 'checked' : 'unchecked'
        });
        const formDataArrayJSON = JSON.parse(formDataArray);
        localStorage.setItem('formDataArray', formDataArrayJSON);
    }); 

});
*/

// Your other functions (e.g., validateInputs) go here

/*
form.addEventListener('submit', function(e) {
    if(!validateInputs()) {
        e.preventDefault();
        return;
    }

$(document).ready(function() {
    const storedFormData = localStorage.getItem('formData');

    // Check if formData exists in localStorage and is not null
    if (storedFormData) {
        let formDataArray = JSON.parse(storedFormData);

        // Check if formDataArray is an array
        if (Array.isArray(formDataArray)) {
            // Initialize DataTable with the formDataArray
            $('#formDataTable').DataTable({
                data: [formDataArray],
                columns: [
                    {data:'firstName', title:'First Name'},
                    {data:'lastName', title:'Last Name'},
                    {data:'email', title:'Email'},
                    {data:'phoneNumber', title:'Phone Number'},
                    {data:'date', title:'Date'},
                    {data:'position', title:'Position'},
                    {data:'address', title:'Address'},
                    {data:'experience', title:'Experience'},
                    {data:'select', title:'Department'},
                    {data:'cv', title:'File'},
                    {data:'box', title:'Check Box'}
                ]
            });
        } else {
            console.error('Error parsing form data: Data retrieved from localStorage is not an array');
            // Initialize DataTable with an empty array as fallback
            $('#formDataTable').DataTable({
                data: [formDataArray],
                columns: [
                    {data:'firstName', title:'First Name'},
                    {data:'lastName', title:'Last Name'},
                    {data:'email', title:'Email'},
                    {data:'phoneNumber', title:'Phone Number'},
                    {data:'date', title:'Date'},
                    {data:'position', title:'Position'},
                    {data:'address', title:'Address'},
                    {data:'experience', title:'Experience'},
                    {data:'select', title:'Department'},
                    {data:'cv', title:'File'},
                    {data:'box', title:'Check Box'}
                ]
            });
        }
    } else {
        console.log('No form data found in localStorage.');
    }
});
    const formDataArrayJSON = JSON.parse(formDataArray);

    localStorage.setItem('formData', formDataArrayJSON);
});
*/


/* $(document).ready(function() {
    const storedFormData = localStorage.getItem('formData');
    
    if(storedFormData) {
        const formDataArray = JSON.parse(storedFormData);
           */
        // localStorage.setItem('formData', JSON.stringify(formDataArray));

        /* $(document).ready(function() {
            const storedFormData = localStorage.getItem('formData');
                       
                let formDataArray = JSON.parse(storedFormData);
                    formDataArray = [storedFormData];
                    //formDataArray = JSON.parse(storedFormData);
                    // formDataArray = [storedFormData];
                $('#formDataTable').DataTable({
                    data: [formDataArray],
                    columns: [
                        {data:'firstName', title:'First Name'},
                        {data:'lastName', title:'Last Name'},
                        {data:'email', title:'Email'},
                        {data:'phoneNumber', title:'Phone Number'},
                        {data:'date', title:'Date'},
                        {data:'position', title:'Position'},
                        {data:'address', title:'Address'},
                        {data:'experience', title:'Experience'},
                        {data:'select', title:'Department'},
                        {data:'cv', title:'File'},
                        {data:'box', title:'Check Box'}
                    ]
                });
    
        });
        
     */   
    /*    $('#formDataTable').DataTable({
            
            data: [formDataArray],
            columns: [
                {data:'firstName',title:'First Name'},
                {data:'lastName',title:'Last Name'},
                {data:'email',title:'Email'},
                {data:'phoneNumber',title:'Phone Number'},
                {data:'date',title:'Date'},
                {data:'position',title:'Position'},
                {data:'address',title:'Address'},
                {data:'experience',title:'Experience'},
                {data:'select',title:'Department'},
                {data:'cv',title:'File'},
                {data:'box',title:'Check Box'}
            ]
            
        });
        
    }
    
}); 
*/


// Inside the form submission handler, after validating inputs
/*
if (success) {
    const formDataArray = []; // Initialize an empty array to store form data
    const formDataObject = {
        firstName: firstNameVal,
        lastName: lastNameVal,
        email: emailVal,
        phoneNumber: phoneNumberVal,
        position: positionVal,
        address: addressVal,
        experience: experienceVal,
        cv: cvVal, // Assuming cvVal is the file path obtained from cv input
        date: dateVal,
        box: boxVal,
        select: selectVal
    };
    formDataArray.push(formDataObject); // Push the object to the array
    localStorage.setItem('formDataArray', JSON.stringify(formDataArray)); // Store the array in local storage
}
*/


/*
$(document).ready(function() {
    const storedFormData = localStorage.getItem('formData');

    if (storedFormData) {
        const formDataArray = JSON.parse(storedFormData);

        // Create DataTable
        $('#example').DataTable({
            data: formDataArray,
            columns: [
                { data: 'firstName', title: 'First Name' },
                { data: 'lastName', title: 'Last Name' },
                { data: 'email', title: 'Email' },
                { data: 'phoneNumber', title: 'Phone Number' },
                { data: 'date', title: 'Date' },
                { data: 'position', title: 'Position' },
                { data: 'address', title: 'Address' },
                { data: 'experience', title: 'Experience' },
                { data: 'select', title: 'Select' },
                { data: 'cv', title: 'CV' },
                { data: 'box', title: 'Box' }
            ]
        });
    }
});


form.addEventListener('submit', function(e) {
    if(!validateInputs()) {
        e.preventDefault();
        return;
    }

    const formDataArray = [];

    formDataArray.push({
        key: 'firstName',
        value: firstName.value.trim()
    });
    formDataArray.push({
        key: 'lastName',
        value: lastName.value.trim()
    });
    formDataArray.push({
        key: 'email',
        value: email.value.trim()
    });
    formDataArray.push({
        key: 'phoneNumber',
        value: phoneNumber.value.trim()
    });
    formDataArray.push({
        key: 'date',
        value: date.value.trim()
    });
    formDataArray.push({
        key: 'position',
        value: position.value.trim()
    });
    formDataArray.push({
        key: 'address',
        value: address.value.trim()
    });
    formDataArray.push({
        key: 'experience',
        value: experience.value.trim()
    });
    formDataArray.push({
        key: 'select',
        value: select.value.trim()
    });
    formDataArray.push({
        key: 'cv',
        value: cv.value.trim()
    });
    formDataArray.push({
        key: 'box',
        value: box.checked ? 'checked' : 'unchecked'
    });

    const formDataArrayJSON = JSON.stringify(formDataArray);

    localStorage.setItem('formData', formDataArrayJSON);
});

$(document).ready(function() {
const storedFormData = localStorage.getItem('formData');
if(storedFormData) {
    const formDataArray = JSON.parse(storedFormData);

    const tableBody = $('#table-body');

    formDataArray.forEach(function (item) {
            const row = '<tr><td>' +item.key+ '</td><td>' +item.value+ '</td></tr>';
            tableBody.append(row);
    });
    $('#formDataTable').DataTable();
}
}); */

/* form.addEventListener('submit', function(e) {
    if (!validateInputs()) {
        e.preventDefault();
        return;
    }

    const formDataArray = []; 

    
    formDataArray.push({
        key: 'firstName',
        value: firstName.value.trim()
    });
    formDataArray.push({
        key: 'lastName',
        value: lastName.value.trim()
    });
    formDataArray.push({
        key: 'email',
        value: email.value.trim()
    });
    formDataArray.push({
        key: 'phoneNumber',
        value: phoneNumber.value.trim()
    });
    formDataArray.push({
        key: 'date',
        value: date.value.trim()
    });
    formDataArray.push({
        key: 'position',
        value: position.value.trim()
    });
    formDataArray.push({
        key: 'address',
        value: address.value.trim()
    });
    formDataArray.push({
        key: 'experience',
        value: experience.value.trim()
    });
    formDataArray.push({
        key: 'select',
        value: select.value.trim()
    });
    formDataArray.push({
        key: 'cv',
        value: cv.value.trim()
    });
    formDataArray.push({
        key: 'box',
        value: box.checked ? 'checked' : 'unchecked'
    });

    // Convert the array to a JSON string
    const formDataArrayJSON = JSON.stringify(formDataArray);

    localStorage.setItem('formData', formDataArrayJSON);
});

*/


/* function valid() {
    const firstNameVal = firstName.value.trim();
    const lastNameVal = lastName.value.trim();
    const emailVal = email.value();
    const phoneNumberVal = phoneNumber.value.trim();
    const positionVal = position.value.trim()
    const addressVal = address.value.trim();
    const experienceVal = experience.value.trim();
    const fileVal = cv.value.trim();
    const dateVal = date.value.trim();
    const boxVal = box.value.trim();
    const selectVal = select.value.trim();
    let value = true;

    if(valid) {
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

    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem('formData', formDataJSON);
}
    return valid;
}
*/

// for storing the data in local storage:
/*const fName = localStorage.setItem("firstName", firstName).value;
const lName = localStorage.setItem("lastName", lastName).value;
const mail = localStorage.setItem("email", email).value;
const phoneNum = localStorage.setItem("phoneNumber", phoneNumber).value;
const dob = localStorage.setItem("date", date).value;
const pos = localStorage.setItem("position", position).value;
const add = localStorage.setItem("address", address).value;
const yoe = localStorage.setItem("experience", experience).value;
const dept = localStorage.setItem("select", select).value;
const file = localStorage.setItem("cv", cv).value;
*/






