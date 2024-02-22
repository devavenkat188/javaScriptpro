
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('employeeForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document .getElementById('lastName')
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const date = document.getElementById('date').value;
        const position = document.getElementById('position').value;
        const address = document.getElementById('address').value;
        const experience = document.getElementById('experience').value;
        

        function validateFirstName(name) {
            return /^[a-zA-Z\s]+$/.test(name);
        if (!validateFirstName(firstName)) {
            alert('Please enter a valid full name.');
            return;
        }
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!validatePhoneNumber(phoneNumber)) {
            alert('Please enter a valid phone number.');
            return;
        }

        if (!validateSalary(salary)) {
            alert('Please enter a valid salary.');
            return;
        }

        // If all validations pass, you can proceed with form submission or further processing
        alert('Form submitted successfully!');
        form.reset(); // Optional: Reset the form after submission
    });

    

    function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function validatePhoneNumber(phoneNumber) {
        return /^\d{10}$/.test(phoneNumber);
    }

    function validateSalary(salary) {
        return !isNaN(salary) && parseInt(salary) > 0;
    }
});

