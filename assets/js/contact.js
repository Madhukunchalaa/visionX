/**
 * Contact Page JavaScript
 * Specific functionality for contact.html
 */

document.addEventListener('DOMContentLoaded', function() {
    initFAQ();
    initVideoControls();
});

// ========================================
// FAQ TOGGLE
// ========================================

/**
 * Toggle FAQ item
 * @param {HTMLElement} button - The button that triggered the toggle
 */
function toggleFAQ(button) {
    const faqItem = button.closest('.studio351-faq-item');
    if (!faqItem) return;

    const allItems = document.querySelectorAll('.studio351-faq-item');
    
    // Close all other items
    allItems.forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current item
    faqItem.classList.toggle('active');
}

/**
 * Initialize FAQ functionality
 */
function initFAQ() {
    // Make toggleFAQ available globally for onclick handlers
    window.toggleFAQ = toggleFAQ;
}

// ========================================
// VIDEO CONTROLS
// ========================================

/**
 * Initialize video play/pause and mute/unmute controls
 */
function initVideoControls() {
    // Play/Pause functionality
    document.querySelectorAll('.play-pause-btn').forEach(button => {
        button.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video');
            const video = document.getElementById(videoId);
            if (!video) return;

            const playIcon = this.querySelector('.play-icon');
            const pauseIcon = this.querySelector('.pause-icon');
            
            if (video.paused) {
                video.play().catch(error => {
                    console.log('Video play prevented:', error);
                });
                if (playIcon) playIcon.style.display = 'none';
                if (pauseIcon) pauseIcon.style.display = 'inline';
            } else {
                video.pause();
                if (playIcon) playIcon.style.display = 'inline';
                if (pauseIcon) pauseIcon.style.display = 'none';
            }
        });
    });

    // Mute/Unmute functionality
    document.querySelectorAll('.mute-unmute-btn').forEach(button => {
        button.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video');
            const video = document.getElementById(videoId);
            if (!video) return;

            const unmuteIcon = this.querySelector('.unmute-icon');
            const muteIcon = this.querySelector('.mute-icon');
            
            if (video.muted) {
                video.muted = false;
                if (unmuteIcon) unmuteIcon.style.display = 'inline';
                if (muteIcon) muteIcon.style.display = 'none';
            } else {
                video.muted = true;
                if (unmuteIcon) unmuteIcon.style.display = 'none';
                if (muteIcon) muteIcon.style.display = 'inline';
            }
        });
    });
}

