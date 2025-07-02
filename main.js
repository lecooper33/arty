
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