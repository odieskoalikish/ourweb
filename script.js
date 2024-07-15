document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
    setTimeout(function() {
        document.querySelector('.skeleton').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 2000); // Simulate loading time
});
