/**
 * Index Page JavaScript
 * Specific functionality for index.html
 */

document.addEventListener('DOMContentLoaded', function () {
    initVideoControls();
    initShowcasePlayButtons();
    initShowcaseHoverControls();
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
        button.addEventListener('click', function () {
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
        button.addEventListener('click', function () {
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
                try { v.pause(); } catch (e) { }
            }
        });
    }

    playButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
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

// ========================================
// SHOWCASE HOVER CONTROLS
// ========================================

/**
 * Initialize hover controls for the showcase videos.
 * - MouseEnter: Show native controls
 * - MouseLeave: Hide native controls
 */
function initShowcaseHoverControls() {
    const videoCards = document.querySelectorAll('.video-showcase-section .video-card');

    videoCards.forEach(card => {
        const video = card.querySelector('video');
        if (!video) return;

        // Ensure controls are hidden initially
        video.controls = false;

        card.addEventListener('mouseenter', () => {
            video.controls = true;
        });

        card.addEventListener('mouseleave', () => {
            video.controls = false;
        });
    });
}


// ========================================
// YOUTUBE PLAYER INTEGRATION
// ========================================

// Store player instances and configs
var ytPlayers = {};

/**
 * Load YouTube IFrame API Asynchronously
 */
function initYouTubeAPI() {
    if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
        onYouTubeIframeAPIReady();
    }
}

/**
 * API Ready Callback
 */
function onYouTubeIframeAPIReady() {
    // Player 1: Value Homes
    createYTPlayer('player-value-homes', 'msfWpTJCqmA', {
        cardId: 'yt-card-value-homes',
        playIconId: 'play-icon-yt',
        pauseIconId: 'pause-icon-yt',
        playPauseBtnId: 'play-pause-yt',
        muteBtnId: 'mute-yt',
        volUpIconId: 'vol-up-yt',
        volMuteIconId: 'vol-mute-yt',
        progressBarId: 'progress-bar-yt',
        progressContainerId: 'progress-container-yt',
        currTimeId: 'current-time',
        durId: 'duration',
        fsBtnId: 'fullscreen-yt'
    });

    // Player 2: ROA
    createYTPlayer('player-roa', 'olRQfKtTZ0g', {
        cardId: 'yt-card-roa',
        playIconId: 'play-icon-roa',
        pauseIconId: 'pause-icon-roa',
        playPauseBtnId: 'play-pause-roa',
        muteBtnId: 'mute-roa',
        volUpIconId: 'vol-up-roa',
        volMuteIconId: 'vol-mute-roa',
        progressBarId: 'progress-bar-roa',
        progressContainerId: 'progress-container-roa',
        currTimeId: 'current-time-roa',
        durId: 'duration-roa',
        fsBtnId: 'fullscreen-roa'
    });

    // Player 3: Family AI
    createYTPlayer('player-family', '_6JXT_ipYjY', {
        cardId: 'yt-card-family',
        playIconId: 'play-icon-family',
        pauseIconId: 'pause-icon-family',
        playPauseBtnId: 'play-pause-family',
        muteBtnId: 'mute-family',
        volUpIconId: 'vol-up-family',
        volMuteIconId: 'vol-mute-family',
        progressBarId: 'progress-bar-family',
        progressContainerId: 'progress-container-family',
        currTimeId: 'current-time-family',
        durId: 'duration-family',
        fsBtnId: 'fullscreen-family'
    });

    // Player 4: Thaman
    createYTPlayer('player-thaman', 'H-52-y53Txc', {
        cardId: 'yt-card-thaman',
        playIconId: 'play-icon-thaman',
        pauseIconId: 'pause-icon-thaman',
        playPauseBtnId: 'play-pause-thaman',
        muteBtnId: 'mute-thaman',
        volUpIconId: 'vol-up-thaman',
        volMuteIconId: 'vol-mute-thaman',
        progressBarId: 'progress-bar-thaman',
        progressContainerId: 'progress-container-thaman',
        currTimeId: 'current-time-thaman',
        durId: 'duration-thaman',
        fsBtnId: 'fullscreen-thaman'
    });

    // Player 5: Crocodile
    createYTPlayer('player-crocodile', 'EInPqM5l5ac', {
        cardId: 'yt-card-crocodile',
        playIconId: 'play-icon-crocodile',
        pauseIconId: 'pause-icon-crocodile',
        playPauseBtnId: 'play-pause-crocodile',
        muteBtnId: 'mute-crocodile',
        volUpIconId: 'vol-up-crocodile',
        volMuteIconId: 'vol-mute-crocodile',
        progressBarId: 'progress-bar-crocodile',
        progressContainerId: 'progress-container-crocodile',
        currTimeId: 'current-time-crocodile',
        durId: 'duration-crocodile',
        fsBtnId: 'fullscreen-crocodile'
    });

    // Player 6: Marco
    createYTPlayer('player-marco', 'ZjYrD7jlZPw', {
        cardId: 'yt-card-marco',
        playIconId: 'play-icon-marco',
        pauseIconId: 'pause-icon-marco',
        playPauseBtnId: 'play-pause-marco',
        muteBtnId: 'mute-marco',
        volUpIconId: 'vol-up-marco',
        volMuteIconId: 'vol-mute-marco',
        progressBarId: 'progress-bar-marco',
        progressContainerId: 'progress-container-marco',
        currTimeId: 'current-time-marco',
        durId: 'duration-marco',
        fsBtnId: 'fullscreen-marco'
    });
}

function createYTPlayer(elementId, videoId, uiConfig) {
    ytPlayers[elementId] = {
        config: uiConfig,
        player: new YT.Player(elementId, {
            height: '100%',
            width: '100%',
            videoId: videoId,
            playerVars: {
                'playsinline': 1,
                'controls': 0,
                'rel': 0,
                'disablekb': 1,
                'fs': 0,
                'modestbranding': 1,
                'loop': 1,
                'playlist': videoId
            },
            events: {
                'onReady': function (event) { onPlayerReady(event, elementId); },
                'onStateChange': function (event) { onPlayerStateChange(event, elementId); }
            }
        })
    };
}

function onPlayerReady(event, elementId) {
    var playerIdx = ytPlayers[elementId];
    setupCustomControls(playerIdx.player, playerIdx.config);

    // Start progress loop for this player
    setInterval(function () {
        updateProgressBar(playerIdx.player, playerIdx.config);
    }, 500);

    event.target.mute();
    event.target.playVideo();
}

function onPlayerStateChange(event, elementId) {
    var config = ytPlayers[elementId].config;
    const playIcon = document.getElementById(config.playIconId);
    const pauseIcon = document.getElementById(config.pauseIconId);

    if (event.data == YT.PlayerState.PLAYING) {
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'inline-block';
    } else {
        if (playIcon) playIcon.style.display = 'inline-block';
        if (pauseIcon) pauseIcon.style.display = 'none';
    }
}

function formatTime(seconds) {
    seconds = Math.round(seconds);
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = '0' + remainingSeconds;
    }
    return minutes + ':' + remainingSeconds;
}

