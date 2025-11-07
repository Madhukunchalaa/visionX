/**
 * About Page JavaScript
 * Specific functionality for about.html
 */

document.addEventListener('DOMContentLoaded', function() {
    initAboutAnimations();
});

// ========================================
// SCROLL ANIMATIONS
// ========================================

/**
 * Initialize Intersection Observer for scroll animations
 */
function initAboutAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('about-animated');
                
                // Determine animation based on element
                if (entry.target.classList.contains('about-hero-content')) {
                    entry.target.style.animation = 'about-fadeInUp 0.8s ease-out forwards';
                } else if (entry.target.parentElement && 
                           (entry.target.parentElement.classList.contains('about-solution-icons') ||
                            entry.target.parentElement.classList.contains('about-solution-text'))) {
                    entry.target.style.animation = 'about-scaleIn 0.6s ease-out forwards';
                } else if (entry.target.classList.contains('about-comparison-side')) {
                    const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                    if (index === 0) {
                        entry.target.style.animation = 'about-slideInLeft 0.7s ease-out forwards';
                    } else if (index === 2) {
                        entry.target.style.animation = 'about-slideInRight 0.7s ease-out forwards';
                    }
                } else {
                    entry.target.style.animation = 'about-fadeInUp 0.8s ease-out forwards';
                }
            }
        });
    }, observerOptions);

    // Observe all elements with about-animate-on-scroll class
    const aboutAnimatedElements = document.querySelectorAll('.about-animate-on-scroll');
    aboutAnimatedElements.forEach(el => observer.observe(el));
}

