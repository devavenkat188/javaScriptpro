document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('btn');
    var cookie = document.getElementById('cookie');

    button.addEventListener('click', () => {
        cookie.classList.remove('active');
        localStorage.setItem("Deva","true");
    });

    setTimeout(() => {
        if(!localStorage.getItem("Deva")) {
        cookie.classList.add('active');
        }
    }, 2000);
});


