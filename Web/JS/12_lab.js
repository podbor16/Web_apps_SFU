document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function () {
        document.querySelectorAll('h2').forEach(function (h2) {
            $(h2.nextElementSibling).slideUp('block');
        });
    }, 5000);

    document.querySelectorAll('h2').forEach(function (h2) {
        h2.addEventListener('click', function () {
            $(h2.nextElementSibling).slideToggle();
        });
    });
});