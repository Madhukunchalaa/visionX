// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenuCanvas = document.querySelector('.mobile-menu-canvas');
const mobileOverlay = document.querySelector('.mobile-overlay');
const mobileDropdowns = document.querySelectorAll('.mobile-nav-item.has-dropdown');
const navbarContent = document.querySelector('.navbar-content');

// Mobile menu functionality
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenuCanvas.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = mobileMenuCanvas.classList.contains('active') ? 'hidden' : '';
});

mobileOverlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mobileMenuCanvas.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

mobileDropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        if (!e.target.classList.contains('mobile-dropdown-item')) {
            dropdown.classList.toggle('active');
        }
    });
});

// Scroll-based background change
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbarContent.classList.add('scrolled');
    } else {
        navbarContent.classList.remove('scrolled');
    }
});