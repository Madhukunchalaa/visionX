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

    window.addEventListener('scroll', function () {
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
        anchor.addEventListener('click', function (e) {
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

document.addEventListener('DOMContentLoaded', function () {
    loadNavbar();
    loadFooter();
    initNavbarScroll();
    initSmoothScroll();
    initLiteYouTube();
    initLazyIframes();
});

/**
 * Initialize Lite YouTube Embeds (Click-to-Load)
 */
function initLiteYouTube() {
    document.querySelectorAll('.lite-youtube').forEach(wrapper => {
        wrapper.addEventListener('click', function () {
            if (this.dataset.loaded) return;

            const videoId = this.dataset.videoId;
            if (!videoId) return;

            // Create iframe
            const iframe = document.createElement('iframe');

            // Copy optional params from data attributes or use defaults
            const params = this.dataset.params || 'autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&controls=1';

            iframe.src = `https://www.youtube.com/embed/${videoId}?${params}`;
            iframe.width = "100%";
            iframe.height = "100%";
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;

            // Clear facade and append iframe
            this.innerHTML = '';
            this.appendChild(iframe);
            this.dataset.loaded = 'true';
        });
    });
}

/**
 * Initialize Lazy Iframes (Scroll-to-Load)
 * Used for background videos or off-screen content
 */
function initLazyIframes() {
    const lazyIframes = document.querySelectorAll('.lazy-iframe');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = entry.target;
                    if (iframe.dataset.src) {
                        iframe.src = iframe.dataset.src;
                        // Optional: fade in
                        iframe.onload = () => {
                            iframe.style.opacity = 1;
                        };
                    }
                    observer.unobserve(iframe);
                }
            });
        }, { rootMargin: '200px' }); // Load when 200px away

        lazyIframes.forEach(iframe => {
            observer.observe(iframe);
        });
    } else {
        // Fallback for older browsers
        lazyIframes.forEach(iframe => {
            if (iframe.dataset.src) {
                iframe.src = iframe.dataset.src;
            }
        });
    }
}

