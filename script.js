document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('#navbar a[href^="#"]');
    
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth',
            });
        });
    });
});
