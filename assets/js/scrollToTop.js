document.addEventListener('DOMContentLoaded', function () {
    // Get the "Scroll to Top" button
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show the button after scrolling down 400px
    window.onscroll = function () {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // Scroll to the top of the document when the button is clicked
    scrollToTopBtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});