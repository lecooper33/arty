// --- Nouveau menu mobile moderne ---
    const mobileMenu = document.getElementById('mobile-menu');
    const menuList = document.querySelector('.menu ul');
    if (mobileMenu && menuList) {
        mobileMenu.addEventListener('click', () => {
            menuList.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        // Fermer le menu mobile au clic sur un lien
        menuList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuList.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }

    // Gestion de l'envoi du formulaire de contact avec Formspree
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        // Création de la snackbar si elle n'existe pas
        let snackbar = document.querySelector('.form-snackbar');
        if (!snackbar) {
            snackbar = document.createElement('div');
            snackbar.className = 'form-snackbar';
            document.body.appendChild(snackbar);
        }
        function showSnackbar(message, type = 'success') {
            snackbar.textContent = message;
            snackbar.className = 'form-snackbar ' + type;
            snackbar.style.display = 'block';
            setTimeout(() => {
                snackbar.style.display = 'none';
            }, 3500);
        }
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi...';
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                if (response.ok) {
                    showSnackbar('Votre message a bien été envoyé !', 'success');
                    contactForm.reset();
                } else {
                    showSnackbar("Une erreur s'est produite lors de l'envoi. Veuillez réessayer.", 'error');
                }
            } catch (error) {
                showSnackbar("Erreur réseau. Veuillez vérifier votre connexion internet.", 'error');
            }
            submitBtn.disabled = false;
            submitBtn.textContent = 'Envoyer le message';
        });
    }