/**
 * Index Page JavaScript
 * Specific functionality for index.html
 */

document.addEventListener('DOMContentLoaded', function() {
    initVideoControls();
    initShowcasePlayButtons();
});

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

// ========================================
// SHOWCASE PLAY OVERLAY
// ========================================

/**
 * Initialize play-overlay buttons in the showcase grid.
 * Non-autoplay videos will only start when their overlay is clicked.
 * Ensures only one non-autoplay video plays at a time.
 */
function initShowcasePlayButtons() {
    const playButtons = document.querySelectorAll('.play-overlay');

    function pauseAllExcept(exceptId) {
        document.querySelectorAll('.showcase-grid video').forEach(v => {
            // never pause the autoplay tile (id: autoVid)
            if (v.id === 'autoVid') return;
            if (v.id !== exceptId) {
                try { v.pause(); } catch (e) {}
            }
        });
    }

    playButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const targetId = this.getAttribute('data-target');
            const video = document.getElementById(targetId);
            if (!video) return;

            // If video is paused, play it and hide overlay; otherwise pause and show overlay
            if (video.paused) {
                pauseAllExcept(targetId);
                video.play().catch(err => console.log('play prevented', err));
                this.style.display = 'none';
            } else {
                video.pause();
                this.style.display = 'flex';
            }
        });
    });
}

