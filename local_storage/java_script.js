var cookie = document.getElementById('cookie');
var button = document.getElementById('btn');

button.addEventListener('click', () => {
    console.log("Hello World");
});

// Get the button element
var button = document.getElementById('btn'); 

// Add click event listener to the button
button.addEventListener('click', function() {
    // Store a value in local storage
    localStorage.setItem('cookieAccepted', 'true');
    
    // Optionally, you can add some visual feedback or perform other actions here
    console.log("Cookies accepted");
});
