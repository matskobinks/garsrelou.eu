document.addEventListener('DOMContentLoaded', function() {
    // Cache les sélecteurs fréquemment utilisés
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Gestion du menu avec délégation d'événements
    menuToggle?.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Utilisation de la délégation d'événements pour les clics
    document.addEventListener('click', function(e) {
        if (menuToggle && !menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Création et gestion des boutons avec une seule fonction
    function createButton(className, innerHTML) {
        const button = document.createElement('button');
        button.className = className;
        button.innerHTML = innerHTML;
        body.appendChild(button);
        return button;
    }

    // Gestion du bouton retour
    if (location.pathname.match(/\/(tp|missions|php)/)) {
        const backButton = createButton('back-button', 'Retour');
        backButton.addEventListener('click', () => {
            if (location.pathname.match(/\/(tp|missions|php)\/[^/]+\//)) {
                location.href = '../index.html';
            } else {
                location.href = '../../index.html';
            }
        });
    }

    // Gestion du bouton scroll-top avec throttling
    const scrollTop = createButton('scroll-top', '↑');
    let isScrolling = false;

    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                scrollTop.classList.toggle('visible', window.scrollY > 300);
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}); 