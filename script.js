// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !document.querySelector(targetId)) return;
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            const headerHeight = document.getElementById('header') ? document.getElementById('header').offsetHeight : 80;
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });
    });

    // Formulaire de contact : pré-remplissage et sauvegarde
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        const nameInput = contactForm.querySelector('input[name="name"]');
        const emailInput = contactForm.querySelector('input[name="email"]');
        const phoneInput = contactForm.querySelector('input[name="phone"]');

        // Pré-remplir si données en localStorage
        if (localStorage.getItem('arty_name')) nameInput.value = localStorage.getItem('arty_name');
        if (localStorage.getItem('arty_email')) emailInput.value = localStorage.getItem('arty_email');
        if (localStorage.getItem('arty_phone')) phoneInput.value = localStorage.getItem('arty_phone');

        contactForm.addEventListener('submit', function(e) {
            // Sauvegarde dans le localStorage
            localStorage.setItem('arty_name', nameInput.value);
            localStorage.setItem('arty_email', emailInput.value);
            localStorage.setItem('arty_phone', phoneInput.value);

            // Laisser Formspree gérer l'envoi, puis vider le formulaire après soumission
            setTimeout(() => {
                contactForm.reset();
                // Re-remplir les champs sauvegardés
                nameInput.value = localStorage.getItem('arty_name');
                emailInput.value = localStorage.getItem('arty_email');
                phoneInput.value = localStorage.getItem('arty_phone');
            }, 1000);
        });
    }
});
