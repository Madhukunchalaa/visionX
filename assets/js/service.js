/**
 * Service Page JavaScript
 * Specific functionality for service.html
 */

document.addEventListener('DOMContentLoaded', function() {
    initServiceMorph();
});

// ========================================
// SERVICE MORPH ANIMATION
// ========================================

/**
 * Service data for morph animation
 */
const svcMorphServices = [
    {
        title: 'Brand Videos',
        bestFor: 'Marketing campaigns',
        timeline: '3-5 days',
        description: 'Create stunning promotional videos that capture your brand essence and drive engagement across all marketing channels.'
    },
    {
        title: 'YouTube Content',
        bestFor: 'Channel growth',
        timeline: '3-4 days',
        description: 'Professional video production optimized for YouTube algorithm success, helping you grow your subscriber base and engagement.'
    },
    {
        title: 'AI Avatars',
        bestFor: 'Scale & localization',
        timeline: '2-3 days',
        description: 'Leverage AI-powered avatars to create personalized, multilingual content at scale without traditional production overhead.'
    },
    {
        title: 'Learning Videos',
        bestFor: 'Education & training',
        timeline: '4-6 days',
        description: 'Develop comprehensive educational content that enhances learning outcomes and keeps your audience engaged throughout.'
    }
];

/**
 * Initialize service morph functionality
 */
function initServiceMorph() {
    const svcMorphSelectors = document.querySelectorAll('.svc-morph-selector-card');
    const svcMorphContent = document.getElementById('svcMorphContent');
    const svcMorphDisplay = document.getElementById('svcMorphDisplay');
    const svcMorphIndicators = document.querySelectorAll('.svc-morph-dot');
    const svcMorphVideos = document.querySelectorAll('.svc-morph-video-bg');

    if (!svcMorphContent || !svcMorphDisplay) return;

    /**
     * Switch to a specific service
     * @param {number} index - Service index
     */
    function svcMorphToService(index) {
        const service = svcMorphServices[index];
        if (!service) return;
        
        svcMorphDisplay.classList.add('svc-morph-animating');
        
        svcMorphVideos.forEach((video, i) => {
            if (i === index) {
                video.classList.add('svc-morph-active');
                video.play().catch(e => console.log('Video play error:', e));
            } else {
                video.classList.remove('svc-morph-active');
                video.pause();
            }
        });
        
        setTimeout(() => {
            svcMorphContent.innerHTML = `
                <h3 class="svc-morph-title-main">${service.title}</h3>
                <div class="svc-morph-meta-grid">
                    <div class="svc-morph-meta-item">
                        <div class="svc-morph-meta-label">Best For</div>
                        <div class="svc-morph-meta-value">${service.bestFor}</div>
                    </div>
                    <div class="svc-morph-meta-item">
                        <div class="svc-morph-meta-label">Timeline</div>
                        <div class="svc-morph-meta-value">${service.timeline}</div>
                    </div>
                </div>
                <p class="svc-morph-description-text">${service.description}</p>
            `;
        }, 200);
        
        setTimeout(() => {
            svcMorphDisplay.classList.remove('svc-morph-animating');
        }, 800);
        
        svcMorphSelectors.forEach((sel, i) => {
            sel.classList.toggle('svc-morph-active', i === index);
        });
        
        svcMorphIndicators.forEach((ind, i) => {
            ind.classList.toggle('svc-morph-active', i === index);
        });
    }

    // Add click listeners to selector cards
    svcMorphSelectors.forEach((selector, index) => {
        selector.addEventListener('click', () => {
            svcMorphToService(index);
        });
    });

    // Initialize first video
    window.addEventListener('load', () => {
        const firstVideo = document.getElementById('svcMorphVideo0');
        if (firstVideo) {
            firstVideo.play().catch(e => console.log('Initial video autoplay prevented:', e));
        }
    });

    // Auto-rotate services
    let svcMorphCurrentIndex = 0;
    setInterval(() => {
        svcMorphCurrentIndex = (svcMorphCurrentIndex + 1) % svcMorphServices.length;
        svcMorphToService(svcMorphCurrentIndex);
    }, 5000);
}

