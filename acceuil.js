document.addEventListener("DOMContentLoaded", () => {
    // Animation de défilement
    const sections = document.querySelectorAll(".fade-in");
    
    const revealSections = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    };
    
    window.addEventListener("scroll", revealSections);
    revealSections();

    // Gestion du formulaire de contact
    const form = document.getElementById("contact-form");
    const message = document.getElementById("form-message");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        message.classList.remove("hidden");
        form.reset();
        setTimeout(() => {
            message.classList.add("hidden");
        }, 3000);
    });
});
