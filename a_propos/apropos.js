/* JS (script.js) */
document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector(".fade-in");
    function handleScroll() {
        if (window.scrollY > 100) {
            aboutSection.classList.add("visible");
        }
    }
    window.addEventListener("scroll", handleScroll);
});

