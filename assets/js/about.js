/**
 * About Page JavaScript
 * Specific functionality for about.html
 */

document.addEventListener('DOMContentLoaded', function() {
    initAboutAnimations();
    initTriReveal();
    initTeamNoteTypewriter();
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

/**
 * Cycle through "What You Actually Get" triangle cards.
 */
function initTriReveal() {
    const section = document.querySelector('.traingles');
    const cards = Array.from(document.querySelectorAll('.traingles .tri'));
    if (!section || !cards.length) return;

    let index = 0;
    let revealTimeoutId = null;
    let showAllTimeoutId = null;
    let isRunning = false;

    const showCard = (idx) => {
        cards[idx].classList.add('tri-active');
    };

    const clearTimers = () => {
        if (revealTimeoutId) {
            clearTimeout(revealTimeoutId);
            revealTimeoutId = null;
        }
        if (showAllTimeoutId) {
            clearTimeout(showAllTimeoutId);
            showAllTimeoutId = null;
        }
    };

    const resetState = () => {
        clearTimers();
        index = 0;
        section.classList.remove('tri-show-all');
        cards.forEach(card => card.classList.remove('tri-active'));
        isRunning = false;
    };

    const getDelayForIndex = (idx) => (idx === 0 ? 0 : 1000);

    const scheduleNextReveal = () => {
        revealTimeoutId = setTimeout(() => {
            if (index < cards.length) {
                showCard(index);
                index += 1;
            }

            if (index < cards.length) {
                scheduleNextReveal();
            } else {
                showAllTimeoutId = setTimeout(() => {
                    section.classList.add('tri-show-all');
                    isRunning = false;
                }, 1000);
            }
        }, getDelayForIndex(index));
    };

    const startSequence = () => {
        if (isRunning) return;
        resetState();
        isRunning = true;
        scheduleNextReveal();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.target !== section) return;

            if (entry.isIntersecting) {
                startSequence();
            } else {
                resetState();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(section);
}

function initTeamNoteTypewriter() {
    const note = document.querySelector('.about-team-note');
    if (!note) return;

    const text = note.dataset.typeText || note.textContent.trim();
    if (!text) return;

    const displaySpan = document.createElement('span');
    displaySpan.className = 'about-team-note-text';
    note.textContent = '';
    note.appendChild(displaySpan);

    let charIndex = 0;
    let typingTimeoutId = null;
    const typingSpeed = 60;

    const typeNextChar = () => {
        if (charIndex <= text.length) {
            displaySpan.textContent = text.slice(0, charIndex);
            charIndex += 1;
            typingTimeoutId = setTimeout(typeNextChar, typingSpeed);
        }
    };

    let isTyping = false;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!isTyping) {
                    isTyping = true;
                    typeNextChar();
                }
            } else {
                if (typingTimeoutId) {
                    clearTimeout(typingTimeoutId);
                    typingTimeoutId = null;
                }
                charIndex = 0;
                displaySpan.textContent = '';
                isTyping = false;
            }
        });
    }, { threshold: 0.4 });

    observer.observe(note);
}

 const particlesContainer = document.getElementById('particles');
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('light-particle');
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            
            // Random size variation
            const size = Math.random() * 3 + 1;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            particlesContainer.appendChild(particle);
        }