/**
 * Common JavaScript Functions
 * Shared functionality across all pages
 */

// ========================================
// NAVBAR & FOOTER LOADING
// ========================================

/**
 * Load navbar into placeholder
 */
function loadNavbar() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (!navbarPlaceholder) return;

    fetch('navbar.html')
        .then(res => res.text())
        .then(data => {
            navbarPlaceholder.innerHTML = data;
            
            // Extract and execute any scripts from navbar
            const container = navbarPlaceholder;
            const scripts = container.querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                newScript.textContent = script.textContent;
                document.body.appendChild(newScript);
            });
            
            // Load navbar.js after HTML is injected
            const navbarScript = document.createElement('script');
            navbarScript.src = 'assets/js/navbar.js';
            document.body.appendChild(navbarScript);
        })
        .catch(error => console.error('Error loading navbar:', error));
}

/**
 * Load footer into placeholder
 */
function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;

    fetch('footer.html')
        .then(res => res.text())
        .then(data => {
            footerPlaceholder.innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

/**
 * Initialize navbar scroll effect
 */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================

/**
 * Initialize smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// INITIALIZE ON DOM LOAD
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
    loadFooter();
    initNavbarScroll();
    initSmoothScroll();
});

