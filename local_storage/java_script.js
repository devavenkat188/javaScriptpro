document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('btn');
    var cookie = document.getElementById('cookie');

    button.addEventListener('click', () => {
        cookie.classList.remove('active');
    });

    setTimeout(() => {
        cookie.classList.add('active');
    }, 2000);
});


