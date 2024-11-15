// Listen for scroll events on the window
window.addEventListener('scroll', function () {
    // Get the navbar, brand image, and nav links
    const navbar = document.querySelector('.navbar');
    const brandLogo = document.getElementById('brand-logo');
    const registerBtn = document.getElementById('register-btn');
    const navLinks = document.querySelectorAll('.nav-link');

    // Calculate 50vh (absolute value in pixels)
    const viewportHeightHalf = window.innerHeight * 0.3;

    // Check if the scroll has passed 50vh
    if (window.scrollY > viewportHeightHalf) {
        // Change the navbar background
        navbar.style.backgroundColor = 'white';  // Dark background
        navbar.style.transition = 'background-color 0.3s ease';

        // Change the brand logo
        brandLogo.src = '../assets/images/logo-3.png';  // Replace with alternate logo

        registerBtn.style.backgroundColor = '#ff5a5f';
        registerBtn.style.color = 'white';

        // Change nav link colors
        navLinks.forEach(link => {
            link.style.color = '#000';  // Black text
            link.style.transition = 'color 0.3s ease';
        });
    } else {
        // Reset navbar background
        navbar.style.backgroundColor = 'transparent';  // Default background

        // Reset the brand logo
        brandLogo.src = '../assets/images/logo-4.png';  // Original logo

        registerBtn.style.backgroundColor = 'white';
        registerBtn.style.color = '#ff5a5f';

        // Reset nav link colors
        navLinks.forEach(link => {
            link.style.color = '#fff';  // Original color (white)
        });
    }
});  