function updateProgressBar(player, config) {
    if (player && player.getCurrentTime) {
        var currentTime = player.getCurrentTime();
        var duration = player.getDuration();

        if (duration > 0) {
            var percentage = (currentTime / duration) * 100;
            var progressBar = document.getElementById(config.progressBarId);
            if (progressBar) progressBar.style.width = percentage + '%';

            var currTimeEl = document.getElementById(config.currTimeId);
            var durEl = document.getElementById(config.durId);
            if (currTimeEl) currTimeEl.innerText = formatTime(currentTime);
            if (durEl) durEl.innerText = formatTime(duration);
        }
    }
}

function setupCustomControls(player, config) {
    // Play/Pause
    var playPauseBtn = document.getElementById(config.playPauseBtnId);
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', function () {
            var state = player.getPlayerState();
            if (state == YT.PlayerState.PLAYING) {
                player.pauseVideo();
            } else {
                player.playVideo();
            }
        });
    }

    // Mute/Unmute
    var muteBtn = document.getElementById(config.muteBtnId);
    if (muteBtn) {
        muteBtn.addEventListener('click', function () {
            if (player.isMuted()) {
                player.unMute();
                document.getElementById(config.volMuteIconId).style.display = 'none';
                document.getElementById(config.volUpIconId).style.display = 'inline-block';
            } else {
                player.mute();
                document.getElementById(config.volMuteIconId).style.display = 'inline-block';
                document.getElementById(config.volUpIconId).style.display = 'none';
            }
        });
    }

    // Fullscreen
    var fsBtn = document.getElementById(config.fsBtnId);
    if (fsBtn) {
        fsBtn.addEventListener('click', function () {
            var elem = document.getElementById(config.cardId);
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
        });
    }

    // Seek
    var progContainer = document.getElementById(config.progressContainerId);
    if (progContainer) {
        progContainer.addEventListener('click', function (e) {
            var rect = this.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var width = rect.width;
            var percentage = x / width;

            var duration = player.getDuration();
            var newTime = duration * percentage;

            player.seekTo(newTime, true);
        });
    }
}

// Initialize API
initYouTubeAPI();
