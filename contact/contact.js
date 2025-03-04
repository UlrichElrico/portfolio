document.addEventListener("DOMContentLoaded", function() {
    console.log("contact.js est bien chargé !");

    // Vérification de l'existence de la section contact
    const contactSection = document.querySelector(".fade-in");
    if (!contactSection) {
        console.error("Erreur : L'élément .fade-in n'existe pas !");
        return;
    }

    function handleScroll() {
        if (window.scrollY > 100) {
            contactSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Gestion du formulaire de contact
    const form = document.getElementById("contact-form");
    const message = document.getElementById("form-message");

    if (!form || !message) {
        console.error("Erreur : Formulaire ou message introuvable !");
        return;
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        setTimeout(() => {
            message.classList.remove("hidden");
            form.reset();
            setTimeout(() => {
                message.classList.add("hidden");
            }, 3000);
        }, 500);
    });
});

